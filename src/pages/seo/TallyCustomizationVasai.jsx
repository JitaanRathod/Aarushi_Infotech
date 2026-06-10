import React from 'react';
import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/tally-customization-vasai'];

export default function TallyCustomizationVasai() {
  return <SeoPage {...config} />;
}
