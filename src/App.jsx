import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import useLenis from './hooks/useLenis';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Cursor from './components/Cursor';

import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';

import {
  TallyPrimeVasai,
  TallyCustomizationVasai,
  WhatsappTallyVasai,
  WebsiteDevelopmentVasai,
  ERPSoftwareVasai,
  CRMSoftwareVasai,
  TallyPrimeVirar,
  TallyCustomizationVirar,
  WhatsappTallyVirar,
  WebsiteDevelopmentVirar,
  ERPSoftwareVirar,
  CRMSoftwareVirar,
  TallyPrimeMumbai,
  TallyCustomizationMumbai,
  WhatsappTallyMumbai,
  WebsiteDevelopmentMumbai,
  ERPSoftwareMumbai,
  CRMSoftwareMumbai,
  TallyNalasopara,
  TallyBhayandar,
  TallyMiraRoad,
  WebsiteDevThane,
} from './pages/seo';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const scrollToHash = () => {
      if (!hash) return false;
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        if (window.lenis) {
          window.lenis.scrollTo(element, { immediate: true });
        } else {
          element.scrollIntoView({ behavior: 'auto' });
        }
        return true;
      }
      return false;
    };

    if (!scrollToHash()) {
      if (window.lenis) {
        window.lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo(0, 0);
      }
    }
  }, [pathname, hash]);

  return null;
}

export default function App() {
  useLenis();

  return (
    <Router basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Cursor />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />

        {/* SEO Pages — Vasai */}
        <Route path="/tally-prime-services-vasai" element={<TallyPrimeVasai />} />
        <Route path="/tally-customization-vasai" element={<TallyCustomizationVasai />} />
        <Route path="/whatsapp-tally-integration-vasai" element={<WhatsappTallyVasai />} />
        <Route path="/website-development-vasai" element={<WebsiteDevelopmentVasai />} />
        <Route path="/erp-software-company-vasai" element={<ERPSoftwareVasai />} />
        <Route path="/crm-software-vasai" element={<CRMSoftwareVasai />} />

        {/* SEO Pages — Virar */}
        <Route path="/tally-prime-services-virar" element={<TallyPrimeVirar />} />
        <Route path="/tally-customization-virar" element={<TallyCustomizationVirar />} />
        <Route path="/whatsapp-tally-integration-virar" element={<WhatsappTallyVirar />} />
        <Route path="/website-development-virar" element={<WebsiteDevelopmentVirar />} />
        <Route path="/erp-software-company-virar" element={<ERPSoftwareVirar />} />
        <Route path="/crm-software-virar" element={<CRMSoftwareVirar />} />

        {/* SEO Pages — Mumbai */}
        <Route path="/tally-prime-services-mumbai" element={<TallyPrimeMumbai />} />
        <Route path="/tally-customization-mumbai" element={<TallyCustomizationMumbai />} />
        <Route path="/whatsapp-tally-integration-mumbai" element={<WhatsappTallyMumbai />} />
        <Route path="/website-development-mumbai" element={<WebsiteDevelopmentMumbai />} />
        <Route path="/erp-software-company-mumbai" element={<ERPSoftwareMumbai />} />
        <Route path="/crm-software-mumbai" element={<CRMSoftwareMumbai />} />

        {/* SEO Pages — Nearby Areas */}
        <Route path="/tally-prime-services-nalasopara" element={<TallyNalasopara />} />
        <Route path="/tally-prime-services-bhayandar" element={<TallyBhayandar />} />
        <Route path="/tally-prime-services-mira-road" element={<TallyMiraRoad />} />
        <Route path="/website-development-thane" element={<WebsiteDevThane />} />
      </Routes>

      <Footer />
    </Router>
  );
}
