"""
Fuente única de las campañas de Google Ads: palabras clave, negativas y anuncios.
Comprueba los límites de Google (títulos 30, descripciones 90, enlaces 25/35, textos destacados 25)
y escribe ../1-google-ads/google-ads-editor.csv (para importar en Google Ads Editor) y
../1-google-ads/textos-google.txt (para copiar y pegar a mano). Uso: python3 google_ads.py
"""
import csv
import os

HERE = os.path.dirname(os.path.abspath(__file__))
OUT = os.path.join(HERE, "..", "1-google-ads")
BASE = "https://comunicacionenmallorca.com"


def url(path, camp, content):
    return f"{BASE}{path}?utm_source=google&utm_medium=cpc&utm_campaign={camp}&utm_content={content}"


GEN_PRECIO = ["cuanto cuesta una pagina web", "precio pagina web", "pagina web barata", "diseño web barato", "presupuesto pagina web", "pagina web economica", "pagina web precio cerrado"]
GEN_NEGOCIO = ["pagina web para autonomos", "web para autonomos", "pagina web para pymes", "pagina web para mi negocio", "crear pagina web para empresa", "hacer pagina web empresa", "diseño web pymes", "pagina web para empresa"]
GEN_PRO = ["diseño web profesional", "diseño de paginas web", "empresa diseño web", "agencia diseño web", "diseñador web", "empresa de paginas web"]

H_WEB = [
    ("Tu Web Profesional por 99 €", 1), ("Web a Medida por 99 € + IVA", 1),
    ("Sin Plantillas. Precio Cerrado", 0), ("Diseño Propio, Nunca Plantilla", 0), ("Hasta 4 Páginas Incluidas", 0),
    ("Perfecta en Móvil y con SSL", 0), ("Extras con Precio a la Vista", 0), ("29 Años en Comunicación", 0),
    ("Más de 100 Pymes Confían", 0), ("Calcula tu Web en 2 Minutos", 0), ("Agencia de Palma desde 1997", 0),
    ("Pago Único. Sin Sorpresas", 0), ("SEO Básico Incluido", 0), ("Web para Autónomos y Pymes", 0), ("Pide tu Web Hoy", 0),
]
D_WEB = [
    "Diseñamos tu web desde cero, con tu marca. Hasta 4 páginas, formulario, SEO básico y SSL.",
    "Precio cerrado: 99 € + IVA, pago único. Idiomas, reservas o tienda, con precio visible.",
    "Agencia de Palma desde 1997 y más de 100 pymes. Te respondemos personalmente.",
    "Marca lo que necesitas y ve el precio al momento. Propuesta con plazos, sin compromiso.",
]
H_MLL = [
    ("Diseño Web en Mallorca", 1), ("Webs para Negocios de Mallorca", 1),
    ("Agencia de Palma desde 1997", 0), ("Tu Web por 99 € + IVA", 0), ("Webs en 4 Idiomas", 0),
    ("Lista Antes de la Temporada", 0), ("Reunión en Palma o por Vídeo", 0), ("Sin Plantillas. Precio Cerrado", 0),
    ("Reservas Online Directas", 0), ("Paseo Mallorca 16, Palma", 0), ("Más de 100 Pymes Confían", 0),
    ("29 Años en Mallorca", 0), ("Diseño Propio, Nunca Plantilla", 0), ("Pide tu Propuesta Hoy", 0), ("Español, Inglés y Alemán", 0),
]
D_MLL = [
    "Somos de Palma desde 1997. Webs a medida desde 99 € + IVA, en los idiomas de tus clientes.",
    "Llega al turista antes de que llegue: web en varios idiomas y reservas online directas.",
    "Precio cerrado y propuesta con plazos. Reunión en Palma o por videollamada.",
    "Más de 100 pymes de la isla ya han confiado en nosotros. Cuéntanos tu negocio.",
]
H_MARCA = [
    ("Comunicación en Mallorca", 1), ("COMA: Web Oficial", 0), ("Agencia de Palma desde 1997", 0),
    ("Webs, SEO e IA para Pymes", 0), ("Web a Medida por 99 € + IVA", 0), ("Paseo Mallorca 16, Palma", 0),
    ("Más de 100 Pymes Confían", 0), ("Te Respondemos Personalmente", 0),
]
D_MARCA = [
    "Webs a medida desde 99 € + IVA, SEO, posicionamiento en IA y agentes para pymes.",
    "Agencia de Palma desde 1997. Más de 100 pymes. Te respondemos personalmente.",
]
H_SEO = [
    ("Aparece en Google y ChatGPT", 1), ("SEO Local desde 99 €/mes", 1),
    ("Sin Permanencia", 0), ("Aparece en Google Maps", 0), ("Ficha de Google y Reseñas", 0), ("Posicionamiento en IA (GEO)", 0),
    ("Informe Mensual Claro", 0), ("Auditoría de Cómo te Ven Hoy", 0), ("Que te Encuentren Cerca", 0),
    ("Agencia de Palma desde 1997", 0), ("Visibilidad en Google y en IA", 0), ("Más de 100 Pymes Confían", 0),
]
D_SEO = [
    "Trabajamos tu ficha, tu web y tu contenido para que aparezcas en Google, Maps y la IA.",
    "SEO local + GEO desde 99 €/mes + IVA, sin permanencia. Empezamos con una auditoría.",
    "Informe mensual claro: visibilidad, tráfico y contactos. Sin promesas de primer puesto.",
    "Tus clientes ya preguntan a ChatGPT y Gemini. Haz que tu negocio salga en la respuesta.",
]

