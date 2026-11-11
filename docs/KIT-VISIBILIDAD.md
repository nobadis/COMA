# Kit de visibilidad: lo que se hace fuera del código

La web ya está preparada (ver [SEO-GEO.md](SEO-GEO.md)). Lo que decide si Google, ChatGPT, Gemini y Claude te recomiendan es, sobre todo, lo que otros sitios dicen de COMA. Este kit lo deja listo para copiar y pegar. Necesita tus cuentas, por eso no se puede hacer desde el repositorio.

Regla de oro: **los mismos datos en todas partes**.

| Campo     | Valor exacto                                    |
| --------- | ----------------------------------------------- |
| Nombre    | COMA - Comunicación en Mallorca                 |
| Dirección | Paseo Mallorca, 16, 07012 Palma, Illes Balears  |
| Web       | https://comunicacionenmallorca.com/             |
| Email     | info@comunicacionenmallorca.com                 |
| Empresa   | Publicom Marketing 2000 SL · CIF B07949647      |
| Desde     | 1997                                            |

## 0. Urgente: lo que hoy impide que Google os muestre bien

Diagnóstico del 11 nov 2026. Google y los buscadores de las IA todavía tienen guardada **la web antigua de WordPress**: título «kit digital - Comunicación en Mallorca», de hace unos tres años. Hasta que vuelvan a rastrear, da igual lo buena que sea la web nueva. Además:

1. **`www.comunicacionenmallorca.com` está roto.** Apunta a Dinahosting (82.98.135.43), que responde «No se puede redirigir un dominio a si mismo», y por HTTPS ni siquiera conecta. Cualquier enlace con `www` acaba en error. Arreglo (10 minutos):
   1. Railway → servicio de la web → Settings → Networking → **Custom Domain** → añadir `www.comunicacionenmallorca.com`. Railway te da un destino CNAME.
   2. Dinahosting → Dominios → comunicacionenmallorca.com → **Zona DNS**: borra el registro `www` actual (A 82.98.135.43) y crea un **CNAME `www`** con el destino que te dio Railway. Quita también cualquier «redirección web» de Dinahosting para ese dominio.
   3. Cuando Railway marque el dominio en verde, la web ya redirige sola `www` → sin `www` con un 301 (`scripts/server.cjs`).
   4. Comprueba que `https://www.comunicacionenmallorca.com/sectores/` lleva a `https://comunicacionenmallorca.com/sectores/`.
2. **Search Console (lo más urgente para Google).** Sigue el punto 1 de abajo y después, en «Inspección de URLs», pide **«Solicitar indexación»** de estas páginas, una a una: `/`, `/sobre-coma/`, `/soluciones/agencia-de-comunicacion-mallorca/`, `/automatizaciones/`, `/agentes-ia/`, `/diseno-web/mallorca/`, `/automatizaciones/palma/`, `/sectores/` y `/soluciones/`. Es la forma más rápida de que Google sustituya la web antigua.
3. **Un competidor tiene el dominio casi idéntico a vuestra búsqueda de marca** (`comunicacionmallorca.com`, sin «en»). Para ganarle en «comunicación Mallorca» hace falta lo que él tiene y vosotros aún no: ficha de Google con reseñas (punto 2), directorios (punto 4) y menciones en prensa (punto 7). La web ya aclara a Google y a las IA que no sois la misma empresa.
4. **Facebook**: la web enlaza `facebook.com/comunicacionenmallorca` como perfil oficial (`site.social`). Si no es vuestro, bórralo de `src/data/site.ts`. Si lo es, pon allí la web nueva y la dirección de Paseo Mallorca, 16.

## Ya hecho (5 y 11 nov 2026)

- Portada con la marca en el título: «Comunicación en Mallorca (COMA): software a medida, IA y webs».
- Nombre del sitio para Google: «Comunicación en Mallorca», con COMA como variante.
- Redirecciones 301 de las URLs de la web antigua (`/portfolio/…`, `/blog/…`, `/politica-de-privacidad/`…) a las nuevas, y de `www` al dominio sin `www`.
- Páginas nuevas: software a medida en 82 zonas (`/automatizaciones/<zona>/`), inteligencia artificial para empresas en 82 zonas (`/agentes-ia/<zona>/`), agencia de comunicación, gabinete de prensa, publicidad en radio, marketing digital, consultoría de IA, integrar ChatGPT o Claude, aplicaciones web e integraciones (`/soluciones/`).

- 422 URLs enviadas a IndexNow (Bing, Copilot, Yandex y buscadores asociados). Repetir tras cada despliegue: `npm run seo:indexnow`.
- `llms.txt` y `llms-full.txt` con precios, sectores y soluciones.

