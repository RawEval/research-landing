import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service | RawEval Research',
  description: 'RawEval Research terms of service. Terms governing use of our website and services.',
};

const LAST_UPDATED = 'March 28, 2026';

export default function TermsPage() {
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
            Terms of Service
          </h1>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-10)' }}>
          <Section title="1. Acceptance of Terms">
            By accessing or using the RawEval Research website and services (collectively, the &ldquo;Services&rdquo;), you agree to be bound by these Terms of Service (&ldquo;Terms&rdquo;). If you do not agree to these Terms, do not use our Services. These Terms constitute a legally binding agreement between you and RawEval Inc. (&ldquo;RawEval,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
          </Section>

          <Section title="2. Description of Services">
            RawEval Research provides expert-annotated AI evaluation data and related annotation services. Our Services include the RawEval Research website, contact and inquiry forms, and the delivery of annotated datasets and evaluation reports pursuant to separate engagement agreements.
          </Section>

          <Section title="3. Eligibility">
            You must be at least 18 years of age and have the legal capacity to enter into binding agreements to use our Services. If you are using the Services on behalf of an organization, you represent that you have the authority to bind that organization to these Terms.
          </Section>

          <Section title="4. User Conduct">
            You agree not to:
            <ul style={{ margin: 'var(--space-3) 0 0', paddingLeft: 'var(--space-5)', display: 'flex', flexDirection: 'column', gap: 'var(--space-2)' }}>
              <li>Use the Services for any unlawful purpose or in violation of any applicable laws</li>
              <li>Attempt to gain unauthorized access to our systems or infrastructure</li>
              <li>Interfere with or disrupt the integrity or performance of the Services</li>
              <li>Reverse engineer, decompile, or disassemble any part of the Services</li>
              <li>Scrape, harvest, or collect data from our website without authorization</li>
              <li>Misrepresent your identity or affiliation when contacting us</li>
            </ul>
          </Section>

          <Section title="5. Intellectual Property">
            All content on the RawEval Research website, including text, graphics, logos, designs, and software, is the property of RawEval Inc. and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from any content without our prior written consent.
          </Section>

          <Section title="6. Engagement Agreements">
            Any annotation, evaluation, or data delivery services will be governed by separate engagement agreements or statements of work. These Terms govern your use of the website and initial inquiry process; specific project terms, deliverables, timelines, and fees will be defined in project-specific agreements.
          </Section>

          <Section title="7. Confidentiality">
            Any non-public information exchanged between you and RawEval during the inquiry or engagement process shall be treated as confidential. Neither party shall disclose confidential information without the other party&apos;s prior written consent, except as required by law.
          </Section>

          <Section title="8. Data and Privacy">
            Your use of the Services is also governed by our <a href="/privacy" style={{ color: 'var(--color-signal)' }}>Privacy Policy</a>, which describes how we collect, use, and protect your personal information. By using the Services, you consent to the practices described therein.
          </Section>

          <Section title="9. Disclaimer of Warranties">
            The Services are provided &ldquo;as is&rdquo; and &ldquo;as available&rdquo; without warranties of any kind, either express or implied, including but not limited to warranties of merchantability, fitness for a particular purpose, and non-infringement. We do not warrant that the Services will be uninterrupted, error-free, or secure.
          </Section>

          <Section title="10. Limitation of Liability">
            To the maximum extent permitted by applicable law, RawEval Inc. shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising out of or related to your use of the Services, regardless of the theory of liability. Our total aggregate liability shall not exceed the amounts paid by you to RawEval in the twelve months preceding the claim.
          </Section>

          <Section title="11. Indemnification">
            You agree to indemnify, defend, and hold harmless RawEval Inc. and its officers, directors, employees, and agents from and against any claims, liabilities, damages, losses, and expenses arising out of your use of the Services or violation of these Terms.
          </Section>

          <Section title="12. Governing Law">
            These Terms shall be governed by and construed in accordance with the laws of India. Any disputes arising under these Terms shall be subject to the exclusive jurisdiction of the courts located in Bengaluru, Karnataka.
          </Section>

          <Section title="13. Modifications">
            We reserve the right to modify these Terms at any time. Changes will be posted on this page with an updated &ldquo;Last updated&rdquo; date. Your continued use of the Services after any changes constitutes acceptance of the revised Terms.
          </Section>

          <Section title="14. Termination">
            We may suspend or terminate your access to the Services at any time, with or without cause, and with or without notice. Upon termination, all provisions of these Terms that by their nature should survive will remain in effect.
          </Section>

          <Section title="15. Contact Us">
            If you have questions about these Terms, contact us at:
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