CAMPAIGNS = [
    dict(id="G1", name="COMA | Search | Web99 | España", camp="web99-espana", budget="10 €/día", geo="España, EXCLUYENDO Illes Balears", groups=[
        dict(name="Precio", kws=GEN_PRECIO, path="/lp/web-99/", content="rsa-precio", h=H_WEB, d=D_WEB, p=("Web", "99-euros")),
        dict(name="Autónomos y pymes", kws=GEN_NEGOCIO, path="/lp/web-99/", content="rsa-negocio", h=H_WEB, d=D_WEB, p=("Web", "Pymes")),
        dict(name="Profesional", kws=GEN_PRO, path="/lp/web-99/", content="rsa-pro", h=H_WEB, d=D_WEB, p=("Diseno-Web", "A-Medida")),
    ]),
    dict(id="G2", name="COMA | Search | Web | Mallorca", camp="web-mallorca", budget="12 €/día", geo="Illes Balears (solo Presencia)", groups=[
        dict(name="Mallorca local", kws=["diseño web mallorca", "diseño web palma", "pagina web mallorca", "paginas web palma de mallorca", "agencia diseño web mallorca", "agencia marketing mallorca", "empresa paginas web mallorca", "diseñador web mallorca", "diseño web baleares", "agencia de comunicacion mallorca"], path="/lp/mallorca/", content="rsa-local", h=H_MLL, d=D_MLL, p=("Mallorca", "Web")),
        dict(name="Genérico en Mallorca", kws=GEN_PRECIO + GEN_NEGOCIO + GEN_PRO, path="/lp/mallorca/", content="rsa-generico", h=H_MLL, d=D_MLL, p=("Mallorca", "Web-99")),
    ]),
    dict(id="G3", name="COMA | Search | Marca", camp="marca", budget="1 €/día", geo="España", groups=[
        dict(name="Marca", kws=["comunicacion en mallorca", "coma mallorca", "comunicacionenmallorca", "coma agencia mallorca", "publicom marketing"], path="/", content="rsa-marca", h=H_MARCA, d=D_MARCA, p=("", ""), exact_only=True),
    ]),
    dict(id="G4", name="COMA | Search | SEO local (desde 7 ene)", camp="seo-local", budget="6 €/día", geo="España", groups=[
        dict(name="SEO local", kws=["seo local", "posicionamiento local google", "aparecer en google maps", "posicionar mi negocio en google", "seo para pymes", "seo mallorca", "posicionamiento web mallorca", "google mi negocio posicionamiento"], path="/lp/seo-local/", content="rsa-seo", h=H_SEO, d=D_SEO, p=("SEO", "Local")),
        dict(name="IA (GEO)", kws=["aparecer en chatgpt", "posicionamiento en chatgpt", "seo para ia", "posicionamiento en ia", "geo seo"], path="/lp/seo-local/", content="rsa-geo", h=H_SEO, d=D_SEO, p=("SEO", "IA")),
    ]),
]

NEG = ["gratis", "gratuito", "gratuita", "curso", "cursos", "master", "formacion", "aprender", "tutorial", "como hacer", "empleo", "trabajo", "trabajar", "oferta de empleo", "practicas", "sueldo", "salario", "plantilla", "plantillas", "descargar", "wordpress", "wix", "shopify", "squarespace", "webnode", "jimdo", "godaddy", "hostinger", "ionos", "canva", "que es", "definicion", "pdf", "ejemplos", "ideas", "inspiracion", "tfg", "universidad", "codigo", "html"]

SITELINKS = [
    ("Calcula tu presupuesto", "Marca lo que necesitas", "y ve el precio al momento", "/precios/"),
    ("Qué incluye la web", "Hasta 4 páginas y SSL", "Formulario y SEO básico", "/diseno-web/"),
    ("SEO local y en IA", "Google, Maps y ChatGPT", "Desde 99 €/mes, sin permanencia", "/seo-geo/"),
    ("Contacto", "Paseo Mallorca 16, Palma", "Te respondemos personalmente", "/contacto/"),
]
CALLOUTS = ["Precio cerrado", "Pago único", "Sin plantillas", "Desde 1997", "+100 pymes", "SSL incluido", "Perfecta en móvil", "Reunión en Palma"]
SNIPPET = ("Servicios", ["Diseño web", "Tienda online", "Reservas online", "SEO local", "Posicionamiento en IA", "Correo profesional"])
PRICES = [("Web Esencial", "99", "Hasta 4 páginas", "/lp/web-99/"), ("Cada idioma", "49", "Español, inglés, alemán…", "/precios/"), ("Reservas online", "149", "Tus clientes reservan", "/precios/"), ("Tienda online", "349", "Hasta 50 productos", "/precios/")]

