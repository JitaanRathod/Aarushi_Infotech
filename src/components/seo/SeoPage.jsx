import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import LocalPageHero from './LocalPageHero';
import ServicesList from './ServicesList';
import WhyChooseLocal from './WhyChooseLocal';
import LocationButton from '../LocationButton';
import LocalCTA from './LocalCTA';
import { SITE } from '../../config/siteConfig';

function buildLocalBusinessSchema(city, serviceName, pathname) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE.name,
    description: `${serviceName} by ${SITE.name} serving ${city} and nearby areas.`,
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Rustomjee Evershine Global City, J39-503',
      addressLocality: 'Virar West',
      addressRegion: 'Maharashtra',
      postalCode: '401303',
      addressCountry: 'IN',
    },
    areaServed: [
      { '@type': 'City', name: city },
      { '@type': 'City', name: 'Virar' },
      { '@type': 'City', name: 'Vasai' },
      { '@type': 'City', name: 'Mumbai' },
    ],
    url: `https://aarushiinfotech.in${pathname}`,
  };
}

function buildFaqSchema(faqs) {
  return {
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
}

export default function SeoPage({
  metaTitle,
  metaDescription,
  h1,
  displayH1,
  displaySubtitle,
  subtitle,
  city,
  serviceName,
  servicesTitle,
  servicesDescription,
  displayServicesDescription,
  services,
  whyChoosePoints,
  faqs,
}) {
  const { pathname } = useLocation();
  const canonicalUrl = `https://aarushiinfotech.in${pathname}`;
  const localBusinessSchema = buildLocalBusinessSchema(city, serviceName, pathname);
  const faqSchema = buildFaqSchema(faqs);

  return (
    <main>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
        <meta property="og:title" content={metaTitle} />
        <meta property="og:description" content={metaDescription} />
        <link rel="canonical" href={canonicalUrl} />
        <meta name="robots" content="index, follow" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        {/* SEO-only heading for crawlers; visible hero uses cleaner copy */}
        <meta name="seo-h1" content={h1} />
      </Helmet>

      <LocalPageHero
        title={displayH1 || h1}
        subtitle={displaySubtitle || subtitle}
      />
      <ServicesList
        title={servicesTitle}
        description={displayServicesDescription || servicesDescription}
        services={services}
      />
      <WhyChooseLocal points={whyChoosePoints} />
      <section className="py-12 px-6 md:px-12 bg-slate-50">
        <div className="max-w-4xl mx-auto flex justify-center">
          <LocationButton variant="primary" label="Location" showAddress />
        </div>
      </section>
      <LocalCTA />
    </main>
  );
}

