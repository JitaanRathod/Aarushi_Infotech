import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQSection({ city, faqs }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>

      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-heading">
          Frequently Asked Questions — {city}
        </h2>
        <p className="text-brand-steelblue/80 font-medium mb-8">
          Common questions from businesses in {city} and nearby areas.
        </p>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="border border-slate-100 rounded-2xl overflow-hidden"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between gap-4 p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors"
              >
                <span className="font-heading font-bold text-brand-navy text-sm md:text-base">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`w-5 h-5 text-brand-steelblue flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="p-5 pt-0 bg-slate-50">
                  <p className="text-sm text-brand-steelblue/80 font-medium leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
