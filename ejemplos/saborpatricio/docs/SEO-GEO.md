# SEO y búsqueda con IA — Sabor Patricio

## Implementado

HTML estático rastreable, títulos y descripciones únicos, canonical absoluto, previews sociales, imágenes AVIF/WebP, fuentes locales, sitemap filtrado y robots abierto. Entidades Restaurant, WebSite y WebPage conectadas por @id; dirección, teléfono, mapa, horario y carta estructurada. Carta indexable en /carta/ y respuestas visibles sobre ubicación, productos, contacto y disponibilidad. No se inventan opiniones, premios, precios ni servicios. /pedir/ abre WhatsApp y lleva noindex; no hay compra en la web. El servidor devuelve 404 real para URLs inexistentes y 302 en /pedir/.

## Consultas prioritarias (hipótesis, sin volúmenes medidos)

1. empanadas argentinas Palma de Mallorca
2. empanadas Cala Major / empanadas Cala Mayor
3. Sabor Patricio / Sabor Patricio carta / Sabor Patricio horario
4. empanadas argentinas para llevar Palma
5. empanadas gourmet Palma
6. empanadas vegetarianas Palma
7. chocotorta Palma / alfajores argentinos Palma

Usar estas expresiones naturalmente donde aportan información. No repetir keywords ni crear páginas casi iguales para barrios donde no hay local. No prometer reparto sin confirmación. Priorizar marca + producto + ubicación; no se incluye meta keywords porque no aporta posicionamiento en Google.

## Pasos externos para terminar

- Railway: fuente nobadis/SABOR-PATRICIO, rama main, despliegue automático activo. Dominio https://saborpatricio.com. Revisar despliegue exitoso tras cada push.
- Google Search Console: verificar propiedad de dominio mediante TXT en DNS, enviar https://saborpatricio.com/sitemap-index.xml y solicitar indexación de / y /carta/. Revisar cobertura y consultas tras acumular datos.
- Google Business Profile: verificar y completar ficha real con nombre, categoría adecuada (restaurante argentino si corresponde), dirección, teléfono, web, carta, horarios, festivos y fotos actuales. Mantener los mismos datos en web, Instagram y directorios. Pedir reseñas honestas a clientes reales y responderlas.
- Bing Webmaster Tools: verificar dominio, enviar el mismo sitemap y revisar indexación. Importar Search Console si la cuenta lo permite.
- Validar Restaurant en Rich Results Test y Schema Markup Validator. El marcado no garantiza resultados enriquecidos.
- Confirmar con el negocio horarios, carta, coordenadas, año de fundación y servicios; actualizar site.ts ante cualquier cambio. Añadir precios únicamente cuando estén confirmados.
- Revisar móvil y PageSpeed con datos reales. Medir clics orgánicos y contactos, no solo posición. Si se añade analítica, revisar consentimiento y las políticas publicadas.

## Google, ChatGPT y otros buscadores

La información clave está en HTML y robots.txt permite rastreo. No hay garantía de indexación, menciones ni posiciones. Permitir OAI-SearchBot y no bloquearlo en el CDN ayuda a que ChatGPT Search pueda descubrir la web; acceso y selección dependen del buscador. No se necesita schema especial para IA ni un archivo llms.txt para aparecer en Google. Mantener información verificable y coherente fuera de la web es esencial para un negocio local.

Referencias: https://developers.google.com/search/docs/fundamentals/ai-optimization-guide y https://developers.google.com/search/docs/appearance/structured-data/local-business.
