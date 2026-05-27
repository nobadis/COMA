#!/usr/bin/env python3
"""Mirror comunicacionenmallorca.com for static hosting."""
from __future__ import annotations

import hashlib
import os
import re
import sys
import time
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlparse, urlunparse
from urllib.request import Request, urlopen

BASE = "https://comunicacionenmallorca.com"
ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"

PAGES = [
    ("/", "index.html"),
    ("/aviso-legal/", "aviso-legal/index.html"),
    ("/cookies/", "cookies/index.html"),
    ("/privacidad/", "privacidad/index.html"),
]

USER_AGENT = "Mozilla/5.0 (compatible; COMA-mirror/1.0)"
DOWNLOADED: set[str] = set()
QUEUE: list[str] = []


def fetch(url: str) -> bytes:
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=60) as resp:
        return resp.read()


def is_same_site(url: str) -> bool:
    p = urlparse(url)
    if not p.netloc:
        return True
    return p.netloc in ("comunicacionenmallorca.com", "www.comunicacionenmallorca.com")


def to_local_path(url: str) -> Path | None:
    p = urlparse(url)
    if p.netloc and not is_same_site(url):
        return None
    path = p.path or "/"
    if path.endswith("/"):
        path += "index.html"
    if path.startswith("/"):
        path = path[1:]
    return SITE / path


def enqueue(url: str) -> None:
    if not url or url.startswith("data:") or url.startswith("mailto:") or url.startswith("tel:"):
        return
    if url.startswith("//"):
        url = "https:" + url
    if not is_same_site(url):
        return
    clean = url.split("#")[0].split("?")[0]
    if clean in DOWNLOADED:
        return
    DOWNLOADED.add(clean)
    QUEUE.append(clean)


def download_asset(url: str) -> None:
    local = to_local_path(url)
    if not local:
        return
    if local.exists() and local.stat().st_size > 0:
        return
    try:
        data = fetch(url if url.startswith("http") else urljoin(BASE, url))
    except Exception as exc:
        print(f"WARN skip {url}: {exc}")
        return
    local.parent.mkdir(parents=True, exist_ok=True)
    local.write_bytes(data)
    print(f"OK {local.relative_to(ROOT)}")
    if local.suffix in {".css", ".html"}:
        scan_urls(data.decode("utf-8", errors="ignore"), url)


def scan_urls(text: str, base_url: str) -> None:
    for m in re.finditer(r"url\((['\"]?)([^)'\"]+)\1\)", text):
        enqueue(urljoin(base_url, m.group(2).strip()))
    for m in re.finditer(r"""src=["']([^"']+)["']""", text):
        enqueue(urljoin(base_url, m.group(1)))
    for m in re.finditer(r"""href=["']([^"']+)["']""", text):
        val = m.group(1)
        if (
            "wp-content" in val
            or "wp-includes" in val
            or val.endswith(
                (
                    ".css",
                    ".js",
                    ".png",
                    ".jpg",
                    ".jpeg",
                    ".gif",
                    ".webp",
                    ".svg",
                    ".woff",
                    ".woff2",
                    ".ttf",
                    ".eot",
                )
            )
        ):
            enqueue(urljoin(base_url, val))
    for m in re.finditer(r"""srcset=["']([^"']+)["']""", text):
        for part in m.group(1).split(","):
            enqueue(urljoin(base_url, part.strip().split()[0]))


def rewrite_url(url: str, page_rel: str) -> str:
    if not url or url.startswith("data:") or url.startswith("mailto:") or url.startswith("#"):
        return url
    if url.startswith("//"):
        url = "https:" + url
    if url.startswith("http") and not is_same_site(url):
        return url
    page_url = urljoin(BASE, Path(page_rel).parent.as_posix() + "/")
    abs_url = urljoin(page_url, url)
    local = to_local_path(abs_url)
    if not local:
        return url
    base_dir = SITE / Path(page_rel).parent
    rel = os.path.relpath(local, base_dir)
    return rel.replace("\\", "/")


def rewrite_html(html: str, page_rel: str) -> str:
    def repl_attr(match: re.Match[str]) -> str:
        attr, val = match.group(1), match.group(2)
        return f'{attr}="{rewrite_url(val, page_rel)}"'

    html = re.sub(r'(href|src|action)=["\']([^"\']+)["\']', repl_attr, html)
    html = re.sub(
        r'srcset=["\']([^"\']+)["\']',
        lambda m: "srcset="
        + '"'
        + ", ".join(
            f"{rewrite_url(p.strip().split()[0], page_rel)} {p.strip().split()[1] if len(p.strip().split()) > 1 else ''}".strip()
            for p in m.group(1).split(",")
        )
        + '"',
        html,
    )

    # Remove phone icon box widget (exactly 3 closing divs: wrapper, container, widget)
    html = re.sub(
        r'<div class="elementor-element elementor-element-4cc9fe05[\s\S]*?</div>\s*</div>\s*</div>\s*</div>\s*',
        "",
        html,
        count=1,
    )

    # Remove Elementor popup templates (barky demo content)
    html = re.sub(
        r'<div data-elementor-type="popup"[\s\S]*?</div>\s*(?=<link rel=|<script )',
        "",
        html,
    )

    # Remove phone mentions and legacy personal data in legal copy
    html = re.sub(r",?\s*y teléfono\s*659477715", "", html, flags=re.I)
    html = re.sub(r",?\s*el\s+teléfono\s*659477715", "", html, flags=re.I)
    html = re.sub(r"\+34\s*659\s*47\s*77\s*15", "", html)
    html = re.sub(r"659477715", "", html)
    html = re.sub(r"Jaime\s+Mora\s+Bosch", "Publicom Marketing 2000 SL", html, flags=re.I)
    html = re.sub(
        r"Calle\s+son\s+Catl?a?r?e?t\s+6\s+A\s+BajosA[^.<]*",
        "PASEO MALLORCA, 16, 07012 PALMA (Balears, Illes)",
        html,
        flags=re.I,
    )

    # Dynamic year
    html = html.replace("Copyright © 2023", 'Copyright © <span class="coma-year"></span>')
    html = re.sub(r"Copyright ©\s*\d{4}", 'Copyright © <span class="coma-year"></span>', html)
    html = re.sub(r"@AÑO|@ANO|\{AÑO\}|\{year\}", '<span class="coma-year"></span>', html, flags=re.I)

    # Point internal pages to local paths
    html = html.replace(f"{BASE}/aviso-legal", "/aviso-legal/")
    html = html.replace(f"{BASE}/cookies", "/cookies/")
    html = html.replace(f"{BASE}/privacidad", "/privacidad/")
    html = html.replace(f"{BASE}/", "/")
    html = html.replace('href="https://comunicacionenmallorca.com"', 'href="/"')

    return html


def mirror_page(path: str, out_rel: str) -> None:
    url = urljoin(BASE, path)
    print(f"PAGE {url}")
    html = fetch(url).decode("utf-8", errors="ignore")
    scan_urls(html, url)
    html = rewrite_html(html, out_rel)
    out = SITE / out_rel
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(html, encoding="utf-8")
    print(f"SAVED {out.relative_to(ROOT)}")


def main() -> int:
    if SITE.exists():
        import shutil

        shutil.rmtree(SITE)
    SITE.mkdir(parents=True)

    for path, out in PAGES:
        mirror_page(path, out)

    # Download queued assets
    while QUEUE:
        url = QUEUE.pop(0)
        download_asset(url)
        time.sleep(0.05)

    print("DONE")
    print("Run: python3 scripts/postprocess.py")
    return 0


if __name__ == "__main__":
    sys.exit(main())
