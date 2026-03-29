import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | RawEval Research',
  description: 'RawEval Research privacy policy. How we collect, use, and protect your data.',
};

const LAST_UPDATED = 'March 28, 2026';

export default function PrivacyPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-base)' }}>
      <div style={{ maxWidth: 'var(--max-prose)', margin: '0 auto', padding: '80px var(--section-x) var(--space-24)' }}>

        <div style={{ marginBottom: 'var(--space-10)' }}>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: 'var(--tracking-wider)',
            textTransform: 'uppercase', color: 'var(--color-text-faint)',
          }}>
            Last updated {LAST_UPDATED}
          </span>
          <h1 style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)',
            lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)',
            color: 'var(--color-text-primary)', fontWeight: 400, margin: 'var(--space-3) 0 0',
          }}>
            Privacy Policy
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
          <Section title="1. Introduction">
            RawEval Inc. (&ldquo;RawEval,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;) operates the RawEval Research website and related services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
          </Section>

          <Section title="2. Information We Collect">
            <strong>Information you provide directly:</strong> When you fill out our contact form or communicate with us, we may collect your name, email address, organization, domain of interest, and any additional information you choose to share.
            <br /><br />
            <strong>Automatically collected information:</strong> We may collect certain information automatically when you visit our website, including your IP address, browser type, operating system, referring URLs, and browsing behavior through cookies and similar technologies.
          </Section>

          <Section title="3. How We Use Your Information">
            We use the information we collect to:
            <ul style={{ margin: 'var(--space-3) 0 0', paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li>Respond to your inquiries and facilitate communication</li>
              <li>Evaluate potential partnerships and project engagements</li>
              <li>Improve our website, services, and user experience</li>
              <li>Comply with legal obligations and enforce our terms</li>
              <li>Send relevant updates if you have opted in to communications</li>
            </ul>
          </Section>

          <Section title="4. Data Sharing and Disclosure">
            We do not sell your personal information. We may share your information with:
            <ul style={{ margin: 'var(--space-3) 0 0', paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li>Service providers who assist in operating our website and services, bound by confidentiality agreements</li>
              <li>Legal or regulatory authorities when required by applicable law</li>
              <li>Professional advisors such as lawyers and accountants as needed</li>
            </ul>
          </Section>

          <Section title="5. Data Security">
            We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </Section>

          <Section title="6. Data Retention">
            We retain personal information for as long as necessary to fulfill the purposes described in this policy, unless a longer retention period is required or permitted by law. Contact form submissions are retained for up to 24 months after the last interaction.
          </Section>

          <Section title="7. Your Rights">
            Depending on your jurisdiction, you may have the right to:
            <ul style={{ margin: 'var(--space-3) 0 0', paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li>Access, correct, or delete your personal information</li>
              <li>Object to or restrict certain processing activities</li>
              <li>Request data portability</li>
              <li>Withdraw consent where processing is based on consent</li>
            </ul>
            <br />
            To exercise any of these rights, contact us at <a href="mailto:research@raweval.com" style={{ color: 'var(--color-signal)' }}>research@raweval.com</a>.
          </Section>

          <Section title="8. Cookies">
            Our website uses essential cookies to ensure basic functionality. We may also use analytics cookies to understand how visitors interact with our website. You can control cookie preferences through your browser settings.
          </Section>

          <Section title="9. Third-Party Links">
            Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those websites. We encourage you to review their privacy policies independently.
          </Section>

          <Section title="10. Changes to This Policy">
            We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Continued use of our website after changes constitutes acceptance of the revised policy.
          </Section>

          <Section title="11. Contact Us">
            If you have questions or concerns about this Privacy Policy, contact us at:
            <br /><br />
            <strong>RawEval Inc.</strong><br />
            Ground Floor &amp; 1st Floor, Incubex HSR23<br />
            19th Main Rd, HSR Layout, Sector 4<br />
            Bengaluru, Karnataka 560102<br />
            <a href="mailto:research@raweval.com" style={{ color: 'var(--color-signal)' }}>research@raweval.com</a>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ paddingBottom: 'var(--space-8)', borderBottom: '1px solid var(--color-border)' }}>
      <h2 style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-md)', fontWeight: 600,
        color: 'var(--color-text-primary)', margin: '0 0 var(--space-4)',
      }}>{title}</h2>
      <div style={{
        fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
        color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)',
      }}>{children}</div>
    </div>
  );
}
