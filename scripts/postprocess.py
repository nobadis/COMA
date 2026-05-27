#!/usr/bin/env python3
"""Harden and fix mirrored static site."""
from __future__ import annotations

import json
import re
from pathlib import Path
from urllib.parse import quote

COMPANY = "Publicom Marketing 2000 SL"
CIF = "B07949647"
ADDRESS = "PASEO MALLORCA, 16, 07012 PALMA (Balears, Illes)"
EMAIL = "info@comunicacionenmallorca.com"


def mailto_link(subject: str) -> str:
    return (
        f'<a href="mailto:{EMAIL}?subject={quote(subject)}">{EMAIL}</a>'
    )


MAILTO_GENERAL = mailto_link("Consulta desde comunicacionenmallorca.com")
MAILTO_PRIVACY = mailto_link("Ejercicio de derechos RGPD - comunicacionenmallorca.com")
MAILTO_COOKIES = mailto_link("Consulta sobre cookies - comunicacionenmallorca.com")

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
    html = re.sub(
        r"<script id='cmplz-cookiebanner-js-extra'>[\s\S]*?</script>\s*",
        "",
        html,
    )
    html = re.sub(
        r"<script[^>]*complianz-gdpr/cookiebanner/js/complianz\.min\.js[^>]*></script>\s*",
        "",
        html,
    )
    html = re.sub(
        r'<link rel="stylesheet" href="[^"]*complianz/css/banner-[^"]*" />\s*',
        "",
        html,
    )
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
        r'property="og:image" content="/([^"]+)"',
        rf'property="og:image" content="{DOMAIN}/\1"',
        html,
    )
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
    for slug in ("aviso-legal", "cookies", "privacidad"):
        target = f"/{slug}/" if depth == 0 else f"{prefix}{slug}/"
        html = html.replace(f'href="{slug}/"', f'href="{target}"')
        html = html.replace(f'href="{slug}"', f'href="{target}"')
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
    cmplz_css = f"{prefix}wp-content/plugins/complianz-gdpr/cookiebanner/css/cookiebanner.css"
    if fixes_css not in html:
        html = html.replace(
            "</head>",
            f'\t<link rel="stylesheet" href="{cmplz_css}" />\n'
            f'\t<link rel="stylesheet" href="{fixes_css}" />\n</head>',
        )
    elif cmplz_css not in html:
        html = html.replace(
            f'<link rel="stylesheet" href="{fixes_css}" />',
            f'<link rel="stylesheet" href="{cmplz_css}" />\n\t<link rel="stylesheet" href="{fixes_css}" />',
        )
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


def sanitize_legal_content(html: str) -> str:
    """Remove legacy personal data; enforce Publicom Marketing 2000 SL details."""
    html = re.sub(r"Jaime\s+Mora\s+Bosch", COMPANY, html, flags=re.I)
    html = re.sub(
        r"Calle\s+son\s+Catl?a?r?e?t\s+6\s+A\s+BajosA,?\s*código postal\s+07014[^.<]*",
        ADDRESS,
        html,
        flags=re.I,
    )
    html = re.sub(r",?\s*el\s+teléfono\s*,?", " ", html, flags=re.I)
    html = re.sub(r"\+34\s*659[\s\d]{0,12}", "", html)
    html = re.sub(r"659\s*47\s*77\s*15", "", html)
    html = re.sub(r"659477715", "", html)
    html = re.sub(
        r'<a href="mailto:(?!info@comunicacionenmallorca\.com)[^"]*"[^>]*>[^<]*</a>',
        MAILTO_GENERAL,
        html,
        flags=re.I,
    )
    html = re.sub(r"&#106;\s*aime[^<]{0,120}", EMAIL, html, flags=re.I)
    html = re.sub(r"j\s*a\s*i\s*m\s*e\s*@", f"{EMAIL}", html, flags=re.I)

    aviso_identity = (
        "<p>En cumplimiento del deber de información estipulado en el artículo 10 "
        "de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la "
        "Información y del Comercio Electrónico (LSSI-CE), el titular del sitio web "
        "<strong>comunicacionenmallorca.com</strong> es "
        f"<strong>{COMPANY}</strong>, con CIF {CIF}, inscrita en el Registro "
        "Mercantil de Palma de Mallorca (Illes Balears), que opera comercialmente "
        'bajo la denominación <strong>Comunicación en Mallorca</strong>, con '
        f"domicilio social en {ADDRESS}, y correo electrónico de contacto "
        f"{MAILTO_GENERAL}. La presente información regula las condiciones de uso "
        "de esta página, las limitaciones de responsabilidad y las obligaciones que "
        "los usuarios del sitio asumen y se comprometen a respetar.</p>"
    )
    html = re.sub(
        r"<p>En cumplimiento del deber de información[\s\S]*?respetar\.</p>",
        aviso_identity,
        html,
        count=1,
    )

    privacy_responsible = (
        "<p>El responsable del tratamiento de los datos personales recabados a "
        "través de este sitio web es "
        f"<strong>{COMPANY}</strong>, con CIF {CIF}, con domicilio en {ADDRESS}. "
        f"Puede contactar en {MAILTO_PRIVACY}.</p>"
    )
    html = re.sub(
        r"<p>El (?:titular del sitio y )?responsable del tratamiento[\s\S]*?"
        r"(?:Baleares|Illes)\)\.</p>",
        privacy_responsible,
        html,
        count=1,
    )
    html = re.sub(
        r"(Tienes el derecho de acceder[\s\S]*?correo electrónico )"
        r'<a href="mailto:[^"]*"[^>]*>[^<]*</a>',
        rf"\1{MAILTO_PRIVACY}",
        html,
        count=1,
    )

    html = re.sub(
        r"<p>Para resolver cualquier duda sobre cómo utilizamos las cookies,[\s\S]*?</p>",
        f"<p>Para resolver cualquier duda sobre cómo utilizamos las cookies, "
        f"escríbenos a {MAILTO_COOKIES}.</p>",
        html,
        count=1,
    )

    html = re.sub(
        r"(<strong>Comunicación en Mallorca</strong> utiliza cookies\.</p>)",
        r"\1\n"
        f"<p>El responsable del sitio es <strong>{COMPANY}</strong> (CIF {CIF}), "
        f"con domicilio en {ADDRESS}.</p>",
        html,
        count=1,
    )

    html = re.sub(
        r"https://www\.agpd\.es/",
        "https://www.aepd.es/",
        html,
    )
    html = re.sub(
        r">Agencia de Protección de Datos<",
        ">Agencia Española de Protección de Datos (AEPD)<",
        html,
    )

    html = re.sub(
        r"(<p class=\"elementor-icon-box-description\">\s*\n?\s*)"
        r"info@comunicacionenmallorca\.com",
        rf"\1{MAILTO_GENERAL}",
        html,
        count=1,
    )

    return html


