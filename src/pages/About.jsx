import React from 'react';
import { Target, Eye, ShieldCheck, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      title: 'Integrity First',
      description:
        'We believe in honest technology consulting. Our recommendations are based on what genuinely benefits your business, not what generates the largest invoice.',
      icon: ShieldCheck,
      color: 'text-indigo-600 bg-indigo-50',
    },
    {
      title: 'Continuous Improvement',
      description:
        'Technology evolves rapidly. We continuously update our knowledge across Tally Prime, ERP systems, CRM platforms, automation tools and modern web technologies.',
      icon: Target,
      color: 'text-emerald-600 bg-emerald-50',
    },
    {
      title: 'Client Success',
      description:
        'Every solution is designed around usability, adoption and long-term business value. We focus on outcomes rather than simply delivering software.',
      icon: Heart,
      color: 'text-rose-600 bg-rose-50',
    },
  ];

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="text-brand-amber font-heading font-extrabold text-xs uppercase tracking-widest mb-4">
            ABOUT AARUSHI INFOTECH
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-brand-navy mb-6 font-heading">
            Helping Businesses Simplify Technology & Operations
          </h1>

          <p className="text-base md:text-lg text-brand-steelblue/80 font-medium">
            Aarushi Infotech provides Tally Prime solutions, ERP systems, CRM
            implementation, WhatsApp automation and website development services
            for businesses across Virar, Vasai, Mumbai, Thane, Vapi and
            surrounding regions.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
          <div className="lg:col-span-6 flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-extrabold text-brand-navy font-heading">
              Building Practical Technology Solutions for Growing Businesses
            </h2>

            <p className="text-sm md:text-base text-brand-steelblue/80 leading-relaxed font-medium">
              Aarushi Infotech was established with a simple goal: helping
              businesses leverage technology without unnecessary complexity.
              Many organizations struggle with disconnected systems, manual
              processes and inefficient workflows that slow down growth.
            </p>

            <p className="text-sm md:text-base text-brand-steelblue/80 leading-relaxed font-medium">
              Over the years, we have worked with businesses across multiple
              industries, providing Tally implementation, custom reporting,
              automation solutions, CRM systems, ERP deployment and website
              development services tailored to their specific requirements.
            </p>

            <p className="text-sm md:text-base text-brand-steelblue/80 leading-relaxed font-medium">
              Our approach combines technical expertise with practical business
              understanding. Instead of offering generic software solutions, we
              focus on creating systems that improve efficiency, reduce manual
              effort and support long-term growth.
            </p>
          </div>

          {/* Vision & Mission */}
          <div className="lg:col-span-6 bg-brand-navy text-white p-8 md:p-12 rounded-3xl relative overflow-hidden border border-white/10 shadow-lg">
            <div className="absolute right-[-10%] bottom-[-10%] w-48 h-48 rounded-full bg-brand-cyan/20 blur-[50px]" />

            <div className="flex items-center gap-3 mb-4">
              <Eye className="w-6 h-6 text-brand-mint" />
              <h3 className="text-xl font-heading font-extrabold text-brand-mint">
                Our Vision
              </h3>
            </div>

            <p className="text-sm md:text-base text-white/80 leading-relaxed font-medium mb-8">
              To become a trusted technology partner for businesses by
              delivering reliable, scalable and practical digital solutions
              that improve productivity and operational efficiency.
            </p>

            <div className="flex items-center gap-3 mb-4">
              <Target className="w-6 h-6 text-brand-mint" />
              <h3 className="text-xl font-heading font-extrabold text-brand-mint">
                Our Mission
              </h3>
            </div>

            <p className="text-sm md:text-base text-white/80 leading-relaxed font-medium">
              To help organizations streamline operations through accounting
              software, automation, business applications and custom technology
              solutions while providing dependable support and long-term value.
            </p>
          </div>
        </div>

        {/* Core Values */}
        <div className="border-t border-slate-200 pt-20">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-4xl font-extrabold text-brand-navy font-heading">
              Our Core Values
            </h2>

            <p className="text-brand-steelblue/80 mt-4 max-w-2xl mx-auto">
              These principles guide every project, consultation and client
              relationship we build.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((val) => {
              const Icon = val.icon;

              return (
                <div
                  key={val.title}
                  className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm flex flex-col items-center text-center"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${val.color}`}
                  >
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