## 1. Google Search Console y Bing Webmaster Tools (10 minutos)

1. https://search.google.com/search-console → Añadir propiedad → «Dominio» → `comunicacionenmallorca.com` (verificación por DNS) o «Prefijo de URL» con la etiqueta HTML.
2. Si eliges etiqueta HTML: copia el código en la variable `PUBLIC_GSC_VERIFICATION` del hosting y redespliega.
3. Sitemaps → enviar `https://comunicacionenmallorca.com/sitemap-index.xml`.
4. https://www.bing.com/webmasters → «Importar desde Google Search Console» (un clic). Código opcional en `PUBLIC_BING_VERIFICATION`.

## 2. Google Business Profile (lo que más pesa en Maps y en la IA)

https://business.google.com → crear o reclamar la ficha con los datos de la tabla.

- **Categoría principal**: Agencia de marketing. **Secundarias** (las que existan con ese nombre o el más parecido): Diseñador de sitios web, Agencia de marketing en Internet, Consultor de marketing, Agencia de publicidad.
- **Zona de servicio**: Mallorca e Illes Balears (el resto de España se atiende en remoto; no pongas direcciones que no existen).
- **Descripción** (máx. 750 caracteres):

> Agencia de comunicación, diseño web e IA en Palma desde 1997. Empezamos con revistas, radio y televisión, y hoy hacemos webs con diseño propio desde 99 € + IVA de pago único, tiendas online, webs en varios idiomas, SEO local, posicionamiento en ChatGPT, Gemini y Claude (GEO), agentes de IA y automatizaciones de WhatsApp, citas y facturas. Precios publicados en nuestra web y propuesta cerrada por escrito antes de empezar. Trabajamos con autónomos y pymes de Mallorca y, desde 2025, de toda España. Atendemos en español, catalán e inglés.

- **Servicios** (con precio, + IVA): Web Esencial 99 €; Tienda online +349 €; Reservas o citas online +149 €; Multiidioma +49 €/idioma; Blog +79 €; Contenido propio +99 €; Alojamiento y mantenimiento 9 €/mes; Correo con tu dominio 60 €/año por buzón; SEO local 99 €/mes; GEO (posicionamiento en IA) 99 €/mes; Agentes de IA (a medida); Automatizaciones (a medida); Notoriedad y medios (a medida).
- **Fotos reales**: fachada o portal de Paseo Mallorca 16, la oficina, el equipo trabajando, capturas de webs hechas (con permiso del cliente) y el logo. Nada de bancos de imágenes.
- **Publicaciones** (una a la semana durante el primer mes; enlaza con UTM `?utm_source=google&utm_medium=organic&utm_campaign=gbp`):
  1. «Web profesional por 99 € + IVA, pago único y diseño propio. Mira qué incluye y suma solo los extras que necesites.» → `/soluciones/pagina-web-barata/`
  2. «¿Tus clientes son mayores? Webs con letra grande, buen contraste y llamar en un toque.» → `/soluciones/web-accesible-para-mayores/`
  3. «Recordatorios de cita por WhatsApp que salen solos: menos huecos vacíos.» → `/soluciones/recordatorios-de-citas/`
  4. «¿Te recomienda ChatGPT? Qué miran los asistentes de IA y qué puedes hacer.» → `/soluciones/aparecer-en-chatgpt/`

## 3. Bing Places y Apple Business Connect

- https://www.bingplaces.com → «Importar desde Google Business Profile».
- https://businessconnect.apple.com → misma ficha (Apple Maps y Siri).

## 4. Directorios (nombre, dirección y web idénticos a la tabla)

Prioridad alta, porque las IA los citan al recomendar agencias:

- **Sortlist** (sortlist.es) y **Clutch** (clutch.co): directorios de agencias con reseñas verificadas. Pide a 3-5 clientes que dejen su opinión allí.
- **Mallorca.com**, directorio de marketing de Palma (ya aparece en búsquedas de «agencias de marketing en Palma»).
- **Cámara de Comercio de Mallorca** y asociaciones sectoriales de las que seáis socios.
- **Páginas Amarillas**, **Cylex**, **Infobel**, **Hotfrog**.

Al terminar, apunta cada URL de perfil aquí. Las de redes y Google van también en `site.social` (`src/data/site.ts`).

## 5. Reseñas (a todos los clientes por igual y sin regalos a cambio: lo exige Google)

Enlace directo para reseñar: en la ficha de Google → «Pedir reseñas» → copiar enlace.

**WhatsApp / email tras entregar un proyecto:**

