import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/crm-software-mumbai'];

export default function CRMSoftwareMumbai() {
  return <SeoPage {...config} />;
}

