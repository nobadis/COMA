import { basePlan, extras } from "../pricing";
import { site, trust, years } from "../site";
import type { EnPage } from "./types";

/**
 * Páginas en inglés (/en/…). Mismas reglas que el resto del sitio: todo verdadero, sin
 * superlativos ni garantías, e importes calculados desde pricing.ts (nunca a mano).
 */

const price = (id: string) => extras.find((e) => e.id === id)?.price ?? 0;
const P = basePlan.price;
const lang = price("idiomas");
const booking = price("reservas");
const shop = price("tienda");
const host = price("alojamiento");
const mailbox = price("correo");
const seo = price("seo");
const geo = price("geo");
/** Referencias con nombre propio (las del muro de logos). */
const refs = trust.wall.map((w) => w.name);
const office = `${site.address.street}, ${site.address.postalCode} ${site.address.city}`;

const quote = (note: string) => ({
  label: "Custom quote",
  value: "Fixed price after a call",
  note,
});

export const enPages: EnPage[] = [
  /* ------------------------------------------------------------------ Home */
  {
    slug: "",
    es: "/",
    name: "COMA in English",
    title: "Web Design, Custom Software and AI in Mallorca",
    description: `COMA is a Palma agency founded in ${site.since}: websites from ${P} € + VAT, custom software, AI agents, automation, SEO and PR. Written proposals first.`,
    eyebrow: `COMA – Comunicación en Mallorca · Palma, since ${site.since}`,
    h1: "Web design, custom software and AI in Mallorca",
    lead: "Websites, software and AI tools for businesses in Mallorca, with published prices and a written proposal before any work starts. In English, Spanish or Catalan.",
    sections: [
      {
        h2: "What we do",
        paragraphs: [
          `COMA (Comunicación en Mallorca) started in ${site.since} publishing magazines and producing radio and television. Today we design websites, build custom software and integrations, set up AI agents and automation, and work on SEO, AI visibility and media.`,
          `Our office is in Palma and, since ${site.spainSince}, we also work remotely with companies across Spain. References include ${refs.slice(0, 4).join(", ")}.`,
        ],
        list: [
          `Websites from ${P} € + VAT, with booking, a shop or extra languages at published prices`,
          "Custom software, internal tools and integrations between your programs via API",
          "AI agents for your website, WhatsApp and email, with hand-over to a person",
          "Automation with Make, n8n, Zapier or custom code",
          "Local SEO, Google Maps and GEO: visibility in ChatGPT, Gemini and Claude",
          "Press office, radio, press and TV campaigns, branding and online ads",
        ],
      },
      {
        h2: "Why work with COMA",
        paragraphs: [
          `We have worked in communication for ${years()} years and combine that with today's technology in one team. Website and SEO prices are published. For AI, software and PR, you get scope, timeline and a fixed price in writing before we start.`,
          `Our office is at ${office}, and we are happy to meet you there. If you are not on the island, we work by video call and email, in English, Spanish or Catalan.`,
        ],
      },
    ],
    points: [
      {
        title: `Since ${site.since}`,
        text: "Magazines, radio and TV first; websites, software and AI today. One team for the message and the technology.",
      },
      {
        title: "Published prices",
        text: `${basePlan.name} costs ${P} € + VAT, one-off. Extras such as languages, booking and hosting have a fixed price too.`,
      },
      {
        title: "Written proposals",
        text: "Scope, timeline and price in writing before any work starts, so you know what you are paying for.",
      },
      {
        title: "Meetings in Palma",
        text: `Our office is at ${site.address.street}. We meet in person or by video call, in English, Spanish or Catalan.`,
      },
    ],
    price: {
      label: "Websites",
      value: `From ${P} € + VAT`,
      note: "One-off, up to 4 pages. AI, software and PR projects: fixed price in writing after a call.",
    },
    faq: [
      {
        title: "Do you work in English?",
        text: "Yes. Our team speaks English, Spanish and Catalan, so meetings, emails and proposals can be in English. We do not work in German, although your website or AI agent can include German.",
      },
      {
        title: "Can we meet in Palma?",
        text: `Yes. Our office is at ${office}. Write to ${site.email} and we will arrange a time. We also meet by video call.`,
      },
      {
        title: "Do I need a Spanish company to work with you?",
        text: `No. You can hire us as an individual or through a company, in Spain or elsewhere. We invoice as ${site.legalName}, and the proposal states the VAT that applies to your case.`,
      },
      {
        title: "Who is behind COMA?",
        text: `COMA – Comunicación en Mallorca is run by ${site.legalName}, based in Palma and working in communication since ${site.since}.`,
      },
    ],
    searches: [
      "web design mallorca",
      "digital agency mallorca",
      "marketing agency palma de mallorca",
      "ai agency mallorca",
      "custom software mallorca",
      "english speaking web designer mallorca",
    ],
    cta: "What can we help your business with?",
  },

  /* -------------------------------------------------------- AI consultancy */
  {
    slug: "ai-consultancy-mallorca",
    es: "/soluciones/consultoria-inteligencia-artificial/",
    name: "AI consultancy",
    title: "AI Consultancy in Mallorca for Businesses",
    description:
      "AI consultancy for businesses in Mallorca: which tasks to hand to AI, a measurable pilot and safe implementation with GDPR, the EU AI Act and human review.",
    eyebrow: "AI consultancy · Palma",
    h1: "AI consultancy for businesses in Mallorca",
    lead: "We help you decide what to hand to AI and what not to, test it with a measurable pilot and put it into practice with clear limits and human review.",
    sections: [
      {
        h2: "Start with the problem, not the tool",
        paragraphs: [
          "The useful question is not “what can we do with AI?” but “which task takes the most hours and repeats often enough?”. Answering similar emails, reading documents, sorting requests and preparing drafts are often good candidates.",
          "Decisions with legal, medical or financial consequences should not be left to an AI without review. That is why every implementation has limits, human review and measurement.",
        ],
        list: [
          "Replying to repeated questions from customers or guests",
          "Reading invoices, delivery notes and other documents",
          "Sorting and routing incoming emails and requests",
          "Drafting quotes, summaries and reports for a person to check",
        ],
      },
      {
        h2: "Safe, compliant and not tied to one provider",
        paragraphs: [
          "We choose the model for each task by quality, language, cost and data protection: models from OpenAI, Anthropic (Claude), Google or others. We do not depend on a single provider.",
          "We send only the data each task needs and use business services where the provider commits by contract not to train on your data. Each case is designed with GDPR and the EU AI Act in mind, including telling people when they are talking to an AI.",
        ],
      },
    ],
    points: [
      {
        title: "Map of opportunities",
        text: "Which tasks to hand to AI, with the estimated time saved and the risk of each one.",
      },
      {
        title: "Measurable pilot",
        text: "One task, real data and a clear goal before you invest more.",
      },
      {
        title: "Safe implementation",
        text: "Minimal data, providers with contractual guarantees, a clear notice that it is an AI, and human review.",
      },
      {
        title: "Team training",
        text: "So your people use it well and can spot when it gets something wrong.",
      },
    ],
    price: quote(
      "Depends on the tasks, data and integrations. Scope, timeline and fixed price in writing before we start, with a pilot first when it makes sense."
    ),
    faq: [
      {
        title: "Which AI models do you use?",
        text: "Whichever fits the task, the language, the cost and your data protection needs: models from OpenAI, Anthropic (Claude), Google or others. We are not tied to one provider.",
      },
      {
        title: "Is my data used to train the AI?",
        text: "We use business services where the provider commits by contract not to train on your data, and we send only what the task needs.",
      },
      {
        title: "Does it comply with the EU AI Act?",
        text: "We design each case with its obligations in mind, such as telling people they are talking to an AI. For sensitive uses we review it with you and your legal adviser.",
      },
      {
        title: "Can the whole project be in English?",
        text: `Yes. Meetings, training and documentation can be in English. We meet at our office in Palma or by video call; write to ${site.email} to start.`,
      },
    ],
    searches: [
      "ai consultancy mallorca",
      "ai consultant palma",
      "artificial intelligence consulting spain",
      "ai for small business mallorca",
      "ai implementation for businesses",
      "chatgpt for business mallorca",
    ],
    cta: "Shall we look at what AI can do for your business?",
  },

  /* ------------------------------------------------------- Custom software */
  {
    slug: "custom-software-mallorca",
    es: "/automatizaciones/mallorca/",
    name: "Custom software",
    title: "Custom Software Development and Integrations in Mallorca",
    description:
      "Custom software and integrations in Mallorca: internal tools, dashboards, client portals and ERP, CRM, shop or invoicing APIs. Fixed price in writing.",
    eyebrow: "Custom software · Integrations · Automation",
    h1: "Custom software and integrations for businesses in Mallorca",
    lead: "Internal tools, client portals, dashboards and connections between the programs you already use. Scope, testing, delivery and maintenance agreed in writing.",
    sections: [
      {
        h2: "When custom software makes sense",
        paragraphs: [
          "Standard software covers what every company does. What sets you apart, or what costs you hours, is often left out: the step done in a spreadsheet, the data copied by hand or the report someone builds every Monday.",
          "That is where a small, well-defined custom piece pays off, connected to what you already use. Before building, we check whether an existing tool solves it for less. We only build what is really needed.",
        ],
      },
      {
        h2: "What we build and connect",
        paragraphs: [
          "We connect programs via API, or with platforms such as Make, n8n or Zapier when they fit. Custom code is worth it for high volumes or critical processes; we choose with you, with numbers.",
          "One example is our own product, COMA para despachos, for accountancy and advisory firms: it receives invoices via WhatsApp and email, reads them with AI and exports them to the accounting software.",
        ],
        list: [
          "ERP and invoicing: Holded, Sage, a3 or Contasol, where they allow integration or export",
          "CRM: contacts from your website, ads and WhatsApp, without duplicates",
          "Online shop: orders, stock and shipping in sync with invoicing",
          "Internal tools: job sheets, quotes or inventory built around how you work",
          "Dashboards and client portals that update themselves",
        ],
      },
    ],
    points: [
      {
        title: "Diagnosis and scope",
        text: "Real process, systems, goal and acceptance criteria agreed before a line of code is written.",
      },
      {
        title: "Pilot when useful",
        text: "We validate what matters with a small pilot before expanding the project.",
      },
      {
        title: "Connected to what you use",
        text: "ERP, CRM, invoicing, shop, email or WhatsApp, linked via API.",
      },
      {
        title: "Documented delivery",
        text: "Testing, documentation, training and support as agreed in the proposal, with alerts if something fails.",
      },
    ],
    price: quote(
      "Depends on scope. Set-up, third-party fees and maintenance are listed separately, with scope, timeline and fixed price in writing."
    ),
    faq: [
      {
        title: "What if my software has no API?",
        text: "We look for another route: scheduled exports, email or reading documents. Before we start, we tell you whether it is feasible and what it costs.",
      },
      {
        title: "Who owns the software?",
        text: "Ownership, access and documentation are agreed in writing in the proposal, before we start.",
      },
      {
        title: "What happens if an integration breaks?",
        text: "We monitor the workflows and get alerts. Under the agreed maintenance we fix it, and everything is documented.",
      },
      {
        title: "Can the project be run in English?",
        text: `Yes. Meetings, documentation and support can be in English. We work from Palma, in person or by video call, with companies in Mallorca and, since ${site.spainSince}, across Spain.`,
      },
    ],
    searches: [
      "custom software development mallorca",
      "custom software development palma",
      "software developer mallorca",
      "api integration services spain",
      "business process automation mallorca",
      "n8n make zapier automation agency",
      "erp crm integration spain",
    ],
    cta: "What would you like your software to do on its own?",
  },

  /* ------------------------------------------------------------ Web design */
  {
    slug: "web-design-mallorca",
    es: "/diseno-web/mallorca/",
    name: "Web design",
    title: `Web Design in Mallorca: Websites from ${P} € + VAT`,
    description: `Web design in Mallorca from ${P} € + VAT: a professional, mobile-ready site with contact form, basic SEO and SSL. Extra languages ${lang} € each, one-off.`,
    eyebrow: `Web design · From ${P} € + VAT`,
    h1: "Web design in Mallorca, in your clients' languages",
    lead: `A professional website for your business, fast and mobile-ready, for ${P} € + VAT one-off. Add English, German or other languages, booking or a shop at published prices.`,
    sections: [
      {
        h2: `What ${basePlan.name} includes`,
        paragraphs: [
          `${basePlan.name} is a professional site of up to 4 pages (Home, Services, About and Contact), designed for your brand and mobile-ready. It costs ${P} € + VAT, one-off.`,
          "If you need more, you add it at a fixed price: extra languages, online booking, a shop, a blog, hosting or email on your domain.",
        ],
        list: [
          "Professional design adapted to your brand",
          "Up to 4 pages: Home, Services, About and Contact, mobile-ready",
          "Contact form and clear calls to action",
          "Basic SEO: titles, descriptions and speed",
          "Published with an SSL certificate",
        ],
      },
      {
        h2: "A website for international clients",
        paragraphs: [
          "Visitors who search in English or German are shown results in that language by Google and AI assistants. A multilingual site is not an automatic translation button: each language has its own address, title and description.",
          `Each extra language costs ${lang} € + VAT. For example, Spanish, English and German come to ${P + 2 * lang} € + VAT, one-off. We can start from your translations or prepare them; for legal or medical texts we recommend a professional translator.`,
        ],
        list: [
          `Online booking or appointments: ${booking} € + VAT, one-off`,
          `Online shop with up to 50 products: ${shop} € + VAT, one-off`,
          `Hosting, backups and updates: ${host} € + VAT per month`,
          `Email on your domain with 50 GB: ${mailbox} € + VAT per mailbox per year`,
        ],
      },
    ],
    points: [
      {
        title: "Your own design",
        text: "No generic template: a site with your brand's personality, built for your clients.",
      },
      {
        title: "Fast and mobile-ready",
        text: "Loads quickly and works on any screen, which your visitors and Google both notice.",
      },
      {
        title: "One address per language",
        text: "/en/, /de/, /es/: each version is indexed separately, with hreflang so Google shows the right one.",
      },
      {
        title: "Ready for Google and AI",
        text: "Structure, text and data prepared for search engines and for assistants such as ChatGPT.",
      },
    ],
    price: {
      label: basePlan.name,
      value: `${P} € + VAT`,
      note: `One-off. Each extra language ${lang} € + VAT; optional hosting ${host} € + VAT per month.`,
    },
    faq: [
      {
        title: `What does the ${P} € website include?`,
        text: `A professional site of up to 4 pages (Home, Services, About and Contact), designed for your brand, mobile-ready, with a contact form, basic SEO and SSL. Anything else, such as a shop, booking, languages or a blog, is added at a fixed price.`,
      },
      {
        title: "Are hosting and email included?",
        text: "They are optional extras with published prices. If you already have a domain, hosting or email, we can use them; if not, we set everything up for you.",
      },
      {
        title: "Can you write the English and German versions?",
        text: "We can start from your translations or prepare them. Our team works in English, Spanish and Catalan; for German, and for legal or medical texts, we recommend a review by a professional translator.",
      },
      {
        title: "Can we meet in Palma?",
        text: `Yes. Our office is at ${office}. If you are not on the island, we work by video call and email.`,
      },
    ],
    searches: [
      "web design mallorca",
      "web designer mallorca",
      "website design palma de mallorca",
      "english speaking web designer mallorca",
      "multilingual website mallorca",
      "cheap website mallorca",
      "web design company palma",
    ],
    cta: `Shall we start your website for ${P} € + VAT?`,
  },

  /* ------------------------------------------------------------- AI agents */
  {
    slug: "ai-agents-chatbots-mallorca",
    es: "/agentes-ia/mallorca/",
    name: "AI agents and chatbots",
    title: "AI Agents and Chatbots in Mallorca, 24/7 and Multilingual",
    description:
      "AI agents for hotels, villas, restaurants and clinics in Mallorca: 24/7 answers in the guest's language on web, WhatsApp and email, with human hand-over.",
    eyebrow: "AI agents · Website, WhatsApp, email",
    h1: "AI agents and chatbots for businesses in Mallorca",
    lead: "An assistant that answers guests and customers at any hour, in their language, using only information you approve. When it does not know, it passes the conversation to your team.",
    sections: [
      {
        h2: "What a well-built agent does",
        paragraphs: [
          "Button-based chatbots that understand nothing have given the idea a bad name. A well-built AI agent understands the question, answers with your business information and makes clear that it is an AI.",
          "The key is the limits: what it can answer, what data it can ask for and when it passes the conversation to a person. We define them with you before it goes live.",
        ],
      },
      {
        h2: "For hotels, villas, restaurants and clinics",
        paragraphs: [
          "Many questions repeat: how to get there, check-in times, the pool, the nearest beach, the menu or whether a table is free. The agent answers them in the guest's language and leads to the booking.",
          "It does not accept date changes, discounts or exceptions on its own: you decide those. In clinics it handles practical questions such as hours, treatments offered and appointment requests, and is set up not to give medical advice.",
        ],
        list: [
          "Hotels and villas: arrival, house rules, facilities and booking enquiries",
          "Restaurants: menu, opening hours and table requests",
          "Clinics: hours, treatments and appointment requests",
          "Any business: enquiries sent to your CRM or email with the full conversation",
        ],
      },
    ],
    points: [
      {
        title: "Trained on your information",
        text: "Services, prices, hours and policies that you validate. It answers only from that information.",
      },
      {
        title: "Many languages, 24/7",
        text: "It replies in the language it is written to: English, Spanish, Catalan, German, French and more.",
      },
      {
        title: "Website, WhatsApp and email",
        text: "The same agent can answer on your site, on WhatsApp and by email, and send enquiries to your CRM.",
      },
      {
        title: "Hand-over to a person",
        text: "It passes the conversation to your team when it does not know the answer or when the customer asks.",
      },
    ],
    price: quote(
      "Depends on channels, integrations and volume. Scope, timeline and fixed price in writing before we start, with a pilot when useful."
    ),
    faq: [
      {
        title: "Can it get things wrong?",
        text: "Any AI can. That is why it answers only from validated information, says when it does not know and hands over to a person. We review conversations and adjust it.",
      },
      {
        title: "Do people have to be told it is an AI?",
        text: "Yes. The EU AI Act requires people to be informed when they are talking to an AI. Our agents say so from the first message.",
      },
      {
        title: "What about data protection?",
        text: "We design each agent with GDPR in mind: only the data that is needed, a clear notice that it is an AI, and providers with suitable guarantees.",
      },
      {
        title: "Which languages does it speak?",
        text: "It replies in the language it is written to. We work with you in English, Spanish or Catalan; for languages we do not speak, such as German, we suggest a native speaker checks some answers before launch.",
      },
    ],
    searches: [
      "ai chatbot mallorca",
      "ai agent for hotels",
      "whatsapp chatbot for business spain",
      "chatbot for holiday rentals",
      "multilingual chatbot for website",
      "ai customer service mallorca",
      "ai receptionist for clinics",
    ],
    cta: "Shall we put an AI agent to work for you?",
  },

  /* ------------------------------------------------------------- SEO & GEO */
  {
    slug: "seo-ai-visibility-mallorca",
    es: "/seo-geo/mallorca/",
    name: "SEO and AI visibility",
    title: "SEO in Mallorca: Google Maps and AI Visibility (GEO)",
    description: `Local SEO and GEO in Mallorca: Google, Google Maps and being cited by ChatGPT, Gemini, Claude and Perplexity. From ${Math.min(seo, geo)} € + VAT a month, no minimum term.`,
    eyebrow: "Local SEO · Google Maps · GEO",
    h1: "SEO and AI visibility for businesses in Mallorca",
    lead: "We prepare your website, your Google profile and your content so you can be found in search, on Google Maps and in the answers of AI assistants.",
    sections: [
      {
        h2: "Local SEO and Google Maps",
        paragraphs: [
          "Google says it ranks local results by relevance, distance and prominence. You cannot change the distance, but you can work on relevance and prominence: categories, services, photos, reviews and mentions.",
          "We complete your Google Business Profile, set up review requests for your customers, reply to each review and keep the profile active with monthly posts. Name, address and details stay consistent on your website and in directories.",
        ],
      },
      {
        h2: "GEO: visibility in ChatGPT, Gemini, Claude and Perplexity",
        paragraphs: [
          "More and more people ask an AI assistant before searching on Google. No one can guarantee that an AI will recommend you: the model decides. What we can do is make sure it finds clear, consistent and verifiable information about you.",
          "That means a website that says plainly what you do, where and at what price; structured data; consistent listings; real reviews and press mentions. Each month we ask the assistants the questions your clients would ask and report what they say.",
        ],
        list: [
          "Audit of what ChatGPT, Gemini, Claude, Copilot and Perplexity say about you",
          "Structured data (Schema.org) and an llms.txt file",
          "The same name, address and details on your site, Google, social media and directories",
          "Monthly report: whether you appear, how you are described and which sources are cited",
        ],
      },
    ],
    points: [
      {
        title: "SEO and GEO audit",
        text: "How Google and AI assistants see you today, and what is missing for you to appear.",
      },
      {
        title: "Google Business Profile",
        text: "Categories, services, hours, photos, reviews and monthly posts.",
      },
      {
        title: "Content that answers",
        text: "Service pages and FAQs written to answer what your clients actually ask.",
      },
      {
        title: "Clear monthly report",
        text: "Visibility, traffic and enquiries, so you can see what works and what does not.",
      },
    ],
    price: {
      label: "Local SEO",
      value: `${seo} € + VAT per month`,
      note: `No minimum term. GEO (AI visibility): ${geo} € + VAT per month; the two work well together.`,
    },
    faq: [
      {
        title: "Can you guarantee first place on Google or in ChatGPT?",
        text: "No, and be wary of anyone who does: Google and the AI models decide. What we offer is measurable, transparent work and a monthly report.",
      },
      {
        title: "What is GEO?",
        text: "Generative Engine Optimisation: preparing your information so that AI assistants such as ChatGPT, Gemini, Claude or Perplexity understand your business and can cite it in their answers.",
      },
      {
        title: "How long does it take?",
        text: "Technical and local improvements show in weeks; solid rankings take months and depend on your competition. Assistants that search the web in real time can reflect changes sooner.",
      },
      {
        title: "Can you help me appear in English searches?",
        text: "Yes, if your website has an English version. Each language gets its own address, title and description, with hreflang so Google shows the right version to each visitor.",
      },
    ],
    searches: [
      "seo mallorca",
      "seo agency palma",
      "local seo mallorca",
      "google maps ranking mallorca",
      "generative engine optimisation",
      "how to appear in chatgpt answers",
      "ai search visibility for business",
    ],
    cta: "Shall we see what Google and AI say about you?",
  },

  /* ------------------------------------------------------- Holiday rentals */
  {
    slug: "holiday-rental-websites-mallorca",
    es: "/sectores/alquiler-vacacional/",
    name: "Holiday rental websites",
    title: "Holiday Rental Websites in Mallorca with Direct Booking",
    description: `Websites for villas and holiday rentals in Mallorca: direct booking, synced calendar, registration number shown and a guest guide. From ${P + booking} € + VAT.`,
    eyebrow: "Villas and holiday rentals",
    h1: "Websites with direct booking for villas and holiday rentals",
    lead: "Photos, calendar, direct booking and the practical information you repeat in every Airbnb message, on a website for your villa or apartment.",
    sections: [
      {
        h2: "Why a website of your own",
        paragraphs: [
          "Airbnb and Booking.com bring you guests, but they charge commission on every booking and keep the guest's contact. A guest who returns every summer books through the platform again because there is nowhere else to book you.",
          "A website with a synced calendar gives that guest a direct route, and gives you somewhere to show the property without limits on photos or text. Platforms are still useful to find guests; the website helps them come back.",
        ],
      },
      {
        h2: "Rules and details in the Balearics",
        paragraphs: [
          "In the Balearic Islands, advertising for a holiday rental must show the property's tourist registration number, and that includes your website. We display it on every page; if you are unsure about your case, check with your adviser.",
          "Many guests book in English or German, so the site and the guest guide can be in several languages. It also helps to state clearly whether your prices include the Balearic sustainable tourism tax.",
        ],
      },
    ],
    points: [
      {
        title: "Synced calendar",
        text: "Availability connected to Airbnb and Booking.com via iCal or a channel manager, to avoid double bookings.",
      },
      {
        title: "Registration number shown",
        text: "Your tourist registration number on every page, as Balearic rules require for advertising.",
      },
      {
        title: "Guest guide",
        text: "Wi-Fi, house rules, rubbish, pool and nearby restaurants on a private page in each language.",
      },
      {
        title: "The house room by room",
        text: "Optimised photos of each room, the outside and the area, with a clear bed layout.",
      },
    ],
    price: {
      label: "Website with direct booking",
      value: `${P + booking} € + VAT`,
      note: `One-off: ${basePlan.name} (${P} €) plus online booking (${booking} €). Each extra language ${lang} € + VAT; with two more, ${P + booking + 2 * lang} € + VAT.`,
    },
    faq: [
      {
        title: "Do I have to show the registration number on my website?",
        text: "In the Balearics, advertising for a holiday rental must include its registration number, and that includes your website. We show it on every page; if you are unsure about your case, check with your adviser.",
      },
      {
        title: "Does it sync with Airbnb and Booking.com?",
        text: "Yes. Via iCal the calendar syncs with the platforms, though with some delay; if you manage several properties, a channel manager does it faster.",
      },
      {
        title: "Can I have several properties on one site?",
        text: "Yes. Each one has its own page, photos, calendar and registration number.",
      },
      {
        title: "I live outside Spain. Can we work remotely?",
        text: `Yes. We work by email and video call in English, Spanish or Catalan, and you can visit our office in Palma when you are on the island. You do not need a Spanish company to hire us.`,
      },
    ],
    searches: [
      "holiday rental website mallorca",
      "villa website with booking system",
      "direct booking website for holiday rental",
      "website for holiday villa mallorca",
      "avoid airbnb fees direct booking",
      "tourist rental website balearics",
    ],
    cta: "Shall we get your guests booking direct?",
  },

  /* ---------------------------------------------------------- Marketing/PR */
  {
    slug: "marketing-pr-agency-mallorca",
    es: "/soluciones/agencia-de-comunicacion-mallorca/",
    name: "Marketing and PR",
    title: `Marketing and PR Agency in Mallorca since ${site.since}`,
    description: `COMA, a communication agency in Palma since ${site.since}: press office with Balearic media, radio, press and TV campaigns, branding and Google and Meta ads.`,
    eyebrow: `Communication agency · Palma, ${site.since}`,
    h1: "Marketing and PR in Mallorca: from magazines and radio to AI",
    lead: `COMA started in ${site.since} publishing magazines and producing radio and television. Today we combine that experience with websites, software and artificial intelligence.`,
    sections: [
      {
        h2: "Communication and technology in the same team",
        paragraphs: [
          "A good story has to reach someone, and today it does so through press, radio, social media, Google and AI assistants at once. One team for communication and technology avoids messages that do not match and campaigns that end on a website that does not convert.",
          `We work for SMEs, institutions and large events in Mallorca, with references such as ${refs.slice(0, 4).join(", ")}, and since ${site.spainSince} for companies across Spain.`,
        ],
      },
      {
        h2: "Press, media and advertising",
        paragraphs: [
          "Our press office writes releases the way a newsroom does and works with press, radio, television and digital media in the Balearics, including English-language media for residents and visitors when your audience calls for it.",
          "We plan and create campaigns on radio, in the press and on TV, with the experience of having produced them. Online, we run Google and Meta ads with local targeting and real measurement.",
        ],
        list: [
          "Press releases, interviews and media relations",
          "Radio, press and television campaigns",
          "Brand strategy and visual identity",
          "Social media calendar, design and short video",
          "Google and Meta ads with monthly measurement",
        ],
      },
    ],
    points: [
      {
        title: "Press office",
        text: "Releases, interviews and relations with local and specialist media in the Balearics, also in English.",
      },
      {
        title: "Radio, press and TV",
        text: "Campaigns and content in traditional media, from a team that has edited magazines and produced programmes.",
      },
      {
        title: "Brand and social media",
        text: "Positioning, visual identity, editorial calendar and short video.",
      },
      {
        title: "Website, SEO and AI",
        text: "So the attention you generate turns into enquiries you can measure.",
      },
    ],
    price: quote(
      "A written plan with messages, channels, calendar and budget, agreed before we start. We measure the impact each month and adjust."
    ),
    faq: [
      {
        title: "Do you guarantee coverage?",
        text: "No: publication is the media outlet's decision. What we do is prepare stories with real news value and take them to the people who can publish them.",
      },
      {
        title: "Do you work with English-language media?",
        text: "Yes, when your audience calls for it: Mallorca has press for English-speaking residents and visitors. We work with you in English, Spanish or Catalan.",
      },
      {
        title: "Do press mentions help with ChatGPT?",
        text: "Mentions in reliable media are one of the signals that help AI assistants know about and cite a company. We cannot guarantee it, but it supports your SEO and GEO.",
      },
      {
        title: "Do you work with institutions and events?",
        text: `Yes. Our references include ${refs.join(", ")}.`,
      },
    ],
    searches: [
      "pr agency mallorca",
      "marketing agency mallorca",
      "communication agency palma",
      "press office mallorca",
      "advertising agency mallorca",
      "radio advertising mallorca",
      "branding agency palma",
    ],
    cta: "Shall we get people talking about your business?",
  },
];
