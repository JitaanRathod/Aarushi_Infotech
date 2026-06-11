import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/website-development-thane'];

export default function WebsiteDevThane() {
  return <SeoPage {...config} />;
}

