import React from 'react';
import { Phone, MessageSquare } from 'lucide-react';
import { SITE } from '../../config/siteConfig';

export default function LocalPageHero({ title, subtitle }) {
  const whatsappText = encodeURIComponent(
    'Hi Aarushi Infotech, I have an inquiry about your IT and Tally solutions.'
  );

  return (
    <section className="pt-32 pb-16 px-6 md:px-12 bg-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-cyan/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-mint/20 blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy font-heading font-extrabold text-xs tracking-wider uppercase mb-6">
          <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
          Trusted IT Partner
        </div>

        <h1 className="text-4xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-6 font-heading">
          {title}
        </h1>

        <p className="text-lg md:text-xl text-brand-steelblue/80 font-medium max-w-2xl mx-auto mb-8 leading-relaxed">
          {subtitle}
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="bg-brand-navy text-white hover:text-brand-mint font-heading font-extrabold text-sm uppercase tracking-widest py-4 px-8 rounded-full shadow-lg shadow-brand-navy/15 hover:shadow-brand-navy/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-heading font-extrabold text-sm uppercase tracking-widest py-4 px-8 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
