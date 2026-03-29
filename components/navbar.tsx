'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const LOGO_FILTER = 'brightness(0) saturate(100%) invert(55%) sepia(82%) saturate(2200%) hue-rotate(344deg) brightness(105%) contrast(96%)';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() { setScrolled(window.scrollY > 50); }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      background: scrolled ? 'rgba(14, 14, 16, 0.92)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(12px)' : 'none',
      borderBottom: scrolled ? '1px solid var(--color-border-subtle)' : '1px solid transparent',
      transition: 'background 0.2s ease, border-color 0.2s ease',
    }}>
      <nav style={{
        maxWidth: 'var(--max-content)', margin: '0 auto',
        padding: '0 var(--section-x)', height: 'var(--nav-height)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }} aria-label="Main navigation">

        {/* Brand */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <Image src="/logo.png" alt="RawEval" width={96} height={28}
            style={{ filter: LOGO_FILTER }} />
        </Link>

        {/* Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-5)' }}>
          <Link href="/experts" className="nav-link" style={{ display: 'none' }}>Our Experts</Link>
          <style>{`@media (min-width: 640px) { nav .nav-link { display: block !important; } }`}</style>
          <a href="/#contact" className="btn-nav-cta">
            Get in Touch
          </a>
        </div>
      </nav>
    </header>
  );
}
