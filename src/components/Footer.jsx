import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import logo from '../assets/logo.png';
import { SITE, SERVICE_LINKS } from '../config/siteConfig';
import LocationButton from './LocationButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const whatsappText = encodeURIComponent(
    'Hi Aarushi Infotech, I have an inquiry regarding your IT/Tally solutions.'
  );

  return (
    <footer className="bg-brand-navy text-white pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute right-[-10%] bottom-[-10%] w-[30%] h-[30%] rounded-full bg-brand-cyan/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-white/10">

          {/* Column 1: Brand & Logo */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-3 w-fit group">
              <div className="w-12 h-12 bg-white rounded-full p-1 overflow-hidden shadow-md group-hover:scale-105 transition-all duration-300">
                <img
                  src={logo}
                  alt="Aarushi Infotech Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-white font-heading font-extrabold text-base leading-tight tracking-wider">
                  AARUSHI
                </span>
                <span className="text-brand-mint font-heading font-semibold text-xs leading-none tracking-widest">
                  INFOTECH
                </span>
              </div>
            </Link>

            <p className="text-sm text-white/70 font-medium max-w-sm leading-relaxed">
              Tally Prime, ERP, CRM, WhatsApp integration & website development for businesses in{' '}
              <span className="text-white/90">Vasai · Virar · Nalasopara · Bhayandar · Mumbai</span>{' '}
              and nearby areas.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-cyan">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              {['Home', 'Services', 'About', 'Contact'].map((link) => (
                <Link
                  key={link}
                  to={link === 'Home' ? '/' : `/${link.toLowerCase()}`}
                  className="text-sm text-white/70 hover:text-brand-mint font-medium transition-colors duration-300 flex items-center gap-1 group"
                >
                  {link}
                  <ArrowUpRight className="w-3.5 h-3.5 opacity-0 -translate-y-0.5 group-hover:opacity-100 transition-all duration-300" />
                </Link>
              ))}
            </div>
          </div>

          {/* Column 3: Services */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-cyan">
              Our Services
            </h4>
            <div className="flex flex-col gap-3 text-sm text-white/70 font-medium">
              {SERVICE_LINKS.map((service) => (
                <Link
                  key={service.path}
                  to={service.path}
                  className="hover:text-brand-mint transition-colors duration-300"
                >
                  {service.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Column 4: Contact Info */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <h4 className="font-heading font-bold text-xs uppercase tracking-widest text-brand-cyan">
              Contact Us
            </h4>
            <div className="flex flex-col gap-4 text-sm text-white/70 font-medium">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-mint flex-shrink-0 mt-0.5" />
                <span className="leading-relaxed">{SITE.address}</span>
              </div>
              <LocationButton variant="footer" label="Location" className="w-fit" />
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-mint flex-shrink-0" />
                <a href={`tel:${SITE.phoneTel}`} className="hover:text-brand-mint transition-colors">
                  {SITE.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="w-4 h-4 text-brand-mint flex-shrink-0" />
                <a
                  href={`https://wa.me/${SITE.whatsapp}?text=${whatsappText}`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-brand-mint transition-colors"
                >
                  WhatsApp Us
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-mint flex-shrink-0" />
                <a href={`mailto:${SITE.email}`} className="hover:text-brand-mint transition-colors">
                  {SITE.email}
                </a>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-medium">
          <p>© {currentYear} Aarushi Infotech. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#privacy" className="hover:text-white transition-colors duration-300">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
