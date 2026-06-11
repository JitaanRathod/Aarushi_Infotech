import React from 'react';
import {
  MapPin,
  Phone,
  MessageSquare,
  Clock,
} from 'lucide-react';
import { SITE } from '../config/siteConfig';
import LocationButton from '../components/LocationButton';

export default function Contact() {

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-amber font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            CONTACT AARUSHI INFOTECH
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6 font-heading">
            Let's Discuss Your Business Requirements
          </h1>

          <p className="text-base md:text-lg text-brand-steelblue/80 font-medium">
            Looking for Tally Prime support, ERP implementation, CRM solutions,
            WhatsApp automation or website development? Our team is ready to help.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">

          {/* Left Side */}
          <div className="lg:col-span-5 flex flex-col gap-6">

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-lg text-brand-navy mb-2">
                  Our Office
                </h3>

                <p className="text-sm text-brand-steelblue/80 leading-relaxed font-medium">
                  {SITE.address}
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-lg text-brand-navy mb-2">
                  Direct Contact
                </h3>

                <p className="text-sm text-brand-navy font-bold mb-1">
                  Phone:{' '}
                  <a
                    href={`tel:${SITE.phoneTel}`}
                    className="hover:underline"
                  >
                    {SITE.phone}
                  </a>
                </p>

                <p className="text-sm text-brand-navy font-bold">
                  Email:{' '}
                  <a
                    href={`mailto:${SITE.email}`}
                    className="hover:underline"
                  >
                    {SITE.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-brand-amber flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-lg text-brand-navy mb-2">
                  Business Hours
                </h3>

                <p className="text-sm text-brand-steelblue/80 leading-relaxed font-medium">
                  Monday - Saturday
                </p>

                <p className="text-sm text-brand-steelblue/80 leading-relaxed font-medium">
                  09:30 AM - 05:30 PM
                </p>
              </div>
            </div>

            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
                'Hi Aarushi Infotech, I would like to know more about your services.'
              )}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white flex-shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>

              <div>
                <h3 className="font-heading font-extrabold text-lg text-white mb-1">
                  Chat on WhatsApp
                </h3>

                <p className="text-sm text-white/80">
                  Get quick responses for quotations, support requests and
                  business consultations.
                </p>
              </div>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white p-8 md:p-10 rounded-3xl border border-slate-100 shadow-sm">
              <h2 className="text-2xl font-heading font-extrabold text-brand-navy mb-2">
                Request a Consultation
              </h2>

              <p className="text-brand-steelblue/80 mb-8">
                Fill in the details below and our team will contact you shortly.
              </p>

              <div className="rounded-3xl overflow-hidden border border-slate-100 shadow-xl bg-slate-50">
                <div className="bg-brand-navy/5 px-6 py-5 border-b border-slate-200">
                  <h3 className="text-xl font-heading font-extrabold text-brand-navy mb-1">
                    Send Us Your Query
                  </h3>
                  <p className="text-sm text-brand-steelblue/80">
                    Click the button below to open our Google query form in a new tab.
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-6 px-6 py-16">
                  <p className="text-base md:text-lg text-brand-steelblue/80 text-center max-w-2xl">
                    We use a dedicated Google form for contact requests. Press the button to send your details directly, and our team will follow up with you shortly.
                  </p>

                  <a
                    href="https://docs.google.com/forms/d/e/1FAIpQLSfbe0nqCpVEYHBWx3oQJxafbcrhQnslvgrPBLO_AIAtadVUfA/viewform?embedded=true"
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-brand-navy text-white text-sm font-heading font-extrabold uppercase tracking-widest px-10 py-4 shadow-lg shadow-brand-navy/20 hover:bg-brand-mint hover:text-brand-navy transition-all duration-300"
                  >
                    Send Us Query
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="flex justify-center">
          <LocationButton
            variant="primary"
            label="Open in Google Maps"
            showAddress
          />
        </div>

      </div>
    </div>
  );
}