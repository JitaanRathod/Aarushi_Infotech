import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Stats from '../components/Stats';
import WhyUs from '../components/WhyUs';
import { SITE } from '../config/siteConfig';

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: SITE.name,
  image: 'https://aarushiinfotech.in/logo.png',
  url: 'https://aarushiinfotech.in/',
  telephone: SITE.phone,
  email: SITE.email,
  description:
    'Aarushi Infotech provides Tally Prime, ERP, CRM, WhatsApp Integration and Website Development services across Virar, Vasai, Mumbai and Thane.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rustomjee Evershine Global City, J39-503',
    addressLocality: 'Virar West',
    addressRegion: 'Maharashtra',
    postalCode: '401303',
    addressCountry: 'IN',
  },
  areaServed: [
    'Virar',
    'Vasai',
    'Nalasopara',
    'Bhayandar',
    'Mira Road',
    'Mumbai',
    'Thane',
  ],
};

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Aarushi Infotech',
  provider: {
    '@type': 'Organization',
    name: 'Aarushi Infotech',
  },
  serviceType: [
    'Tally Prime Solutions',
    'Tally Customization',
    'ERP Development',
    'CRM Solutions',
    'Website Development',
    'WhatsApp Business Integration',
  ],
  areaServed: [
    'Virar',
    'Vasai',
    'Mumbai',
    'Thane',
  ],
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Do you provide Tally Prime installation and support?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Aarushi Infotech provides complete Tally Prime installation, implementation, training, migration and ongoing support.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can Tally be integrated with WhatsApp?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We integrate Tally with WhatsApp to automate invoices, ledger reports, payment reminders and customer communications.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you build business websites?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We design responsive SEO-friendly websites and custom web applications for businesses across Maharashtra and Gujarat.',
      },
    },
    {
      '@type': 'Question',
      name: 'Which locations do you serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We serve Virar, Vasai, Nalasopara, Bhayandar, Mira Road, Mumbai, Thane and surrounding regions.',
      },
    },
  ],
};

export default function Home() {
  return (
    <main>
      <Helmet>

        <title>
          Aarushi Infotech | Tally Prime, ERP, CRM & Website Development in Virar
        </title>

        <meta
          name="description"
          content="Aarushi Infotech provides Tally Prime solutions, Tally customization, ERP software, CRM systems, WhatsApp integrations and website development services in Virar, Vasai, Mumbai and Thane."
        />

        <meta
          name="keywords"
          content="
          Tally Prime Virar,
          Tally Support Virar,
          Tally Customization Vasai,
          ERP Software Mumbai,
          CRM Solutions Virar,
          Website Development Virar,
          Website Developer Vasai,
          WhatsApp Integration Tally,
          Tally Partner Virar,
          Tally Solutions Mumbai,
          ERP Development Maharashtra,
          CRM Software Mumbai
          "
        />

        <meta
          property="og:title"
          content="Aarushi Infotech | Business Software & Tally Experts"
        />

        <meta
          property="og:description"
          content="Tally Prime, ERP, CRM, WhatsApp Automation and Website Development services for businesses in Virar, Vasai, Mumbai and Thane."
        />

        <meta
          property="og:type"
          content="website"
        />

        <meta
          property="og:url"
          content="https://aarushiinfotech.in/"
        />

        <meta
          property="og:image"
          content="https://aarushiinfotech.in/logo.png"
        />

        <meta
          name="robots"
          content="index, follow"
        />

        <meta
          name="author"
          content="Aarushi Infotech"
        />

        <link
          rel="canonical"
          href="https://aarushiinfotech.in/"
        />

        <script type="application/ld+json">
          {JSON.stringify(localBusinessSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(serviceSchema)}
        </script>

        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>

      </Helmet>

      <Hero />
      <Services />
      <Stats />
      <WhyUs />
    </main>
  );
}