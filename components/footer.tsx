import Link from 'next/link';

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-subtle)' }}>
      <div style={{
        maxWidth: 'var(--max-content)', margin: '0 auto',
        padding: 'var(--space-10) var(--section-x) var(--space-8)',
      }}>
        {/* Top */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start',
          flexWrap: 'wrap', gap: 'var(--space-8)',
          marginBottom: 'var(--space-8)', paddingBottom: 'var(--space-6)',
          borderBottom: '1px solid var(--color-border)',
        }}>
          {/* Brand */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 'var(--space-2)' }}>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-signal)', fontWeight: 500, letterSpacing: 'var(--tracking-wide)' }}>RawEval</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-faint)', letterSpacing: 'var(--tracking-wider)' }}>RESEARCH</span>
            </Link>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-muted)', margin: 0, maxWidth: 260 }}>
              Expert-annotated AI evaluation data.
            </p>
          </div>

          {/* Links */}
          <div className="footer-links" style={{ display: 'flex', gap: 'var(--space-10)', flexWrap: 'wrap' }}>
            <FooterCol title="Company">
              <Link href="/experts" className="footer-link" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>Our Experts</Link>
              <a href="/#contact" className="footer-link" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>Contact</a>
              <a href="mailto:research@raweval.com" className="footer-link" style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)' }}>research@raweval.com</a>
            </FooterCol>
            <FooterCol title="Domains">
              <Link href="/domains/healthcare" className="footer-link" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>Healthcare</Link>
              <Link href="/domains/finance" className="footer-link" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>Finance</Link>
              <Link href="/domains/legal" className="footer-link" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>Legal</Link>
              <Link href="/domains/technology" className="footer-link" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>Technology</Link>
            </FooterCol>
            <FooterCol title="Legal">
              <Link href="/privacy" className="footer-link" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>Privacy Policy</Link>
              <Link href="/terms" className="footer-link" style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)' }}>Terms of Service</Link>
            </FooterCol>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
          flexWrap: 'wrap', gap: 'var(--space-3)',
        }}>
          <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-text-faint)' }}>
            Bengaluru, India
          </span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-faint)' }}>
            &copy; {new Date().getFullYear()} RawEval Inc.
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: 'var(--tracking-wider)',
        textTransform: 'uppercase', color: 'var(--color-text-faint)', marginBottom: 2,
      }}>{title}</span>
      {children}
    </div>
  );
}