# ------------------------------------------------------------------ validación
err = []
for c in CAMPAIGNS:
    for g in c["groups"]:
        for h, _ in g["h"]:
            if len(h) > 30: err.append(f"título >30 ({len(h)}): {h}")
        for d in g["d"]:
            if len(d) > 90: err.append(f"descripción >90 ({len(d)}): {d}")
        for p in g["p"]:
            if len(p) > 15: err.append(f"ruta >15: {p}")
        if not 3 <= len(g["h"]) <= 15: err.append(f"{g['name']}: {len(g['h'])} títulos")
for t, l1, l2, _ in SITELINKS:
    if len(t) > 25 or len(l1) > 35 or len(l2) > 35: err.append(f"enlace: {t}")
for x in CALLOUTS:
    if len(x) > 25: err.append(f"destacado: {x}")
for x in SNIPPET[1]:
    if len(x) > 25: err.append(f"fragmento: {x}")
for h, _, d, _ in PRICES:
    if len(h) > 25 or len(d) > 25: err.append(f"precio: {h}")
if err:
    raise SystemExit("\n".join(err))

# ------------------------------------------------------------------ CSV para Google Ads Editor
with open(os.path.join(OUT, "google-ads-editor.csv"), "w", newline="", encoding="utf-8") as fh:
    w = csv.writer(fh)
    w.writerow(["Campaign", "Ad Group", "Keyword", "Criterion Type", "Final URL"])
    for c in CAMPAIGNS:
        for g in c["groups"]:
            for k in g["kws"]:
                types = ["Exact"] if g.get("exact_only") else ["Phrase", "Exact"]
                for t in types:
                    w.writerow([c["name"], g["name"], k, t, url(g["path"], c["camp"], g["content"])])
        for n in NEG:
            w.writerow([c["name"], "", n, "Campaign Negative Phrase", ""])

# ------------------------------------------------------------------ texto para copiar y pegar
L = []
for c in CAMPAIGNS:
    L.append("=" * 78)
    L.append(f"{c['id']} · {c['name']}")
    L.append(f"Presupuesto: {c['budget']} · Ubicación: {c['geo']}")
    L.append("=" * 78)
    for g in c["groups"]:
        L.append("")
        L.append(f"  Grupo de anuncios: {g['name']}")
        L.append(f"  URL final: {url(g['path'], c['camp'], g['content'])}")
        if g["p"][0]:
            L.append(f"  Ruta visible: comunicacionenmallorca.com/{g['p'][0]}/{g['p'][1]}")
        tipo = "[exacta]" if g.get("exact_only") else '"frase" y [exacta]'
        L.append(f"  Palabras clave ({tipo}):")
        for k in g["kws"]:
            L.append(f"    - {k}")
        L.append("  Títulos (máx. 30 caracteres; FIJADO 1 = fijar en la posición 1):")
        for h, pin in g["h"]:
            L.append(f"    {h:<31}{'FIJADO 1' if pin else ''}")
        L.append("  Descripciones (máx. 90):")
        for d in g["d"]:
            L.append(f"    {d}")
    L.append("")
L.append("=" * 78)
L.append("RECURSOS COMUNES (se añaden a nivel de cuenta y valen para todas)")
L.append("=" * 78)
L.append("Enlaces de sitio (texto · línea 1 · línea 2 · URL):")
for t, l1, l2, p in SITELINKS:
    L.append(f"  {t} · {l1} · {l2} · {BASE}{p}")
L.append("Textos destacados: " + " · ".join(CALLOUTS))
L.append(f"Fragmento estructurado ({SNIPPET[0]}): " + ", ".join(SNIPPET[1]))
L.append("Precios (tipo Servicios, calificador «Desde», € sin IVA):")
for h, pr, d, p in PRICES:
    L.append(f"  {h} · {pr} € · {d} · {BASE}{p}")
L.append("Imágenes: carpeta imagenes/ (G-imagen_1200x628, G-imagen_1200x1200). Logotipo: G-logo_1200x1200.")
L.append("Nombre de la empresa: COMA")
L.append("")
L.append("Palabras clave negativas (lista compartida «COMA negativas», concordancia de frase,")
L.append("aplicada a todas las campañas):")
L.append("  " + ", ".join(NEG))
with open(os.path.join(OUT, "textos-google.txt"), "w", encoding="utf-8") as fh:
    fh.write("\n".join(L) + "\n")
print("OK: límites de Google comprobados.")
