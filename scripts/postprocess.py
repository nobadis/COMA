#!/usr/bin/env python3
"""Harden and fix mirrored static site."""
from __future__ import annotations

import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SITE = ROOT / "site"
DOMAIN = "https://comunicacionenmallorca.com"

HTML_PAGES = [
    SITE / "index.html",
    SITE / "aviso-legal" / "index.html",
    SITE / "cookies" / "index.html",
    SITE / "privacidad" / "index.html",
]

PAGE_CANONICAL = {
    "index.html": f"{DOMAIN}/",
    "aviso-legal/index.html": f"{DOMAIN}/aviso-legal/",
    "cookies/index.html": f"{DOMAIN}/cookies/",
    "privacidad/index.html": f"{DOMAIN}/privacidad/",
}


def fix_css_files() -> None:
    for css in SITE.rglob("*.css"):
        text = css.read_text(encoding="utf-8", errors="ignore")
        original = text
        text = text.replace(f"{DOMAIN}/wp-content/uploads/", "../../")
        text = text.replace(f"{DOMAIN}/wp-content/", "../../")
        text = text.replace(f"{DOMAIN}/", "/")
        if text != original:
            css.write_text(text, encoding="utf-8")
            print(f"CSS {css.relative_to(ROOT)}")


def strip_wp_noise(html: str) -> str:
    html = re.sub(r"<script>\s*window\._wpemojiSettings[\s\S]*?</script>\s*", "", html)
    html = re.sub(r"<style>\s*img\.wp-smiley[\s\S]*?</style>\s*", "", html)
    html = re.sub(
        r"<link rel='stylesheet' id='advanced-google-recaptcha-style-css'[^>]*>\s*",
        "",
        html,
    )
    html = re.sub(
        r"<script id='advanced-google-recaptcha-custom-js-extra'>[\s\S]*?</script>\s*",
        "",
        html,
    )
    html = re.sub(
        r"<script[^>]*advanced-google-recaptcha[^>]*></script>\s*",
        "",
        html,
    )
    html = re.sub(
        r"<script[^>]*recaptcha/api\.js[^>]*></script>\s*",
        "",
        html,
    )
    html = re.sub(r"<meta name=\"generator\"[^>]*>\s*", "", html)
    html = re.sub(r"<link rel=\"alternate\"[^>]*feed[^>]*>\s*", "", html, flags=re.I)
    html = re.sub(r"<link rel=\"https://api\.w\.org/\"[^>]*>\s*", "", html)
    html = re.sub(r"<link rel=\"alternate\" type=\"application/json\"[^>]*>\s*", "", html)
    html = re.sub(r"<link rel=\"EditURI\"[^>]*>\s*", "", html)
    html = re.sub(r"<link rel=\"wlwmanifest\"[^>]*>\s*", "", html)
    html = re.sub(r"<link rel='shortlink'[^>]*>\s*", "", html)
    html = re.sub(r"<link rel=\"alternate\" type=\"application/json\+oembed\"[^>]*>\s*", "", html)
    html = re.sub(r"<link rel=\"alternate\" type=\"text/xml\+oembed\"[^>]*>\s*", "", html)
    html = re.sub(r"<link rel='dns-prefetch'[^>]*>\s*", "", html)
    return html


def fix_seo(html: str, rel: str) -> str:
    canonical = PAGE_CANONICAL.get(rel.replace("\\", "/"), f"{DOMAIN}/")
    html = re.sub(
        r'<link rel="canonical" href="[^"]*"\s*/>',
        f'<link rel="canonical" href="{canonical}" />',
        html,
        count=1,
    )
    if 'name="description"' not in html:
        desc = (
            "Kit Digital para pymes y autónomos en Mallorca. "
            "Soluciones digitales, web, ecommerce, redes sociales y más."
        )
        if "aviso-legal" in rel:
            desc = "Aviso legal de Comunicación en Mallorca."
        elif "cookies" in rel:
            desc = "Política de cookies de Comunicación en Mallorca."
        elif "privacidad" in rel:
            desc = "Política de privacidad de Comunicación en Mallorca."
        html = html.replace(
            "<title>",
            f'<meta name="description" content="{desc}" />\n\t<title>',
            1,
        )
    html = html.replace('property="og:url" content="/"', f'property="og:url" content="{canonical}"')
    html = re.sub(
        r'https:\\/\\/comunicacionenmallorca\.com',
        DOMAIN.replace("/", "\\/"),
        html,
    )
    html = html.replace('"@id":"/"', f'"@id":"{DOMAIN}/"')
    html = html.replace('"url":"/"', f'"url":"{DOMAIN}/"')
    return html


