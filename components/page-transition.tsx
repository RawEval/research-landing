'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

/**
 * Page transition — CSS-only, zero jank.
 *
 * Uses key={pathname} to force React to remount the wrapper on route change.
 * The remount triggers a CSS animation. No GSAP, no wrapper transforms,
 * no stacking context issues with modals or fixed elements.
 *
 * This is the same pattern used by Linear, Vercel, and Stripe —
 * fast navigation + subtle entrance animation. No exit animation needed
 * because static pages swap instantly.
 */
export function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return (
    <div key={pathname} className="page-enter">
      {children}
    </div>
  );
}
