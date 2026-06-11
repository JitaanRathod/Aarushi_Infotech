import { Link } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  MessageSquare,
  ArrowUpRight
} from 'lucide-react';

import logo from '../assets/logo.png';
import {
  SITE,
  SERVICE_LINKS,
} from '../config/siteConfig';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const whatsappText = encodeURIComponent(
    'Hi Aarushi Infotech, I would like to know more about your services.'
  );

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">

      {/* Background Glow */}
      <div className="absolute right-[-10%] bottom-[-10%] w-[30%] h-[30%] rounded-full bg-brand-cyan/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">

          {/* Brand */}
          <div className="lg:col-span-3 flex flex-col gap-6">

            <Link
              to="/"
              className="flex items-center gap-3 w-fit group"
            >
              <div className="w-12 h-12 bg-white rounded-full p-1 overflow-hidden shadow-md group-hover:scale-105 transition-all duration-300">
                <img
                  src={logo}
                  alt="Aarushi Infotech Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col">
                <span className="text-white font-heading font-extrabold text-base tracking-wider">
                  AARUSHI
                </span>

                <span className="text-brand-mint font-heading font-semibold text-xs tracking-widest">
                  INFOTECH
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 leading-relaxed">
              {SITE.description}
            </p>

            {/* Quick CTA */}
            <div className="flex flex-col gap-3">

              <a
                href={`tel:${SITE.phoneTel}`}
                className="inline-flex items-center gap-2 text-brand-mint font-semibold hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Now
              </a>

              <a
                href={`https://wa.me/${SITE.whatsapp}?text=${whatsappText}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-brand-mint font-semibold hover:text-white transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                WhatsApp Us
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-6">

            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-cyan">
              Quick Links
            </h4>

            <div className="flex flex-col gap-3">

              <Link
                to="/"
                className="text-sm text-white/70 hover:text-brand-mint transition-colors flex items-center gap-1 group"
              >
                Home
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>

              <Link
                to="/services"
                className="text-sm text-white/70 hover:text-brand-mint transition-colors flex items-center gap-1 group"
              >
                Services
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>

              <Link
                to="/about"
                className="text-sm text-white/70 hover:text-brand-mint transition-colors flex items-center gap-1 group"
              >
                About
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>

              <Link
                to="/contact"
                className="text-sm text-white/70 hover:text-brand-mint transition-colors flex items-center gap-1 group"
              >
                Contact
                <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-all" />
              </Link>

            </div>
          </div>

          {/* Contact Us (replaces Services to reduce footer size) */}
          <div className="lg:col-span-3 flex flex-col gap-6">

            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-cyan">
              Contact Us
            </h4>

            <div className="flex flex-col gap-3 text-sm text-white/70">

              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-mint" />
                <div className="flex flex-col gap-1">
                  <a href="tel:+919967844269" className="hover:text-brand-mint transition-colors text-sm">+91-9967844269</a>
                  <a href={`tel:${SITE.phoneTel}`} className="hover:text-brand-mint transition-colors text-sm">{SITE.phone}</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-mint" />
                <div className="flex flex-col gap-1">
                  <a href="mailto:info@aarushiinfotech.in" className="hover:text-brand-mint transition-colors text-sm">info@aarushiinfotech.in</a>
                  <a href={`mailto:${SITE.email}`} className="hover:text-brand-mint transition-colors text-sm">{SITE.email}</a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-brand-mint" />
                <a href={`https://wa.me/${SITE.whatsapp}?text=${whatsappText}`} target="_blank" rel="noreferrer" className="hover:text-brand-mint transition-colors text-sm">Chat on WhatsApp</a>
              </div>

            </div>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4 flex flex-col gap-6">

            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-cyan">
              Our Branches
            </h4>

            <div className="flex flex-col gap-4 text-sm text-white/70">

              {SITE.branches.map((branch, index) => (
                <div key={index} className="pb-3 border-b border-white/10 last:border-b-0">
                  <h5 className="font-semibold text-white mb-1">{branch.name}</h5>
                  <div className="flex items-start gap-2 mb-2">
                    <MapPin className="w-4 h-4 text-brand-mint flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{branch.address}</span>
                  </div>
                </div>
              ))}

              {/* Contacts moved to the Contact Us column to reduce footer size */}

            </div>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">

          <p>
            © {currentYear} Aarushi Infotech. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <span>
              Tally Prime • ERP • CRM • Website Development
            </span>
          </div>

        </div>

      </div>
    </footer>
  );
}
