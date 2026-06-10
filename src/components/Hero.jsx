import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Terminal, Layers, MessageSquare, Code } from 'lucide-react';
import { gsap } from 'gsap';
import logo from '../assets/logo.png';

export default function Hero() {
  const containerRef = useRef(null);
  const wordsRef = useRef([]);
  const subtextRef = useRef(null);
  const ctaContainerRef = useRef(null);
  const visualRef = useRef(null);

  useEffect(() => {
    // GSAP Word/Line reveal animation on load
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Animate headline words
    tl.to(wordsRef.current, {
      y: 0,
      duration: 1.2,
      stagger: 0.08,
    });

    // Animate subheadline
    tl.fromTo(
      subtextRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.0 },
      '-=0.8'
    );

    // Animate CTA buttons
    tl.fromTo(
      ctaContainerRef.current,
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      '-=0.7'
    );

    // Animate visual wrapper entrance
    tl.fromTo(
      visualRef.current,
      { scale: 0.85, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.2, ease: 'back.out(1.2)' },
      '-=1.0'
    );

    // Floating/parallax hover effect inside hero
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;
      const xPos = (clientX / window.innerWidth - 0.5) * 35;
      const yPos = (clientY / window.innerHeight - 0.5) * 35;

      gsap.to('.parallax-item', {
        x: xPos,
        y: yPos,
        duration: 1,
        ease: 'power2.out',
        stagger: 0.02
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Text content split into words for stagger reveal
  const titleText = "IT Solutions for Vasai, Virar & Mumbai Businesses";
  const words = titleText.split(" ");

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen pt-32 pb-20 px-6 md:px-12 flex items-center overflow-hidden bg-slate-200"
    >
      {/* Background Mesh/Texture */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-cyan/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-mint/20 blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        {/* Left Column: Headline and CTAs */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-navy/5 border border-brand-navy/10 text-brand-navy font-heading font-extrabold text-xs tracking-wider uppercase mb-6 w-fit">
            <span className="w-2 h-2 rounded-full bg-brand-mint animate-pulse" />
            Vasai · Virar · Mumbai's Trusted IT Partner
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-brand-navy leading-[1.1] mb-6 select-none font-heading">
            {words.map((word, index) => (
              <span
                key={index}
                className="inline-block overflow-hidden mr-3 pb-2 char-reveal-container"
              >
                <span
                  ref={(el) => (wordsRef.current[index] = el)}
                  className="char-reveal-item"
                >
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <p
            ref={subtextRef}
            className="text-lg md:text-xl text-brand-steelblue/80 font-medium max-w-2xl mb-8 leading-relaxed"
          >
            Serving businesses across Vasai-Virar, Mumbai & Thane. We customize Tally Prime, automate communications with WhatsApp integration, and build high-performance websites and ERP systems designed to scale your operations.
          </p>

          <div
            ref={ctaContainerRef}
            className="flex flex-wrap items-center gap-4"
          >
            <Link
              to="/contact"
              className="bg-brand-navy text-white hover:text-brand-mint font-heading font-extrabold text-sm uppercase tracking-widest py-4 px-8 rounded-full shadow-lg shadow-brand-navy/15 hover:shadow-brand-navy/25 hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-2 group"
            >
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>


          </div>
        </div>

        {/* Right Column: Floating Visual/Parallax Elements */}
        <div
          ref={visualRef}
          className="lg:col-span-5 flex justify-center items-center relative min-h-[400px] md:min-h-[500px]"
        >
          {/* Main central shield/sphere */}
          <div className="absolute w-72 h-72 md:w-80 md:h-80 rounded-full border border-brand-cyan/20 bg-white/40 backdrop-blur-md flex items-center justify-center shadow-xl z-10 transition-transform duration-500">
            <div className="w-[85%] h-[85%] rounded-full border border-brand-steelblue/10 bg-gradient-to-tr from-brand-navy/5 to-brand-cyan/10 flex items-center justify-center relative">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-brand-cyan/40 animate-spin-slow" />

              {/* Real Logo Image */}
              <div className="w-60 h-60 rounded-full overflow-hidden flex items-center justify-center shadow-2xl border-2 border-brand-amber/50 bg-transparent">
                <img src={logo} alt="Aarushi Infotech Logo" className="w-full h-full object-contain" />
              </div>
            </div>
          </div>

          {/* Floating Card 1: Tally integration */}
          <div className="parallax-item absolute top-[10%] left-[5%] bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-brand-cyan/20 shadow-lg flex items-center gap-3 z-20">
            <div className="w-10 h-10 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-brand-navy/60 font-extrabold uppercase tracking-wider">Accounting</p>
              <p className="text-sm font-bold text-brand-navy">Tally Prime ERP</p>
            </div>
          </div>

          {/* Floating Card 2: WhatsApp Automations */}
          <div className="parallax-item absolute bottom-[15%] left-[0%] bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-brand-cyan/20 shadow-lg flex items-center gap-3 z-20">
            <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-brand-navy/60 font-extrabold uppercase tracking-wider">Automations</p>
              <p className="text-sm font-bold text-brand-navy">WhatsApp API</p>
            </div>
          </div>

          {/* Floating Card 3: Custom Dev */}
          <div className="parallax-item absolute top-[20%] right-[0%] bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-brand-cyan/20 shadow-lg flex items-center gap-3 z-20">
            <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
              <Code className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-brand-navy/60 font-extrabold uppercase tracking-wider">Development</p>
              <p className="text-sm font-bold text-brand-navy">Custom Web Apps</p>
            </div>
          </div>

          {/* Floating Code terminal element */}
          <div className="parallax-item absolute bottom-[5%] right-[5%] bg-brand-navy text-white p-3 rounded-xl shadow-xl flex items-center gap-2 border border-brand-cyan/20 max-w-[200px] z-20">
            <Terminal className="w-4 h-4 text-brand-mint flex-shrink-0" />
            <span className="text-[10px] font-mono tracking-tight text-white/90">Aarushi.integrate()</span>
          </div>

          {/* Extra Background shapes */}
          <div className="absolute w-12 h-12 rounded-full border border-brand-amber/30 top-[40%] left-[20%] animate-pulse" />
          <div className="absolute w-8 h-8 bg-brand-cyan/20 rounded-full bottom-[40%] right-[20%] blur-sm" />
        </div>
      </div>
    </section>
  );
}
