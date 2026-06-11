import SeoPage from '../../components/seo/SeoPage';
import { SEO_PAGE_MAP } from '../../data/seoPageData';

const config = SEO_PAGE_MAP['/tally-customization-virar'];

export default function TallyCustomizationVirar() {
  return <SeoPage {...config} />;
}