def process_html(path: Path) -> None:
    rel = str(path.relative_to(SITE))
    depth = len(path.relative_to(SITE).parts) - 1
    html = path.read_text(encoding="utf-8", errors="ignore")
    html = strip_wp_noise(html)
    html = sanitize_legal_content(html)
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
.elementor-invisible {
  visibility: visible !important;
  opacity: 1 !important;
  animation: none !important;
}
.elementor-location-footer {
  clear: both;
  width: 100%;
  position: relative;
  z-index: 1;
}
.elementor-element-6a0a3ee6 > .elementor-container {
  display: flex;
  flex-wrap: wrap;
  align-items: stretch;
}
.elementor-element-6a0a3ee6 .elementor-column.elementor-col-50 {
  width: 50%;
}
.elementor-element-422b94f3 .elementor-widget-google_maps iframe {
  min-height: 300px;
  width: 100%;
  border: 0;
}
#cmplz-cookiebanner-container {
  position: fixed;
  z-index: 99999;
  pointer-events: none;
}
#cmplz-cookiebanner-container .cmplz-cookiebanner {
  pointer-events: auto;
}
#cmplz-cookiebanner-container .cmplz-close svg {
  width: 16px;
  height: 16px;
}
#cmplz-cookiebanner-container .cmplz-cookiebanner.cmplz-show {
  display: block !important;
}
.cmplz-links.cmplz-documents {
  display: none;
}
@media (max-width: 767px) {
  .elementor-162 .elementor-element.elementor-element-3bf364a1 {
    margin-top: 0 !important;
    padding-top: 120px !important;
  }
  .elementor-heading-title {
    word-break: break-word;
  }
  .elementor-element-6a0a3ee6 .elementor-column.elementor-col-50 {
    width: 100%;
  }
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

  document.querySelectorAll(".elementor-invisible").forEach(function (el) {
    el.classList.remove("elementor-invisible");
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
  if (!banner) return;

  var key = "coma_cookie_consent";
  var hideBanner = function () {
    banner.classList.add("cmplz-hidden");
    banner.classList.remove("cmplz-show");
  };

  if (!localStorage.getItem(key)) {
    banner.classList.remove("cmplz-hidden");
    banner.classList.add("cmplz-show");
  }

  document.querySelectorAll(".cmplz-accept, .cmplz-btn.cmplz-accept").forEach(function (btn) {
    btn.addEventListener("click", function () {
      localStorage.setItem(key, "accepted");
      hideBanner();
    });
  });
  document.querySelectorAll(".cmplz-deny, .cmplz-btn.cmplz-deny").forEach(function (btn) {
    btn.addEventListener("click", function () {
      localStorage.setItem(key, "rejected");
      hideBanner();
    });
  });
  document.querySelectorAll(".cmplz-close").forEach(function (btn) {
    btn.addEventListener("click", hideBanner);
  });
  document.querySelectorAll(".cmplz-save-preferences").forEach(function (btn) {
    btn.addEventListener("click", function () {
      localStorage.setItem(key, "preferences");
      hideBanner();
    });
  });

  var legalPrefix = /^\\/?$/.test(location.pathname) ? "" : "../";
  document.querySelectorAll(".cmplz-link.cookie-statement").forEach(function (link) {
    if (link.getAttribute("href") === "#" || !link.getAttribute("href")) {
      link.setAttribute("href", legalPrefix + "cookies/");
    }
  });
  document.querySelectorAll(".cmplz-link.privacy-statement").forEach(function (link) {
    if (link.getAttribute("href") === "#" || !link.getAttribute("href")) {
      link.setAttribute("href", legalPrefix + "privacidad/");
    }
  });
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
