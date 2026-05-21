import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GTM_ID = import.meta.env.VITE_GTM_ID;
const META_PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

const AnalyticsTracker = () => {
  const location = useLocation();

  const isGtmValid = GTM_ID && GTM_ID !== 'GTM-NHQBRDLJ';
  const isPixelValid = META_PIXEL_ID && META_PIXEL_ID !== '123456789012345';

  // 1. Initialize dataLayer and fbq placeholders immediately on mount
  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Initialize Google Tag Manager Data Layer
    if (isGtmValid) {
      window.dataLayer = window.dataLayer || [];
    }

    // Initialize Meta Pixel (fbq) queue
    if (isPixelValid && !window.fbq) {
      window.fbq = function () {
        window.fbq.callMethod ?
          window.fbq.callMethod.apply(window.fbq, arguments) :
          window.fbq.queue.push(arguments);
      };
      if (!window._fbq) window._fbq = window.fbq;
      window.fbq.push = window.fbq;
      window.fbq.loaded = true;
      window.fbq.version = '2.0';
      window.fbq.queue = [];

      // Push initialization command
      window.fbq('init', META_PIXEL_ID);
    }
  }, [isGtmValid, isPixelValid]);

  // 2. Dynamically load scripts on first user interaction or fallback timeout (Performance optimization)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!isGtmValid && !isPixelValid) return;

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


      // Load Meta Pixel Script
      if (isPixelValid) {
        const pixelScript = document.createElement('script');
        pixelScript.async = true;
        pixelScript.src = 'https://connect.facebook.net/en_US/fbevents.js';
        document.head.appendChild(pixelScript);
      }
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
  }, [isGtmValid, isPixelValid]);

  // 3. Track pageviews on route changes (including initial load)
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

    // Track Meta Pixel pageview
    if (isPixelValid && typeof window.fbq === 'function') {
      window.fbq('track', 'PageView');
    }
  }, [location, isGtmValid, isPixelValid]);

  return null;
};

export default AnalyticsTracker;
