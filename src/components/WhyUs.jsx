import { useEffect, useRef } from 'react';
import { Clock, Award, Coins, LifeBuoy } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      leftColRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: leftColRef.current,
          start: 'top 85%',
          toggleActions: 'play none none none',
        },
      }
    );

    gsap.fromTo(
      cardsRef.current,
      { y: 50, opacity: 0 },
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

  const usps = [
    {
      title: 'Reliable Project Delivery',
      description:
        'Well-defined workflows, structured planning and consistent communication ensure projects are delivered on time and within scope.',
      icon: Clock,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Experienced Specialists',
      description:
        'Our team combines expertise in Tally Prime, ERP implementation, CRM systems, business automation and custom software development.',
      icon: Award,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Cost-Effective Solutions',
      description:
        'Practical technology recommendations focused on maximizing efficiency, reducing manual work and generating measurable business value.',
      icon: Coins,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      title: 'Dedicated Support',
      description:
        'From implementation to post-deployment assistance, we remain available to help your team achieve long-term success.',
      icon: LifeBuoy,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-slate-50/50 relative overflow-hidden animate-fade-up"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">

        {/* Left Column */}
        <div ref={leftColRef} className="lg:col-span-5">
          <div className="text-brand-amber font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            WHY CHOOSE AARUSHI INFOTECH
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-6 font-heading">
            Technology Solutions Built Around Business Growth
          </h2>

          <p className="text-base md:text-lg text-brand-steelblue/80 font-medium mb-8 leading-relaxed">
            We help businesses across Virar, Vasai, Mumbai, Thane, Vapi and
            Silvassa simplify operations through practical technology
            solutions. Whether you need Tally Prime support, ERP systems,
            CRM implementation, WhatsApp automation or website development,
            our focus remains on delivering measurable business outcomes.
          </p>

          <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-navy font-bold text-lg flex-shrink-0">
              ✓
            </div>

            <div>
              <h4 className="text-base font-heading font-bold text-brand-navy mb-1">
                Local Support. Professional Standards.
              </h4>

              <p className="text-sm text-brand-steelblue/80 font-medium">
                Based in Virar and serving businesses across Maharashtra and
                Gujarat, we combine personalized support with enterprise-level
                development practices and modern technology expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Right Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {usps.map((usp, index) => {
            const Icon = usp.icon;

            return (
              <div
                key={usp.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-brand-mint/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div
                  className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${usp.color} transition-transform duration-300 group-hover:scale-105`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-heading font-extrabold text-brand-navy mb-3">
                  {usp.title}
                </h3>

                <p className="text-sm text-brand-steelblue/80 leading-relaxed font-medium">
                  {usp.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
