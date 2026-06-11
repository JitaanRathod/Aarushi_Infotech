import { Link } from 'react-router-dom';
import { Phone, MessageSquare, ArrowRight } from 'lucide-react';
import { SITE } from '../../config/siteConfig';

export default function LocalCTA() {
  const whatsappText = encodeURIComponent(
    'Hi Aarushi Infotech, I would like to discuss a project with your team.'
  );

  return (
    <section className="py-16 px-6 md:px-12 bg-brand-navy text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-4 font-heading">
          Ready to Get Started?
        </h2>
        <p className="text-white/70 font-medium mb-8 max-w-xl mx-auto">
          Call us, message on WhatsApp, or visit our contact page for a free consultation.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${SITE.phoneTel}`}
            className="bg-white text-brand-navy hover:text-brand-steelblue font-heading font-extrabold text-sm uppercase tracking-widest py-4 px-8 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            {SITE.phone}
          </a>
          <a
            href={`https://wa.me/${SITE.whatsapp}?text=${whatsappText}`}
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white font-heading font-extrabold text-sm uppercase tracking-widest py-4 px-8 rounded-full shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp Us
          </a>
          <Link
            to="/contact"
            className="border border-white/30 hover:border-brand-mint text-white hover:text-brand-mint font-heading font-extrabold text-sm uppercase tracking-widest py-4 px-8 rounded-full transition-all duration-300 flex items-center gap-2"
          >
            Contact Page
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}

