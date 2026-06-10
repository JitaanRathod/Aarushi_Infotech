import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function useLenis() {
  useEffect(() => {
    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.1,
      touchMultiplier: 1.5,
      infinite: false,
    });

    // Update ScrollTrigger on Lenis scroll
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    // Add Lenis to the GSAP ticker
    const gsapTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(gsapTicker);

    // Disable lag smoothing to align Lenis and GSAP animations perfectly
    gsap.ticker.lagSmoothing(0);

    window.lenis = lenis;

    return () => {
      lenis.destroy();
      gsap.ticker.remove(gsapTicker);
      window.lenis = null;
    };
  }, []);
}
