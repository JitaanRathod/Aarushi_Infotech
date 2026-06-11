import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/tally-prime-services-nalasopara'];

export default function TallyNalasopara() {
  return <SeoPage {...config} />;
}

