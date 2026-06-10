import React, { useEffect, useRef } from 'react';
import { Clock, Award, Coins, LifeBuoy } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function WhyUs() {
  const sectionRef = useRef(null);
  const leftColRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    // Left column scroll entrance
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

    // Right column stagger cards
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
      title: 'On-Time Delivery',
      description: 'Structured agile workflows and robust milestone tracking that guarantee your software products launch on schedule.',
      icon: Clock,
      color: 'text-indigo-600 bg-indigo-50 border-indigo-100',
    },
    {
      title: 'Expert Team',
      description: 'Highly trained software architects and certified Tally developers with decades of collective business automation experience.',
      icon: Award,
      color: 'text-emerald-600 bg-emerald-50 border-emerald-100',
    },
    {
      title: 'Affordable Pricing',
      description: 'Flexible, competitive, and value-driven pricing structures optimized to offer top-tier tech solutions with maximum ROI.',
      icon: Coins,
      color: 'text-amber-600 bg-amber-50 border-amber-100',
    },
    {
      title: '24/7 Priority Support',
      description: 'Direct communication channels and service-level guarantees to provide instant, round-the-clock technical troubleshooting.',
      icon: LifeBuoy,
      color: 'text-rose-600 bg-rose-50 border-rose-100',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="py-24 px-6 md:px-12 bg-slate-50/50 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        
        {/* Left Column: Heading Content */}
        <div ref={leftColRef} className="lg:col-span-5">
          <div className="text-brand-amber font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            WHY PARTNER WITH US
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-brand-navy leading-tight mb-6 font-heading">
            Committed to Driving Enterprise Growth through Tech Excellence
          </h2>
          <p className="text-base md:text-lg text-brand-steelblue/80 font-medium mb-8 leading-relaxed">
            At Aarushi Infotech, we do not just write code or install systems. We consult, optimize, and support your daily digital tasks so you can focus entirely on expanding your core business in Gujarat and beyond.
          </p>

          <div className="p-6 rounded-3xl bg-white border border-slate-100 shadow-sm flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-cyan/10 flex items-center justify-center text-brand-navy font-bold text-lg flex-shrink-0">
              ✓
            </div>
            <div>
              <h4 className="text-base font-heading font-bold text-brand-navy mb-1">
                Local Presence, Global Standards
              </h4>
              <p className="text-sm text-brand-steelblue/80 font-medium">
                Headquartered in Vapi, Gujarat, we offer close-proximity support with enterprise-grade development systems.
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: USP Cards */}
        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {usps.map((usp, index) => {
            const Icon = usp.icon;
            return (
              <div
                key={usp.title}
                ref={(el) => (cardsRef.current[index] = el)}
                className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:border-brand-mint/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className={`w-12 h-12 rounded-2xl border flex items-center justify-center mb-6 ${usp.color} transition-transform duration-300 group-hover:scale-105`}>
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
