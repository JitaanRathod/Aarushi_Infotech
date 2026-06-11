import { MapPin, ExternalLink } from 'lucide-react';
import { SITE } from '../config/siteConfig';

export default function LocationButton({
  label = 'Location',
  className = '',
  variant = 'primary',
  showAddress = false,
}) {
  const baseStyles =
    'inline-flex items-center justify-center gap-2 font-heading font-extrabold text-sm uppercase tracking-widest rounded-full transition-all duration-300';

  const variants = {
    primary:
      'bg-brand-navy text-white hover:text-brand-mint py-4 px-8 shadow-lg shadow-brand-navy/15 hover:shadow-brand-navy/25 hover:-translate-y-0.5',
    outline:
      'border border-brand-navy/20 text-brand-navy hover:border-brand-mint hover:text-brand-steelblue py-3 px-6',
    footer:
      'border border-white/30 text-white hover:border-brand-mint hover:text-brand-mint py-3 px-5 text-xs',
  };

  return (
    <div className={showAddress ? 'flex flex-col items-center gap-3' : undefined}>
      <a
        href={SITE.googleMapsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}
      >
        <MapPin className="w-4 h-4" />
        {label}
        <ExternalLink className="w-3.5 h-3.5 opacity-70" />
      </a>
      {showAddress && (
        <p className="text-center text-sm text-brand-steelblue/70 font-medium max-w-md">
          {SITE.address}
        </p>
      )}
    </div>
  );
}

