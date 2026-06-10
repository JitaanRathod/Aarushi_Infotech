import React from 'react';
import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/erp-software-company-virar'];

export default function ERPSoftwareVirar() {
  return <SeoPage {...config} />;
}
