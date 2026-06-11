import { Helmet } from 'react-helmet-async';
import logo1 from '../assets/customers/logo1.png';
import logo2 from '../assets/customers/logo2.png';
import logo3 from '../assets/customers/logo3.png';
import logo4 from '../assets/customers/logo4.png';
import logo5 from '../assets/customers/logo5.png';
import logo6 from '../assets/customers/logo6.png';
import logo7 from '../assets/customers/logo7.png';
import logo8 from '../assets/customers/logo8.png';
import logo9 from '../assets/customers/logo9.png';
import logo10 from '../assets/customers/logo10.png';
import logo11 from '../assets/customers/logo11.png';
import logo12 from '../assets/customers/logo12.png';

const industries = [
  {
    title: 'Manufacturing',
    description:
      'Integrated Tally and ERP workflows for production planning, inventory control, and compliance across factory operations.',
  },
  {
    title: 'Logistics & Supply Chain',
    description:
      'Automation for dispatch tracking, purchase orders, billing and inward-outward stock movement to improve delivery precision.',
  },
  {
    title: 'Retail & Distribution',
    description:
      'Point-of-sale, billing, inventory optimization and customer accounting solutions for store chains and wholesale distributors.',
  },
  {
    title: 'Pharmaceuticals',
    description:
      'Regulatory-ready accounting, batch control and GST-compliant billing tailored for pharma trading and distribution.',
  },
  {
    title: 'Logistics & Freight',
    description:
      'Operational efficiency for fleet management, invoicing, freight accounting and data-driven dispatch planning.',
  },
  {
    title: 'Professional Services',
    description:
      'Business process automation for advisory firms, consultants and service providers with scalable accounting systems.',
  },
];

const customerLogos = [
  { name: 'JBF Industries Ltd.', src: logo1 },
  { name: 'Dashmesh Groups', src: logo2 },
  { name: 'Dashmesh Groups', src: logo3 },
  { name: 'Padam', src: logo4 },
  { name: 'Meghna Colour Chem', src: logo5 },
  { name: 'Logo Placeholder', src: logo6 },
  { name: 'ERA LabXpert LLP', src: logo7 },
  { name: 'EIPL', src: logo8 },
  { name: 'ALK Logistics', src: logo9 },
  { name: 'Sona', src: logo10 },
  { name: 'Manish Labchem', src: logo11 },
  { name: 'ERA', src: logo12 },
];

function LogoCard({ src, name }) {
  return (
    <div className="bg-white border border-slate-200 rounded-3xl p-5 flex items-center justify-center shadow-lg shadow-slate-900/10 hover:border-brand-cyan transition-all duration-300">
      <img src={src} alt={name} className="max-h-14 max-w-full object-contain" />
    </div>
  );
}

export default function Industries() {
  return (
    <main>
      <Helmet>
        <title>Aarushi Infotech | Industries We Serve</title>
        <meta
          name="description"
          content="Aarushi Infotech serves businesses across industries with Tally, ERP, CRM, WhatsApp automation and website development."
        />
        <link rel="canonical" href="https://aarushiinfotech.in/industries" />
      </Helmet>

      <section className="relative overflow-hidden bg-brand-navy pt-32 pb-20 animate-fade-up">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(109,209,215,0.18),_transparent_35%)]" />
        <div className="relative max-w-6xl mx-auto px-6 md:px-12 text-center">
          <p className="text-brand-mint font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            INDUSTRY WORK
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6">
            Real Solutions for Real Business Sectors
          </h1>
          <p className="mx-auto text-base md:text-lg text-white/70 leading-relaxed max-w-3xl">
            Our technology implementations are designed for the unique needs of each industry, delivering accuracy, speed, and clarity across financial, operational and customer-facing processes.
          </p>
        </div>
      </section>

      <section className="py-20 bg-slate-50 animate-fade-up">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => (
              <div key={industry.title} className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-md hover:-translate-y-1 transition-transform duration-300">
                <h2 className="text-xl font-heading font-extrabold text-brand-navy mb-3">
                  {industry.title}
                </h2>
                <p className="text-sm text-brand-steelblue/80 leading-relaxed">
                  {industry.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-slate-100 animate-fade-up">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
            <div>
              <p className="text-brand-amber font-heading font-extrabold text-xs uppercase tracking-widest mb-3">
                TRUSTED PARTNERS
              </p>
              <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy">
                Companies That Rely on Our Industry Expertise
              </h2>
            </div>
            <p className="max-w-xl text-sm text-brand-steelblue/80">
              These customers represent a selection of the sectors we support — showing how our work fits manufacturing, logistics, retail, pharma, and professional services.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {customerLogos.map((logo) => (
              <LogoCard key={logo.name} {...logo} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

