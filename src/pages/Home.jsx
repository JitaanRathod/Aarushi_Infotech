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
  description:
    'Tally Prime, ERP, CRM, WhatsApp integration and website development for businesses in Vasai, Virar, Mumbai and Thane.',
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
  areaServed: ['Vasai', 'Virar', 'Nalasopara', 'Bhayandar', 'Mumbai', 'Thane'],
  url: 'https://aarushiinfotech.in/',
};

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>Aarushi Infotech | IT Solutions in Vasai Virar Mumbai</title>
        <meta
          name="description"
          content="Aarushi Infotech delivers Tally Prime, ERP, CRM, WhatsApp integration & website development in Vasai, Virar, Mumbai & Thane. Trusted local IT partner with on-site support."
        />
        <meta
          name="keywords"
          content="Tally Prime Vasai, Tally Virar, ERP Mumbai, CRM Vasai, Website Development Virar, WhatsApp Tally integration, Tally dealer Vasai Virar, IT solutions Mumbai"
        />
        <meta property="og:title" content="Aarushi Infotech | IT Solutions in Vasai Virar Mumbai" />
        <meta
          property="og:description"
          content="Tally Prime, ERP, CRM & web development for businesses across Vasai-Virar, Mumbai & Thane. Call Aarushi Infotech today."
        />
        <link rel="canonical" href="https://aarushiinfotech.in/" />
        <script type="application/ld+json">{JSON.stringify(localBusinessSchema)}</script>
      </Helmet>
      <Hero />
      <Services />
      <Stats />
      <WhyUs />
    </main>
  );
}