def fix_links(html: str, depth: int) -> str:
    prefix = "../" * depth if depth else ""
    html = html.replace('href="index.html"', 'href="/"')
    html = html.replace('action="index.html"', 'action="/"')
    html = html.replace('href="../index.html"', 'href="/"')
    html = html.replace('href="/aviso-legal"', 'href="/aviso-legal/"')
    html = html.replace('href="/cookies"', 'href="/cookies/"')
    html = html.replace('href="/privacidad"', 'href="/privacidad/"')
    # Elementor asset paths in inline JSON
    html = html.replace(
        f'"ajaxurl":"https:\\/\\/comunicacionenmallorca.com\\/wp-admin\\/admin-ajax.php"',
        '"ajaxurl":""',
    )
    html = html.replace(
        '"assets":"https:\\/\\/comunicacionenmallorca.com\\/wp-content\\/plugins\\/elementor-pro\\/assets\\/"',
        f'"assets":"{prefix}wp-content/plugins/elementor-pro/assets/"',
    )
    html = html.replace(
        '"assets":"https:\\/\\/comunicacionenmallorca.com\\/wp-content\\/plugins\\/elementor\\/assets\\/"',
        f'"assets":"{prefix}wp-content/plugins/elementor/assets/"',
    )
    return html


def inject_assets(html: str, depth: int) -> str:
    prefix = "../" * depth if depth else ""
    fixes_css = f'{prefix}coma-fixes.css'
    static_js = f'{prefix}coma-static.js'
    if fixes_css not in html:
        html = html.replace("</head>", f'\t<link rel="stylesheet" href="{fixes_css}" />\n</head>')
    if "coma-static.js" not in html:
        html = re.sub(
            r'<script src="[^"]*coma-year\.js"[^>]*></script>\s*',
            "",
            html,
        )
        html = html.replace("</body>", f'\t<script src="{static_js}" defer></script>\n</body>')
    if 'rel="icon"' not in html:
        html = html.replace(
            "<head>",
            f'<head>\n\t<link rel="icon" href="{prefix}wp-content/uploads/2022/12/logo-alta.png" />',
            1,
        )
    if 'id="content"' not in html:
        html = html.replace(
            '<div data-elementor-type="wp-page"',
            '<div id="content" data-elementor-type="wp-page"',
            1,
        )
    return html


def process_html(path: Path) -> None:
    rel = str(path.relative_to(SITE))
    depth = len(path.relative_to(SITE).parts) - 1
    html = path.read_text(encoding="utf-8", errors="ignore")
    html = strip_wp_noise(html)
    html = fix_seo(html, rel)
    html = fix_links(html, depth)
    html = inject_assets(html, depth)
    path.write_text(html, encoding="utf-8")
    print(f"HTML {rel}")


def write_coma_assets() -> None:
    (SITE / "coma-fixes.css").write_text(
        """/* COMA static fixes */
html { scroll-behavior: smooth; }
body {
  overflow-x: hidden;
  margin: 0;
}
img, video, iframe {
  max-width: 100%;
}
.elementor-section.elementor-section-stretched {
  width: 100vw;
  max-width: 100vw;
  left: 50% !important;
  right: auto !important;
  margin-left: -50vw !important;
  margin-right: 0 !important;
}
.elementor-menu-anchor {
  scroll-margin-top: 110px;
}
.elementor-widget-image img,
.elementor-image-carousel .swiper-slide-image {
  height: auto;
}
@media (max-width: 767px) {
  .elementor-162 .elementor-element.elementor-element-3bf364a1 {
    margin-top: 0 !important;
    padding-top: 120px !important;
  }
  .elementor-heading-title {
    word-break: break-word;
  }
}
#cmplz-cookiebanner-container .cmplz-cookiebanner.cmplz-show {
  display: block !important;
}
""",
        encoding="utf-8",
    )

    (SITE / "coma-static.js").write_text(
        """(function () {
  var year = String(new Date().getFullYear());
  document.querySelectorAll(".coma-year").forEach(function (el) {
    el.textContent = year;
  });

  document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (e) {
      var id = link.getAttribute("href");
      if (!id || id.length < 2) return;
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });

  var banner = document.querySelector("#cmplz-cookiebanner-container .cmplz-cookiebanner");
  if (banner) {
    var key = "coma_cookie_consent";
    var stored = localStorage.getItem(key);
    if (!stored) {
      banner.classList.remove("cmplz-hidden");
      banner.classList.add("cmplz-show");
    }
    document.querySelectorAll(".cmplz-accept, .cmplz-btn.cmplz-accept").forEach(function (btn) {
      btn.addEventListener("click", function () {
        localStorage.setItem(key, "accepted");
        banner.classList.add("cmplz-hidden");
        banner.classList.remove("cmplz-show");
      });
    });
    document.querySelectorAll(".cmplz-deny, .cmplz-btn.cmplz-deny").forEach(function (btn) {
      btn.addEventListener("click", function () {
        localStorage.setItem(key, "rejected");
        banner.classList.add("cmplz-hidden");
        banner.classList.remove("cmplz-show");
      });
    });
  }
})();
""",
        encoding="utf-8",
    )


def main() -> None:
    write_coma_assets()
    fix_css_files()
    for page in HTML_PAGES:
        process_html(page)
    print("POSTPROCESS DONE")


if __name__ == "__main__":
    main()
