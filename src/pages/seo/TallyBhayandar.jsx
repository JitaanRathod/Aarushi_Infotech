import React from 'react';
import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/tally-prime-services-bhayandar'];

export default function TallyBhayandar() {
  return <SeoPage {...config} />;
}
