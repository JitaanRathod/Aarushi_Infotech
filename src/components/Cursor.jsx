import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Cursor() {
  const cursorRef = useRef(null);
  const cursorFollowerRef = useRef(null);

  useEffect(() => {
    // Only enable custom cursor on desktop devices with pointer
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (isTouchDevice) return;

    const cursor = cursorRef.current;
    const follower = cursorFollowerRef.current;

    if (!cursor || !follower) return;

    // Set initial position
    gsap.set([cursor, follower], { xPercent: -50, yPercent: -50 });

    const onMouseMove = (e) => {
      const { clientX, clientY } = e;
      
      // Fast follow for the solid center dot
      gsap.to(cursor, {
        x: clientX,
        y: clientY,
        duration: 0.1,
        ease: 'power2.out'
      });

      // Smooth delayed follow for the outer ring
      gsap.to(follower, {
        x: clientX,
        y: clientY,
        duration: 0.4,
        ease: 'power3.out'
      });
    };

    const onMouseEnterLink = () => {
      gsap.to(cursor, {
        scale: 0.5,
        backgroundColor: '#093c5d',
        duration: 0.3
      });
      gsap.to(follower, {
        scale: 1.8,
        borderColor: '#5df8d8',
        backgroundColor: 'rgba(93, 248, 216, 0.15)',
        duration: 0.3
      });
    };

    const onMouseLeaveLink = () => {
      gsap.to(cursor, {
        scale: 1,
        backgroundColor: '#5df8d8',
        duration: 0.3
      });
      gsap.to(follower, {
        scale: 1,
        borderColor: '#6fd1d7',
        backgroundColor: 'transparent',
        duration: 0.3
      });
    };

    window.addEventListener('mousemove', onMouseMove);

    // Track active links and buttons
    const addListeners = () => {
      const elements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .interactive-element');
      elements.forEach(el => {
        el.addEventListener('mouseenter', onMouseEnterLink);
        el.addEventListener('mouseleave', onMouseLeaveLink);
      });
    };

    // Attach listeners initially
    addListeners();

    // Re-attach listeners when DOM changes (e.g. routing)
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      const elements = document.querySelectorAll('a, button, input, textarea, select, [role="button"], .interactive-element');
      elements.forEach(el => {
        el.removeEventListener('mouseenter', onMouseEnterLink);
        el.removeEventListener('mouseleave', onMouseLeaveLink);
      });
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-3 h-3 bg-brand-mint rounded-full pointer-events-none z-[9999] hidden md:block mix-blend-difference"
      />
      <div
        ref={cursorFollowerRef}
        className="fixed top-0 left-0 w-8 h-8 border border-brand-cyan rounded-full pointer-events-none z-[9998] hidden md:block"
      />
    </>
  );
}
