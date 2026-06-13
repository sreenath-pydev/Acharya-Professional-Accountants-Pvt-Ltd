/**
 * High-performance, layout-friendly replacement for the AOS (Animate On Scroll) library.
 * Uses IntersectionObserver and MutationObserver to trigger animations without causing forced reflows or layout thrashing.
 */

let activeObserver = null;
let activeMutationObserver = null;

export function initAosObserver(globalOptions = {}) {
  if (typeof window === 'undefined') return;

  // Cleanup any existing observers before starting a new one
  if (activeObserver) activeObserver.disconnect();
  if (activeMutationObserver) activeMutationObserver.disconnect();

  const defaults = {
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100,
    ...globalOptions
  };

  const observerOptions = {
    root: null, // relative to document viewport
    rootMargin: `0px 0px -${defaults.offset}px 0px`, // trigger animation when element is 'offset' px into viewport
    threshold: 0.05, // trigger when 5% of element is visible
  };

  const observer = new IntersectionObserver((entries, self) => {
    entries.forEach((entry) => {
      const el = entry.target;
      const onceAttr = el.getAttribute('data-aos-once');
      const isOnce = onceAttr === 'true' || (onceAttr !== 'false' && defaults.once);

      if (entry.isIntersecting) {
        // Read options from data attributes or fall back to defaults
        const delay = el.getAttribute('data-aos-delay');
        const duration = el.getAttribute('data-aos-duration') || defaults.duration;
        const easing = el.getAttribute('data-aos-easing') || defaults.easing;

        if (delay) el.style.transitionDelay = `${delay}ms`;
        if (duration) el.style.transitionDuration = `${duration}ms`;
        if (easing) el.style.transitionTimingFunction = easing;

        // Add class to trigger CSS animation
        el.classList.add('aos-animate');

        // Unobserve if it only needs to animate once
        if (isOnce) {
          self.unobserve(el);
        }
      } else {
        // If once is false, remove class when exiting viewport so it can animate again
        if (!isOnce) {
          el.classList.remove('aos-animate');
        }
      }
    });
  }, observerOptions);

  activeObserver = observer;

  const observeElements = () => {
    document.querySelectorAll('[data-aos]').forEach((el) => {
      if (!el.classList.contains('aos-init')) {
        el.classList.add('aos-init');
        observer.observe(el);
      }
    });
  };

  // Run initial observation
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', observeElements);
  } else {
    observeElements();
  }

  // Set up MutationObserver to automatically observe dynamically added elements (e.g. route transitions)
  const mutationObserver = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          // If the added node itself is an AOS element
          if (node.matches && node.matches('[data-aos]')) {
            if (!node.classList.contains('aos-init')) {
              node.classList.add('aos-init');
              observer.observe(node);
            }
          }
          // Scan for AOS children
          node.querySelectorAll?.('[data-aos]').forEach((el) => {
            if (!el.classList.contains('aos-init')) {
              el.classList.add('aos-init');
              observer.observe(el);
            }
          });
        }
      });
    });
  });

  mutationObserver.observe(document.body, {
    childList: true,
    subtree: true,
  });

  activeMutationObserver = mutationObserver;

  // Return a cleanup function
  return () => {
    observer.disconnect();
    mutationObserver.disconnect();
  };
}

// Dummy AOS mock object to provide safe mock methods for components that might call them during migration/cleanup
export const AOSMock = {
  init: (options = {}) => initAosObserver(options),
  refresh: () => {
    if (activeObserver) {
      document.querySelectorAll('[data-aos]').forEach((el) => {
        if (!el.classList.contains('aos-init')) {
          el.classList.add('aos-init');
          activeObserver.observe(el);
        }
      });
    }
  },
  refreshHard: () => {
    AOSMock.refresh();
  }
};

export default AOSMock;
