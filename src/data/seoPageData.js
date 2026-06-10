const DEFAULT_WHY_CHOOSE = [
  {
    title: '10+ Years of Experience',
    description:
      'A decade of delivering Tally, ERP, and software solutions to businesses across Maharashtra.',
  },
  {
    title: '500+ Clients Served',
    description:
      'Trusted by manufacturers, traders, retailers, and service businesses throughout the region.',
  },
  {
    title: 'Local On-Site Support',
    description:
      'Our team visits your office for installation, training, and troubleshooting — no remote-only support.',
  },
  {
    title: 'Fast Response Times',
    description:
      'Same-day support for critical issues. WhatsApp and phone support during business hours.',
  },
];

const SERVICE_TEMPLATES = {
  'tally-prime': {
    serviceName: 'Tally Prime',
    displayH1: 'Tally Prime Solutions',
    displaySubtitle:
      'Authorized Tally Prime implementation, licensing, and support. Get GST-compliant accounting with expert local assistance.',
    displayServicesDescription:
      'From fresh Tally Prime installation to ongoing AMC support, we help businesses manage accounts, inventory, and GST with confidence.',
    h1: (city) => `Tally Prime Services in ${city}`,
    metaTitle: (city) => `Tally Prime Services in ${city} | Aarushi Infotech`,
    metaDescription: (city) =>
      `Expert Tally Prime dealer & implementation in ${city}. Installation, licensing, GST setup, training & support. Call Aarushi Infotech — trusted Tally partner in Vasai-Virar & Mumbai.`,
    subtitle: (city) =>
      `Authorized Tally Prime implementation, licensing, and support for businesses in ${city} and surrounding areas. Get GST-compliant accounting with expert local assistance.`,
    servicesTitle: 'What We Offer',
    servicesDescription: (city) =>
      `From fresh Tally Prime installation to ongoing AMC support, we help ${city} businesses manage accounts, inventory, and GST with confidence.`,
    services: [
      'Tally Prime installation & multi-user setup',
      'License renewal & version upgrades',
      'GST, e-invoice & e-way bill configuration',
      'Data migration from Tally ERP 9 or Excel',
      'On-site training for your accounting team',
      'Annual maintenance contract (AMC) & support',
    ],
    faqs: (city) => [
      {
        question: `How much does Tally Prime cost in ${city}?`,
        answer: `Tally Prime pricing depends on your edition (Single User, Multi User, or Gold). We provide transparent quotations for ${city} businesses including installation and GST setup. Contact us for the latest pricing.`,
      },
      {
        question: `Do you provide on-site Tally support in ${city}?`,
        answer: `Yes. Our technicians visit offices across ${city}, Virar, Vasai, and Mumbai for installation, training, and troubleshooting. Remote support is also available for quick fixes.`,
      },
      {
        question: `Can you migrate my old Tally data to Tally Prime?`,
        answer: `Absolutely. We safely migrate data from Tally ERP 9, older Tally versions, or Excel spreadsheets without data loss. Migration is completed before go-live.`,
      },
      {
        question: `Is Tally Prime GST compliant for Maharashtra businesses?`,
        answer: `Yes. Tally Prime supports GSTR-1, GSTR-3B, e-invoicing, and e-way bills as per current GST regulations. We configure everything for your ${city} business.`,
      },
    ],
  },
  'tally-customization': {
    serviceName: 'Tally Customization',
    displayH1: 'Tally Customization Services',
    displaySubtitle:
      'Custom TDL development, invoice formats, and reports built for how your business actually works — not generic templates.',
    displayServicesDescription:
      'We build custom Tally solutions for distributors, manufacturers, and retailers who need more than out-of-the-box Tally.',
    h1: (city) => `Tally Customization Services in ${city}`,
    metaTitle: (city) => `Tally Customization in ${city} | TDL Development | Aarushi Infotech`,
    metaDescription: (city) =>
      `Custom Tally reports, invoice formats & TDL development in ${city}. Tailor Tally Prime to your business workflow. Expert Tally customization company near ${city}.`,
    subtitle: (city) =>
      `Custom TDL development, invoice formats, and reports built for how your ${city} business actually works — not generic templates.`,
    servicesTitle: 'Tally Customization Services',
    servicesDescription: (city) =>
      `We build custom Tally solutions for distributors, manufacturers, and retailers across ${city} who need more than out-of-the-box Tally.`,
    services: [
      'Custom invoice & voucher formats (TDL)',
      'Tailored MIS reports and dashboards',
      'Barcode & batch-wise inventory tracking',
      'Multi-branch / multi-Godown configurations',
      'Integration with weighing scales & POS',
      'Approval workflows and user access controls',
    ],
    faqs: (city) => [
      {
        question: `What is Tally customization (TDL) and do I need it?`,
        answer: `TDL (Tally Definition Language) lets us customize invoices, reports, and workflows in Tally Prime. ${city} businesses with unique billing formats or industry-specific needs benefit most.`,
      },
      {
        question: `How long does a Tally customization project take?`,
        answer: `Simple invoice format changes take 2–5 days. Complex multi-module customizations may take 2–4 weeks. We provide a timeline after understanding your requirements.`,
      },
      {
        question: `Will customizations work after Tally version updates?`,
        answer: `We build TDL code compatible with current Tally Prime releases and test after updates. AMC clients receive free compatibility fixes when needed.`,
      },
      {
        question: `Can you customize Tally for manufacturing businesses in ${city}?`,
        answer: `Yes. We specialize in BOM, production tracking, job-work, and batch-wise inventory customizations for ${city} manufacturers and processors.`,
      },
    ],
  },
  'whatsapp-tally': {
    serviceName: 'WhatsApp + Tally Integration',
    displayH1: 'WhatsApp Tally Integration',
    displaySubtitle:
      'Send invoices, payment reminders, and order confirmations automatically from Tally to your customers on WhatsApp.',
    displayServicesDescription:
      'Reduce manual follow-ups and speed up collections for distributors, retailers, and service providers.',
    h1: (city) => `WhatsApp Tally Integration in ${city}`,
    metaTitle: (city) => `WhatsApp Tally Integration in ${city} | Aarushi Infotech`,
    metaDescription: (city) =>
      `Automate invoice sharing, payment reminders & order alerts via WhatsApp + Tally in ${city}. Secure WhatsApp Business API integration for ${city} traders & distributors.`,
    subtitle: (city) =>
      `Send invoices, payment reminders, and order confirmations automatically from Tally to your customers' WhatsApp — built for ${city} businesses.`,
    servicesTitle: 'WhatsApp + Tally Features',
    servicesDescription: (city) =>
      `Reduce manual follow-ups and speed up collections for ${city} distributors, retailers, and service providers.`,
    services: [
      'Auto-send sales invoices via WhatsApp on voucher save',
      'Payment reminder alerts for outstanding dues',
      'Order confirmation & dispatch notifications',
      'Ledger & statement sharing to customers',
      'WhatsApp Business API setup & compliance',
      'Bulk messaging for promotions & announcements',
    ],
    faqs: (city) => [
      {
        question: `How does WhatsApp Tally integration work?`,
        answer: `When you save a sales invoice or receipt in Tally, the system automatically sends a PDF or message to the customer's WhatsApp number. No manual forwarding needed.`,
      },
      {
        question: `Is WhatsApp Business API required for Tally integration in ${city}?`,
        answer: `For automated, high-volume messaging we recommend WhatsApp Business API. We handle setup, verification, and Tally integration for ${city} clients.`,
      },
      {
        question: `Can I send payment reminders automatically?`,
        answer: `Yes. Configure reminder schedules based on due dates. Customers in ${city} and across India receive timely WhatsApp reminders for pending payments.`,
      },
      {
        question: `Is customer data secure with WhatsApp integration?`,
        answer: `All data stays on your server. WhatsApp messages are sent via encrypted API channels. We follow Meta's messaging policies and never share customer data.`,
      },
    ],
  },
  'website-development': {
    serviceName: 'Website Development',
    displayH1: 'Website Development',
    displaySubtitle:
      'High-performance, mobile-friendly websites that help businesses establish credibility and generate leads online.',
    displayServicesDescription:
      'From corporate websites to e-commerce stores, we build fast, SEO-optimized sites for businesses ready to grow online.',
    h1: (city) => `Website Development in ${city}`,
    metaTitle: (city) => `Website Development Company in ${city} | Aarushi Infotech`,
    metaDescription: (city) =>
      `Professional website development in ${city}. Business websites, e-commerce, SEO-ready React sites. Trusted web development company serving ${city} & nearby areas.`,
    subtitle: (city) =>
      `High-performance, mobile-friendly websites that help ${city} businesses establish credibility and generate leads online.`,
    servicesTitle: 'Website Development Services',
    servicesDescription: (city) =>
      `From corporate websites to e-commerce stores, we build fast, SEO-optimized sites for ${city} businesses ready to grow online.`,
    services: [
      'Business & corporate website design',
      'E-commerce & online store development',
      'SEO-optimized, mobile-responsive layouts',
      'React-based high-performance frontends',
      'Contact forms, WhatsApp & CRM integration',
      'Website maintenance & hosting support',
    ],
    faqs: (city) => [
      {
        question: `How much does a business website cost in ${city}?`,
        answer: `A basic business website starts from ₹15,000. E-commerce and custom web apps are quoted based on features. We provide free consultations for ${city} businesses.`,
      },
      {
        question: `How long does it take to build a website?`,
        answer: `A standard business website takes 2–4 weeks. E-commerce projects may take 4–8 weeks depending on catalog size and payment integrations.`,
      },
      {
        question: `Will my website rank on Google for ${city} searches?`,
        answer: `We build SEO-ready websites with proper meta tags, fast loading, and mobile optimization. Local SEO for ${city} keywords can be added as a service.`,
      },
      {
        question: `Do you provide website maintenance after launch?`,
        answer: `Yes. We offer annual maintenance plans covering updates, backups, security patches, and content changes for ${city} clients.`,
      },
    ],
  },
  erp: {
    serviceName: 'ERP Software',
    displayH1: 'ERP Solutions',
    displaySubtitle:
      'End-to-end ERP systems that connect accounting, inventory, production, and sales — built for growing businesses.',
    displayServicesDescription:
      'Move beyond spreadsheets with integrated ERP software designed for manufacturers, traders, and service companies.',
    h1: (city) => `ERP Software Company in ${city}`,
    metaTitle: (city) => `ERP Software Company in ${city} | Aarushi Infotech`,
    metaDescription: (city) =>
      `Custom ERP software development in ${city}. Inventory, production, accounting & HR modules. Scalable ERP solutions for ${city} manufacturers & distributors.`,
    subtitle: (city) =>
      `End-to-end ERP systems that connect accounting, inventory, production, and sales — built for growing ${city} businesses.`,
    servicesTitle: 'ERP Solutions We Deliver',
    servicesDescription: (city) =>
      `Move beyond spreadsheets with integrated ERP software designed for ${city} manufacturers, traders, and service companies.`,
    services: [
      'Inventory & warehouse management',
      'Production planning & BOM tracking',
      'Sales, purchase & accounting integration',
      'Multi-branch & multi-location support',
      'Custom dashboards & MIS reporting',
      'Tally Prime ERP integration',
    ],
    faqs: (city) => [
      {
        question: `What is ERP software and does my ${city} business need it?`,
        answer: `ERP connects all business departments — sales, purchase, inventory, accounts — in one system. ${city} businesses with 10+ employees or multiple locations benefit most.`,
      },
      {
        question: `Can ERP integrate with our existing Tally setup?`,
        answer: `Yes. We build ERP systems that sync with Tally Prime for accounting while managing operations in a custom platform. Popular among ${city} manufacturers.`,
      },
      {
        question: `How long does ERP implementation take?`,
        answer: `Basic ERP modules go live in 4–8 weeks. Full enterprise implementations take 3–6 months. We phase delivery so ${city} teams adopt gradually.`,
      },
      {
        question: `Do you provide training for ERP users in ${city}?`,
        answer: `Yes. On-site and remote training sessions are included. We create role-based access so each team member sees only what they need.`,
      },
    ],
  },
  crm: {
    serviceName: 'CRM Software',
    displayH1: 'CRM Solutions',
    displaySubtitle:
      'Track leads, manage follow-ups, and close more deals with CRM software tailored for sales teams.',
    displayServicesDescription:
      'Stop losing leads in WhatsApp chats and Excel sheets. Our CRM gives businesses a structured sales pipeline.',
    h1: (city) => `CRM Software in ${city}`,
    metaTitle: (city) => `CRM Software Solutions in ${city} | Aarushi Infotech`,
    metaDescription: (city) =>
      `Custom CRM software in ${city}. Lead tracking, follow-ups, sales pipeline & customer management. CRM solutions for ${city} sales teams & service businesses.`,
    subtitle: (city) =>
      `Track leads, manage follow-ups, and close more deals with CRM software tailored for ${city} sales teams.`,
    servicesTitle: 'CRM Features',
    servicesDescription: (city) =>
      `Stop losing leads in WhatsApp chats and Excel sheets. Our CRM gives ${city} businesses a structured sales pipeline.`,
    services: [
      'Lead capture & assignment automation',
      'Follow-up reminders & activity tracking',
      'Sales pipeline & deal stage management',
      'Customer history & communication logs',
      'WhatsApp & email integration',
      'Sales reports & team performance dashboards',
    ],
    faqs: (city) => [
      {
        question: `What is CRM software and how does it help ${city} businesses?`,
        answer: `CRM (Customer Relationship Management) tracks every lead and customer interaction. ${city} sales teams never miss follow-ups and managers get real-time pipeline visibility.`,
      },
      {
        question: `Can CRM integrate with WhatsApp for ${city} sales teams?`,
        answer: `Yes. We integrate WhatsApp so sales conversations are logged automatically in the CRM. Popular for ${city} real estate, distribution, and service businesses.`,
      },
      {
        question: `Is custom CRM better than off-the-shelf tools?`,
        answer: `For businesses with unique workflows in ${city}, custom CRM fits better than generic tools. We build only the features you need — no bloat.`,
      },
      {
        question: `How quickly can CRM be deployed for my team?`,
        answer: `A basic CRM with lead tracking and follow-ups can go live in 2–3 weeks. We train your ${city} team before handover.`,
      },
    ],
  },
};

