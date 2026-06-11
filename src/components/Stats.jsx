import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Stats() {
  const sectionRef = useRef(null);
  const countersRef = useRef([]);

  const statsData = [
    {
      value: 450,
      label: 'Projects Delivered',
      suffix: '+',
    },
    {
      value: 300,
      label: 'Satisfied Clients',
      suffix: '+',
    },
    {
      value: 20,
      label: 'Years Experience',
      suffix: '+',
    },
    {
      value: 25,
      label: 'Technology Solutions',
      suffix: '+',
    },
  ];

  useEffect(() => {
    countersRef.current.forEach((el, index) => {
      if (!el) return;

      const target = statsData[index].value;

      const counterObj = {
        val: 0,
      };

      gsap.fromTo(
        counterObj,
        { val: 0 },
        {
          val: target,
          duration: 2.5,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: () => {
            el.innerText = Math.floor(counterObj.val).toLocaleString();
          },
        }
      );
    });

    gsap.fromTo(
      '.stats-label',
      {
        opacity: 0,
        y: 15,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        },
      }
    );
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-20 px-6 md:px-12 bg-brand-navy relative overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute top-[20%] left-[30%] w-72 h-72 rounded-full bg-brand-mint blur-[100px]" />
        <div className="absolute bottom-[20%] right-[30%] w-72 h-72 rounded-full bg-brand-cyan blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Heading */}
        <div className="text-center mb-14">
          <div className="text-brand-mint font-heading font-extrabold text-xs uppercase tracking-widest mb-3">
            Trusted By Businesses Across Western India
          </div>

          <h2 className="text-3xl md:text-4xl font-heading font-extrabold text-white mb-4">
            Results That Speak For Themselves
          </h2>

          <p className="text-white/70 max-w-3xl mx-auto font-medium">
            From Tally implementation and customization to ERP systems,
            WhatsApp automation and website development, we have helped
            businesses improve efficiency, reduce manual work and scale with
            confidence.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {statsData.map((stat, index) => (
            <div
              key={stat.label}
              className="flex flex-col items-center text-center p-6 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 hover:border-brand-cyan/30 hover:bg-white/10 transition-all duration-300"
            >
              <div className="flex items-baseline mb-2">
                <span
                  ref={(el) => (countersRef.current[index] = el)}
                  className="font-heading font-extrabold text-4xl md:text-5xl lg:text-6xl text-white select-none"
                >
                  0
                </span>

                <span className="font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl text-brand-mint select-none ml-1">
                  {stat.suffix}
                </span>
              </div>

              <span className="stats-label font-body font-bold text-xs md:text-sm text-white/70 uppercase tracking-widest mt-1">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}