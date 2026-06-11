import { Award, Users, MapPin, Clock } from 'lucide-react';

const icons = [Award, Users, MapPin, Clock];

export default function WhyChooseLocal({ points }) {
  return (
    <section className="py-16 px-6 md:px-12 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-heading">
          Why Businesses Choose Us
        </h2>
        <p className="text-brand-steelblue/80 font-medium leading-relaxed mb-10">
          Local businesses trust Aarushi Infotech for reliable software solutions,
          on-site support, and long-term partnership — not just one-time installations.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {points.map((point, index) => {
            const Icon = icons[index % icons.length];
            return (
              <div
                key={point.title}
                className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-navy/5 flex items-center justify-center text-brand-navy mb-4">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-heading font-bold text-brand-navy mb-2">{point.title}</h3>
                <p className="text-sm text-brand-steelblue/80 font-medium leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

