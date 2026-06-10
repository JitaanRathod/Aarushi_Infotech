import React from 'react';
import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/website-development-virar'];

export default function WebsiteDevelopmentVirar() {
  return <SeoPage {...config} />;
}
