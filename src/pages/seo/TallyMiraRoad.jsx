import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/tally-prime-services-mira-road'];

export default function TallyMiraRoad() {
  return <SeoPage {...config} />;
}

