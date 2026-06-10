import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MessageSquare, Globe, Users, Briefcase, Cpu, ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Reveal header
    gsap.fromTo(
      headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    // Stagger reveal cards
    gsap.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardsRef.current[0],
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      }
    );
  }, []);

  const services = [
    {
      title: 'Tally Prime',
      description: 'End-to-end implementation, hands-on user training, and dedicated troubleshooting support for Tally Prime accounting software.',
      icon: BookOpen,
      iconColor: 'text-indigo-600 bg-indigo-50',
      tag: 'Accounting',
      link: '/services#tally-prime',
    },
    {
      title: 'WhatsApp Integration',
      description: 'Automate customer communications by sending automated outstanding alerts, invoices, and ledger details directly from Tally to WhatsApp.',
      icon: MessageSquare,
      iconColor: 'text-green-600 bg-green-50',
      tag: 'Automation',
      link: '/services#whatsapp-tally',
    },
    {
      title: 'Website Development',
      description: 'Custom-tailored, responsive, and search-optimized websites designed to establish your digital brand presence and drive growth.',
      icon: Globe,
      iconColor: 'text-blue-600 bg-blue-50',
      tag: 'Web Tech',
      link: '/services#website-development',
    },
    {
      title: 'CRM Solutions',
      description: 'Intelligent Customer Relationship Management systems built to organize, automate, and analyze sales workflows and support desks.',
      icon: Users,
      iconColor: 'text-amber-600 bg-amber-50',
      tag: 'Workflows',
      link: '/services#crm',
    },
    {
      title: 'ERP Solutions',
      description: 'Comprehensive, robust enterprise resource planning applications to synchronize operations, inventory, and finances in real-time.',
      icon: Briefcase,
      iconColor: 'text-rose-600 bg-rose-50',
      tag: 'Enterprise',
      link: '/services#erp',
    },
    {
      title: 'Tally Customization',
      description: 'Custom TDL/TCP reports, bespoke dashboards, data pipelines, and security modules designed to align Tally perfectly with your workflows.',
      icon: Cpu,
      iconColor: 'text-teal-600 bg-teal-50',
      tag: 'TDL Dev',
      link: '/services#tally-customization',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-slate-100 relative overflow-hidden"
    >
      {/* Decorative vector grid elements */}
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-mint/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-amber font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            OUR CORE EXPERTISE
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 font-heading">
            Tailored IT & Business Solutions to Propel Your Business Forward
          </h2>
          <p className="text-base md:text-lg text-brand-steelblue/80 font-medium">
            From financial transparency to automated outreach, we build the digital infrastructure your company needs to operate efficiently and scale seamlessly.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className="group relative bg-white hover:bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-brand-cyan/60 hover:-translate-y-2 hover:shadow-xl hover:shadow-brand-mint/10 transition-all duration-500 flex flex-col justify-between"
              >
                <div>
                  {/* Category Tag */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-brand-steelblue px-2.5 py-1 rounded-full bg-slate-100/80">
                      {service.tag}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Icon and Title */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`w-12 h-12 rounded-2xl flex items-center justify-center ${service.iconColor} transition-transform duration-500 group-hover:scale-110`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-heading font-extrabold text-brand-navy group-hover:text-brand-navy transition-colors duration-300">
                      {service.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-sm md:text-base text-brand-steelblue/80 leading-relaxed font-medium mb-8">
                    {service.description}
                  </p>
                </div>

                {/* Read More Link */}
                <Link
                  to={service.link}
                  className="inline-flex items-center gap-2 font-heading font-bold text-xs uppercase tracking-widest text-brand-navy group-hover:text-brand-amber transition-colors duration-300 w-fit"
                >
                  Explore Service
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
