import { useEffect, useRef, useState } from 'react';

export function ScrollEffects() {
  const [progress, setProgress] = useState(0);
  const [direction, setDirection] = useState<'down' | 'up'>('down');
  const previousScroll = useRef(0);

  useEffect(() => {
    let frame = 0;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const update = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const scrollable = document.documentElement.scrollHeight - window.innerHeight;
        setProgress(scrollable > 0 ? (scrollY / scrollable) * 100 : 0);

        if (scrollY !== previousScroll.current) {
          setDirection(scrollY > previousScroll.current ? 'down' : 'up');
          previousScroll.current = scrollY;
        }

        if (!reduceMotion) {
          const gridShift = (scrollY * 0.075) % 48;
          document.documentElement.style.setProperty('--hacker-grid-y', `${gridShift}px`);
          document.documentElement.style.setProperty('--hacker-grid-x', `${(scrollY * 0.018) % 48}px`);

          document.querySelectorAll<HTMLElement>('main, section, footer').forEach((section) => {
            const rect = section.getBoundingClientRect();
            const viewportCenter = window.innerHeight / 2;
            const sectionCenter = rect.top + rect.height / 2;
            const distance = (sectionCenter - viewportCenter) / window.innerHeight;
            const parallax = Math.max(-18, Math.min(18, distance * -10));
            section.style.setProperty('--section-parallax', `${parallax}px`);
          });
        }
        frame = 0;
      });
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          element.classList.remove('scroll-enter-up', 'scroll-enter-down');
          element.classList.add('scroll-entered');
        } else if (entry.boundingClientRect.top > 0) {
          element.classList.remove('scroll-entered');
          element.classList.add('scroll-enter-down');
        } else {
          element.classList.remove('scroll-entered');
          element.classList.add('scroll-enter-up');
        }
      });
    }, { rootMargin: '-8% 0px -8%', threshold: 0.08 });

    if (!reduceMotion) {
      document.querySelectorAll<HTMLElement>('main, section, footer').forEach((section) => {
        section.classList.add('hacker-section');
        revealObserver.observe(section);
      });
    }

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      revealObserver.disconnect();
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <div
        className="scroll-progress"
        style={{ transform: `scaleX(${progress / 100})` }}
        aria-hidden="true"
      />
      <div
        className={`hacker-grid ${direction === 'up' ? 'scrolling-up' : 'scrolling-down'}`}
        aria-hidden="true"
      />
      <div className="hacker-orb hacker-orb-one" aria-hidden="true" />
      <div className="hacker-orb hacker-orb-two" aria-hidden="true" />
      <div className="scan-beacon" aria-hidden="true" />
    </>
  );
}