function buildPageConfig(serviceKey, city, slug) {
  const template = SERVICE_TEMPLATES[serviceKey];
  return {
    slug,
    serviceKey,
    city,
    serviceName: template.serviceName,
    metaTitle: template.metaTitle(city),
    metaDescription: template.metaDescription(city),
    h1: template.h1(city),
    displayH1: template.displayH1,
    displaySubtitle: template.displaySubtitle,
    subtitle: template.subtitle(city),
    servicesTitle: template.servicesTitle,
    servicesDescription: template.servicesDescription(city),
    displayServicesDescription: template.displayServicesDescription,
    services: template.services,
    whyChoosePoints: DEFAULT_WHY_CHOOSE,
    faqs: template.faqs(city),
  };
}

export const SEO_PAGES = [
  // Priority 1 — Vasai
  buildPageConfig('tally-prime', 'Vasai', '/tally-prime-services-vasai'),
  buildPageConfig('tally-customization', 'Vasai', '/tally-customization-vasai'),
  buildPageConfig('whatsapp-tally', 'Vasai', '/whatsapp-tally-integration-vasai'),
  buildPageConfig('website-development', 'Vasai', '/website-development-vasai'),
  buildPageConfig('erp', 'Vasai', '/erp-software-company-vasai'),
  buildPageConfig('crm', 'Vasai', '/crm-software-vasai'),

  // Priority 2 — Virar
  buildPageConfig('tally-prime', 'Virar', '/tally-prime-services-virar'),
  buildPageConfig('tally-customization', 'Virar', '/tally-customization-virar'),
  buildPageConfig('whatsapp-tally', 'Virar', '/whatsapp-tally-integration-virar'),
  buildPageConfig('website-development', 'Virar', '/website-development-virar'),
  buildPageConfig('erp', 'Virar', '/erp-software-company-virar'),
  buildPageConfig('crm', 'Virar', '/crm-software-virar'),

  // Priority 3 — Mumbai
  buildPageConfig('tally-prime', 'Mumbai', '/tally-prime-services-mumbai'),
  buildPageConfig('tally-customization', 'Mumbai', '/tally-customization-mumbai'),
  buildPageConfig('whatsapp-tally', 'Mumbai', '/whatsapp-tally-integration-mumbai'),
  buildPageConfig('website-development', 'Mumbai', '/website-development-mumbai'),
  buildPageConfig('erp', 'Mumbai', '/erp-software-company-mumbai'),
  buildPageConfig('crm', 'Mumbai', '/crm-software-mumbai'),

  // Priority 4 — Nearby Areas
  buildPageConfig('tally-prime', 'Nalasopara', '/tally-prime-services-nalasopara'),
  buildPageConfig('tally-prime', 'Bhayandar', '/tally-prime-services-bhayandar'),
  buildPageConfig('tally-prime', 'Mira Road', '/tally-prime-services-mira-road'),
  buildPageConfig('website-development', 'Thane', '/website-development-thane'),
];

export const SEO_PAGE_MAP = Object.fromEntries(
  SEO_PAGES.map((page) => [page.slug, page])
);
