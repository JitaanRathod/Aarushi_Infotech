import React from 'react';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Integrity First',
      description: 'We prioritize honest consulting. If a customization is unnecessary, we advise against it, protecting your tech investments.',
      icon: ShieldCheck,
      color: 'text-indigo-600 bg-indigo-50'
    },
    {
      title: 'Continuous Innovation',
      description: 'Business technology moves fast. We consistently upgrade our skills from Tally TDL revisions to headless web frameworks.',
      icon: Target,
      color: 'text-emerald-600 bg-emerald-50'
    },
    {
      title: 'Client-Centricity',
      description: 'A solution is only as good as its adoption. We support your staff with documentation, training sessions, and instant help.',
      icon: Heart,
      color: 'text-rose-600 bg-rose-50'
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-amber font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            WHO WE ARE
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6 font-heading">
            About Aarushi Infotech
          </h1>
          <p className="text-base md:text-lg text-brand-steelblue/80 font-medium">
            Based in Vapi, Gujarat, we are a committed team of software engineers, business consultants, and certified Tally implementation specialists.
          </p>
        </div>

        {/* Narrative & History */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy font-heading">
              Our Journey: Simplifying Business Accounting & IT Solutions
            </h2>
            <p className="text-sm md:text-base text-brand-steelblue/80 leading-relaxed font-medium">
              Aarushi Infotech was founded with a singular mission: to bridge the gap between complex enterprise technologies and daily business workflows. Since our inception, we have helped SMEs and large industrial manufacturers across Vapi, Silvassa, and wider Gujarat optimize their accounting structures.
            </p>
            <p className="text-sm md:text-base text-brand-steelblue/80 leading-relaxed font-medium">
              We started by custom-building reports and interfaces inside Tally. As the accounting landscape evolved into Tally Prime, we expanded into developing custom APIs, integrating secure WhatsApp messaging alerts, and building high-performance web systems that synchronize company resources globally.
            </p>
          </div>
          <div className="lg:col-span-6 bg-brand-navy text-white p-8 md:p-12 rounded-3xl relative overflow-hidden border border-white/10 shadow-lg">
            <div className="absolute right-[-10%] bottom-[-10%] w-48 h-48 rounded-full bg-brand-cyan/20 blur-[50px]" />
            <h3 className="text-xl font-heading font-extrabold text-brand-mint mb-4">Our Vision</h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-medium mb-8">
              To be the most trusted IT solutions partner in Western India, empowering enterprises with simple, reliable, and cutting-edge automation technologies that multiply their productivity.
            </p>
            <h3 className="text-xl font-heading font-extrabold text-brand-mint mb-4">Our Mission</h3>
            <p className="text-sm md:text-base text-white/80 leading-relaxed font-medium">
              To design, develop, and integrate custom software solutions that operate continuously, support business transparency, and remove repetitive administrative roadblocks.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="border-t border-slate-200 pt-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand-navy font-heading">
              Our Core Principles
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val) => {
              const Icon = val.icon;
              return (
                <div key={val.title} className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${val.color}`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-heading font-extrabold text-brand-navy mb-3">
                    {val.title}
                  </h3>
                  <p className="text-sm text-brand-steelblue/80 leading-relaxed font-medium">
                    {val.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
