import { useEffect, useState, useRef } from 'react';

const AnimatedCounter = ({ value, duration = 1500, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasStartedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStartedRef.current) {
          hasStartedRef.current = true;
          let startTime = null;
          const endValue = Number(value);

          const animate = (timestamp) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Easing function: easeOutQuad
            const easePercentage = percentage * (2 - percentage);
            
            setCount(Math.floor(easePercentage * endValue));

            if (percentage < 1) {
              requestAnimationFrame(animate);
            } else {
              setCount(endValue);
            }
          };

          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [value, duration]);

  return (
    <span ref={elementRef}>
      {prefix}{count}{suffix}
    </span>
  );
};

export default AnimatedCounter;
