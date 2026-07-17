import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import App from './App';
import './index.css';
import 'aos/dist/aos.css';
import { initAosObserver } from './utils/aosObserver';

// Monkey-patch window.scrollTo to prevent smooth scrolling during page mounts/transitions,
// and defer/optimize layout resets to eliminate layout thrashing/forced reflows.
if (typeof window !== 'undefined') {
  const originalScrollTo = window.scrollTo;
  let isScrollScheduled = false;

  window.scrollTo = function (options, ...args) {
    let normalizedOptions = options;
    if (options && typeof options === 'object') {
      if (options.behavior === 'smooth' && !options._isScrollToTopButton) {
        normalizedOptions = { ...options, behavior: 'auto' };
      }
    }

    const isTargetTop = 
      (options === 0 && args[0] === 0) || 
      (options && typeof options === 'object' && options.top === 0 && (options.left === undefined || options.left === 0));

    if (isTargetTop) {
      // Already at the top, scroll is a no-op
      if (window.scrollY === 0 && window.scrollX === 0) {
        return;
      }
      // If a scroll to top is already scheduled in this frame/tick, ignore duplicate
      if (isScrollScheduled) {
        return;
      }
      isScrollScheduled = true;
      setTimeout(() => {
        originalScrollTo.call(window, normalizedOptions, ...args);
        isScrollScheduled = false;
      }, 0);
      return;
    }

    return originalScrollTo.call(window, normalizedOptions, ...args);
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