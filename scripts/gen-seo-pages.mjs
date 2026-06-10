import fs from 'fs';
import path from 'path';

const pages = [
  ['TallyPrimeVasai', '/tally-prime-services-vasai'],
  ['TallyCustomizationVasai', '/tally-customization-vasai'],
  ['WhatsappTallyVasai', '/whatsapp-tally-integration-vasai'],
  ['WebsiteDevelopmentVasai', '/website-development-vasai'],
  ['ERPSoftwareVasai', '/erp-software-company-vasai'],
  ['CRMSoftwareVasai', '/crm-software-vasai'],
  ['TallyPrimeVirar', '/tally-prime-services-virar'],
  ['TallyCustomizationVirar', '/tally-customization-virar'],
  ['WhatsappTallyVirar', '/whatsapp-tally-integration-virar'],
  ['WebsiteDevelopmentVirar', '/website-development-virar'],
  ['ERPSoftwareVirar', '/erp-software-company-virar'],
  ['CRMSoftwareVirar', '/crm-software-virar'],
  ['TallyPrimeMumbai', '/tally-prime-services-mumbai'],
  ['TallyCustomizationMumbai', '/tally-customization-mumbai'],
  ['WhatsappTallyMumbai', '/whatsapp-tally-integration-mumbai'],
  ['WebsiteDevelopmentMumbai', '/website-development-mumbai'],
  ['ERPSoftwareMumbai', '/erp-software-company-mumbai'],
  ['CRMSoftwareMumbai', '/crm-software-mumbai'],
  ['TallyNalasopara', '/tally-prime-services-nalasopara'],
  ['TallyBhayandar', '/tally-prime-services-bhayandar'],
  ['TallyMiraRoad', '/tally-prime-services-mira-road'],
  ['WebsiteDevThane', '/website-development-thane'],
];

const dir = 'src/pages/seo';

pages.forEach(([name, slug]) => {
  const content = [
    "import React from 'react';",
    "import SeoPage from '../../components/seo/SeoPage';",
    "import { SEO_PAGE_MAP } from '../../data/seoPageData';",
    '',
    `const config = SEO_PAGE_MAP['${slug}'];`,
    '',
    `export default function ${name}() {`,
    '  return <SeoPage {...config} />;',
    '}',
    '',
  ].join('\n');

  fs.writeFileSync(path.join(dir, `${name}.jsx`), content);
});

console.log(`Created ${pages.length} SEO pages`);
