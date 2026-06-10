import React, { useState } from 'react';
import { MapPin, Phone, MessageSquare, Clock } from 'lucide-react';
import { SITE } from '../config/siteConfig';
import LocationButton from '../components/LocationButton';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Tally Prime Solutions',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate static form submit
    console.log('Submitting Contact Request:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Tally Prime Solutions',
        message: ''
      });
    }, 4000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-amber font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            GET IN TOUCH
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6 font-heading">
            Contact Aarushi Infotech
          </h1>
          <p className="text-base md:text-lg text-brand-steelblue/80 font-medium">
            Have a project in mind, need Tally customizations, or want to consult on custom business ERPs? Let's connect.
          </p>
        </div>

        {/* Contact Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
          
          {/* Left Side: Contact Information cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg text-brand-navy mb-2">Our Office — Virar</h3>
                <p className="text-sm text-brand-steelblue/80 leading-relaxed font-medium">
                  {SITE.address}
                </p>
              </div>
            </div>

            {/* Direct Calls and Email */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600 flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg text-brand-navy mb-2">Direct Contact</h3>
                <p className="text-sm text-brand-navy font-bold flex items-center gap-1 mb-1">
                  Phone: <a href={`tel:${SITE.phoneTel}`} className="hover:underline">{SITE.phone}</a>
                </p>
                <p className="text-sm text-brand-navy font-bold flex items-center gap-1">
                  Email: <a href={`mailto:${SITE.email}`} className="hover:underline">{SITE.email}</a>
                </p>
              </div>
            </div>

            {/* Support hours */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-brand-amber flex-shrink-0">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg text-brand-navy mb-2">Business Hours</h3>
                <p className="text-sm text-brand-steelblue/80 leading-relaxed font-medium mb-1">
                  Monday - Saturday: 09:30 AM to 06:30 PM
                </p>
                <p className="text-xs text-brand-steelblue/60 font-bold uppercase tracking-wider">
                  Closed on Sundays and Public Holidays
                </p>
              </div>
            </div>

            {/* WhatsApp Link Card */}
            <a
              href={`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent('Hi Aarushi Infotech, I have an inquiry regarding Tally/Software Solutions.')}`}
              target="_blank"
              rel="noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white p-8 rounded-3xl shadow-md hover:shadow-lg transition-all duration-300 flex items-start gap-4 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-lg text-white mb-1">Connect on WhatsApp</h3>
                <p className="text-sm text-white/80 leading-relaxed font-medium">
                  Chat directly with our solutions architect for quick support or quotation questions.
                </p>
              </div>
            </a>

          </div>

          {/* Form section removed as per client request */}

        </div>

        <div className="flex justify-center">
          <LocationButton variant="primary" label="Open in Google Maps" showAddress />
        </div>

      </div>
    </div>
  );
}
