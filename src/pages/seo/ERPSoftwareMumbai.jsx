import React from 'react';
import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/erp-software-company-mumbai'];

export default function ERPSoftwareMumbai() {
  return <SeoPage {...config} />;
}
