import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import 'aos/dist/aos.css';
import { initAosObserver } from './utils/aosObserver';

// Monkey-patch window.scrollTo to prevent smooth scrolling during page mounts/transitions,
// which causes severe layout thrashing/forced reflows on mobile devices.
if (typeof window !== 'undefined') {
  const originalScrollTo = window.scrollTo;
  window.scrollTo = function (options, ...args) {
    if (options && typeof options === 'object' && options.behavior === 'smooth') {
      // Only permit smooth scroll when triggered by the explicit user ScrollToTop button
      if (!options._isScrollToTopButton) {
        options.behavior = 'auto';
      }
    }
    return originalScrollTo.call(this, options, ...args);
  };
}

initAosObserver({
  duration: 800,
  once: true,
  offset: 100,
  easing: 'ease-in-out',
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <App />
    </HelmetProvider>
  </React.StrictMode>
);