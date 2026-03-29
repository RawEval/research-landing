'use client';

import { createContext, useContext, useEffect, useRef, useCallback } from 'react';
import Lenis from 'lenis';

const LenisContext = createContext<{ stop: () => void; start: () => void }>({
  stop: () => {},
  start: () => {},
});

export function useLenis() {
  return useContext(LenisContext);
}

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  const stop = useCallback(() => { lenisRef.current?.stop(); }, []);
  const start = useCallback(() => { lenisRef.current?.start(); }, []);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      touchMultiplier: 2,
      prevent: (node) => {
        // Don't hijack scroll inside modals or any scrollable container
        let el: HTMLElement | null = node as HTMLElement;
        while (el && el !== document.body) {
          if (el.hasAttribute('data-lenis-prevent')) return true;
          el = el.parentElement;
        }
        return false;
      },
    });
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => { lenis.destroy(); };
  }, []);

  return (
    <LenisContext.Provider value={{ stop, start }}>
      {children}
    </LenisContext.Provider>
  );
}
