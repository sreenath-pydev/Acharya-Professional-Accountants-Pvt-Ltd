import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GTM_ID = import.meta.env.VITE_GTM_ID;

const AnalyticsTracker = () => {
  const location = useLocation();

  const isGtmValid = GTM_ID && GTM_ID !== 'GTM-NHQBRDLJ';

  // 1. Initialize dataLayer placeholder immediately on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Google Tag Manager Data Layer
    if (isGtmValid) {
      window.dataLayer = window.dataLayer || [];
    }
  }, [isGtmValid]);

  // 2. Dynamically load scripts on first user interaction or fallback timeout (Performance optimization)
  // GTM handles loading the Meta Pixel and Microsoft Clarity scripts.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!isGtmValid) return;

    let scriptsLoaded = false;

    const loadScripts = () => {
      if (scriptsLoaded) return;
      scriptsLoaded = true;

      // Remove listeners
      events.forEach(event => {
        window.removeEventListener(event, loadScripts);
      });

      // Avoid executing in prerendering/automated testing environments
      if (navigator.webdriver || window.__PRERENDER_INJECTED) {
        return;
      }

      // GTM script is loaded in index.html, and pageviews are triggered dynamically below.
    };

    const events = ['mousedown', 'mousemove', 'keydown', 'scroll', 'touchstart'];

    // Listen for user interaction
    events.forEach(event => {
      window.addEventListener(event, loadScripts, { passive: true });
    });

    // Fallback timer to load scripts after 4 seconds if no interaction occurs
    const timeoutId = setTimeout(loadScripts, 4000);

    return () => {
      events.forEach(event => {
        window.removeEventListener(event, loadScripts);
      });
      clearTimeout(timeoutId);
    };
  }, [isGtmValid]);

  // 3. Track pageviews on route changes (including initial load)
  // Both Meta Pixel and Microsoft Clarity are configured inside GTM and will fire
  // on GTM's virtual page_view event pushed to the dataLayer on route changes.
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (navigator.webdriver || window.__PRERENDER_INJECTED) return;

    const path = location.pathname + location.search;

    // Track GTM pageview
    if (isGtmValid && window.dataLayer) {
      window.dataLayer.push({
        event: 'page_view',
        page_path: path,
        page_title: document.title
      });
    }

    // Track GA4 pageview
    if (window.gtag) {
      window.gtag('config', 'G-7XL0JYX4CZ', {
        page_path: path,
        page_title: document.title
      });
    }
  }, [location, isGtmValid]);

  return null;
};

export default AnalyticsTracker;