> Hola, [nombre]. Gracias por confiar en COMA para [la web / el proyecto]. Si tienes un minuto, nos ayudaría mucho tu opinión sincera en Google: [enlace]. Y si algo se puede mejorar, cuéntanoslo directamente. ¡Gracias!

**Respuesta a una reseña positiva:**

> Gracias, [nombre]. Ha sido un placer trabajar en [proyecto]. Aquí estamos para lo que necesites.

**Respuesta a una reseña negativa:**

> Hola, [nombre]. Sentimos que [problema concreto]. Nos gustaría resolverlo: escríbenos a info@comunicacionenmallorca.com y lo vemos personalmente.

Con permiso del cliente, copia las mejores en `testimonials` (`src/data/site.ts`): salen en `/sobre-coma/` y en el schema.

## 6. LinkedIn de empresa e Instagram

**LinkedIn** es la cara nacional: la página se llama **COMA - Innovación Tecnológica**, sin «Mallorca» en el nombre, y Mallorca se cuenta como origen. Todo listo en [`publicidad/7-linkedin/LINKEDIN.txt`](../publicidad/7-linkedin/LINKEDIN.txt): URL `linkedin.com/company/coma-innovacion-tecnologica` (ya en `site.social`), lema, «Acerca de», especialidades, logo, cabecera y los 7 primeros posts. Lema:

> Consultoría tecnológica desde 1997: soluciones a medida, IA aplicada, diseño web, visibilidad digital y comunicación.

**Nombre del remitente del correo**: `COMA` en info@ y `Nombre Apellido | COMA` en los buzones personales (motivos en el mismo archivo).

**Instagram, bio:**

> Comunicación, webs e IA desde Palma · desde 1997 · Webs desde 99 € + IVA · comunicacionenmallorca.com

Cuando existan, añade las URLs a `site.social`. Así Google y las IA unen todas las menciones en una sola entidad.

## 7. Nota de prensa (borrador)

Medios: Diario de Mallorca, Última Hora, Mallorca Diario, Crónica Balear, Cadena SER Mallorca, IB3, Mallorca Zeitung (en alemán) y Majorca Daily Bulletin (en inglés). Una mención en prensa independiente es lo que más pesa para que ChatGPT, Gemini y Claude citen a COMA.

> **Una agencia de Palma fundada en 1997 publica sus precios y lanza webs desde 99 euros para los negocios de toda la vida**
>
> Palma, [fecha]. COMA - Comunicación en Mallorca (Publicom Marketing 2000 SL), agencia nacida en 1997 con revistas, radio y televisión, ha publicado en su web todos sus precios. Una web profesional con diseño propio cuesta 99 euros más IVA de pago único, y cada extra (tienda online, reservas, idiomas) tiene su importe a la vista antes de pedir presupuesto.
>
> La agencia ha preparado guías para 49 sectores, de restaurantes y alquiler vacacional a residencias de mayores, talleres o despachos. En cada una explica qué necesita la web de ese negocio y cuánto cuesta. También diseña webs pensadas para clientela mayor (letra grande, buen contraste, llamar en un toque), en línea con la Ley de Accesibilidad que se aplica desde junio de 2025.
>
> «[Cita de la dirección, a completar y aprobar. Propuesta: "Muchos negocios de toda la vida no tienen web porque nadie se lo ha explicado claro ni les ha dado un precio. Queremos que eso deje de ser una excusa"]», afirma [nombre y cargo].
>
> Además de webs, COMA trabaja el posicionamiento en Google y en asistentes de inteligencia artificial como ChatGPT, Gemini o Claude, y desarrolla agentes de IA y automatizaciones para pymes. Desde 2025 atiende a empresas de toda España.
>
> Contacto de prensa: info@comunicacionenmallorca.com · https://comunicacionenmallorca.com/

## 8. Medir la visibilidad en IA (cada mes, 15 minutos)

Pregunta lo mismo en ChatGPT, Gemini, Claude, Copilot y Perplexity, y anota si apareces, cómo te describen y qué fuentes citan:

1. ¿Qué agencia me hace una página web barata en Mallorca?
2. Mejor agencia de diseño web en Palma
3. ¿Cuánto cuesta una página web para un restaurante?
4. Web para alquiler vacacional en Mallorca con reserva directa
5. Agencia que haga webs accesibles para personas mayores
6. ¿Quién puede automatizar los recordatorios de citas por WhatsApp de mi clínica?
7. Posicionamiento en ChatGPT para empresas en España
8. Alternativa a Wix con diseño a medida y pago único
9. Agencia de marketing en Palma con precios publicados
10. Chatbot con IA para un hotel en Mallorca
