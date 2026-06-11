import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/crm-software-vasai'];

export default function CRMSoftwareVasai() {
  return <SeoPage {...config} />;
}

