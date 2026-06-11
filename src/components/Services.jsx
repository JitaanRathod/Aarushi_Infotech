import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  BookOpen,
  MessageSquare,
  Globe,
  Users,
  Briefcase,
  Cpu,
  ArrowRight
} from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const sectionRef = useRef(null);
  const headerRef = useRef(null);
  const cardsRef = useRef([]);

  const services = [
    {
      title: 'Tally Prime ERP',
      tag: 'Accounting & Business Automation',
      description:
        'Install and optimize Tally Prime for accounting, inventory, multi-user access, and automated reports.',
      icon: BookOpen,
      iconColor: 'text-indigo-600 bg-indigo-50 border-indigo-100',
      link: '/services#tally-prime',
    },
    {
      title: 'WhatsApp Automation',
      tag: 'Instant Business Communication',
      description:
        'Connect Tally, customers, and teams with WhatsApp notifications for invoices, reminders, and updates.',
      icon: MessageSquare,
      iconColor: 'text-emerald-600 bg-emerald-50 border-emerald-100',
      link: '/services#whatsapp-tally',
    },
    {
      title: 'Website Development',
      tag: 'Brand Growth Online',
      description:
        'Build responsive, SEO-friendly websites that support lead generation, conversions, and business credibility.',
      icon: Globe,
      iconColor: 'text-blue-600 bg-blue-50 border-blue-100',
      link: '/services#website-development',
    },
    {
      title: 'CRM Solutions',
      tag: 'Customer Relationship Management',
      description:
        'Track leads, automate follow-ups, and manage sales pipelines with custom CRM workflows.',
      icon: Users,
      iconColor: 'text-amber-600 bg-amber-50 border-amber-100',
      link: '/services#crm',
    },
    {
      title: 'ERP Development',
      tag: 'Integrated Business Systems',
      description:
        'Connect accounting, inventory, purchasing, and operations with tailored ERP software for growing businesses.',
      icon: Briefcase,
      iconColor: 'text-rose-600 bg-rose-50 border-rose-100',
      link: '/services#erp',
    },
    {
      title: 'Tally Customization',
      tag: 'Customized TDL & Reports',
      description:
        'Extend Tally with custom fields, invoice formats, user roles, and report automation to suit your workflow.',
      icon: Cpu,
      iconColor: 'text-teal-600 bg-teal-50 border-teal-100',
      link: '/services#tally-customization',
    },
  ];

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headerRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

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

  
  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-slate-100 relative overflow-hidden animate-fade-up"
    >
      <div className="absolute right-0 top-0 w-96 h-96 bg-brand-cyan/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-0 w-96 h-96 bg-brand-mint/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-amber font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            OUR SERVICES
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy mb-6 font-heading">
            Complete Business Technology Solutions Under One Roof
          </h2>

          <p className="text-base md:text-lg text-brand-steelblue/80 font-medium">
            Aarushi Infotech helps businesses across Virar, Vasai, Mumbai,
            Thane, Vapi and Silvassa modernize operations through Tally Prime,
            ERP systems, CRM solutions, WhatsApp automation and professional
            website development.
          </p>
        </div>

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
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[10px] font-heading font-extrabold uppercase tracking-widest text-brand-steelblue px-2.5 py-1 rounded-full bg-slate-100/80">
                      {service.tag}
                    </span>

                    <div className="w-1.5 h-1.5 rounded-full bg-brand-mint opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  <div className="flex items-center gap-4 mb-6">
                    <div
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center ${service.iconColor} transition-transform duration-500 group-hover:scale-110`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    <h3 className="text-xl font-heading font-extrabold text-brand-navy">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-sm md:text-base text-brand-steelblue/80 leading-relaxed font-medium mb-8">
                    {service.description}
                  </p>
                </div>

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

        <div className="text-center mt-16">
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 bg-brand-navy text-white px-8 py-4 rounded-full font-heading font-extrabold text-sm uppercase tracking-widest hover:text-brand-mint transition-all duration-300"
          >
            Discuss Your Project
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
