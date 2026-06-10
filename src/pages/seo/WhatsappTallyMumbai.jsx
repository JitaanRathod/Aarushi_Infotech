import React from 'react';
import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/whatsapp-tally-integration-mumbai'];

export default function WhatsappTallyMumbai() {
  return <SeoPage {...config} />;
}
