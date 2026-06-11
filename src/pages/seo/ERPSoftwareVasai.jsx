import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/erp-software-company-vasai'];

export default function ERPSoftwareVasai() {
  return <SeoPage {...config} />;
}

