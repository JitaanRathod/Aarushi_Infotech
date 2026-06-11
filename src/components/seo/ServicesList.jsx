import { CheckCircle2 } from 'lucide-react';

export default function ServicesList({ title, description, services }) {
  return (
    <section className="py-16 px-6 md:px-12 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-brand-navy mb-4 font-heading">
          {title}
        </h2>
        {description && (
          <p className="text-brand-steelblue/80 font-medium leading-relaxed mb-8">
            {description}
          </p>
        )}
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {services.map((service) => (
            <li
              key={service}
              className="flex items-start gap-3 p-4 rounded-2xl border border-slate-100 bg-slate-50"
            >
              <CheckCircle2 className="w-5 h-5 text-brand-mint flex-shrink-0 mt-0.5" />
              <span className="text-brand-navy font-medium text-sm">{service}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

