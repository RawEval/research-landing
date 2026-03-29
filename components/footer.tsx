import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const DOMAIN_LINKS = [
  { href: '/domains/healthcare', label: 'Healthcare' },
  { href: '/domains/finance', label: 'Finance' },
  { href: '/domains/legal', label: 'Legal' },
  { href: '/domains/technology', label: 'Technology' },
];

const COMPANY_LINKS = [
  { href: '/experts', label: 'Our Experts' },
  { href: '/#contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
];

export function Footer() {
  return (
    <footer>
      {/* ── Signal CTA band ── */}
      <div className="footer-cta">
        <div className="footer-cta-inner">
          <h2 className="footer-cta-heading">
            Ready to elevate your<br />AI evaluation?
          </h2>
          <p className="footer-cta-sub">
            Join leading AI labs using expert-annotated data.
          </p>
          <a href="/#contact" className="footer-cta-btn">
            Get in Touch <ArrowRight size={14} />
          </a>
        </div>
      </div>

      {/* ── Main footer ── */}
      <div className="footer-main">
        <div className="footer-main-inner">
          <div className="footer-brand-row">
            {/* Brand */}
            <div className="footer-brand-block">
              <Link href="/" className="footer-wordmark">RawEval</Link>
              <p className="footer-tagline">
                Expert-annotated evaluation data<br />
                for AI that demands rigour.
              </p>
              <a href="mailto:contact@raweval.com" className="footer-email">
                contact@raweval.com
                <ArrowUpRight size={11} />
              </a>
            </div>

            {/* Link columns */}
            <div className="footer-cols">
              <div className="footer-col">
                <span className="footer-col-title">Domains</span>
                {DOMAIN_LINKS.map(({ href, label }) => (
                  <Link key={href} href={href} className="footer-link">{label}</Link>
                ))}
              </div>
              <div className="footer-col">
                <span className="footer-col-title">Company</span>
                {COMPANY_LINKS.map(({ href, label }) => (
                  <Link key={href} href={href} className="footer-link">{label}</Link>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="footer-divider" />
          <div className="footer-bottom">
            <span className="footer-copy">&copy; {new Date().getFullYear()} RawEval Inc.</span>
            <span className="footer-location">Bengaluru, India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
