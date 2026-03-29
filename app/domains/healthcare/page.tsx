import type { Metadata } from 'next';
import { Stethoscope, CheckCircle2, ArrowRight, Users, Award, FileText, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare & Life Sciences | RawEval Research',
  description: 'Expert-annotated AI evaluation data for healthcare. 45+ credentialed medical professionals across 12 specialties.',
};

const credentials = [
  'MBBS & MD holders from AIIMS, CMC Vellore, JIPMER',
  'PhDs in pharmacology, clinical research & biomedical engineering',
  'Board-certified radiologists and pathologists',
  'Clinical trial managers with GCP\u2122 certification',
  'Published researchers with 50+ peer-reviewed papers combined',
];

const capabilities = [
  { title: 'Clinical NLP Evaluation', desc: 'Grading AI-generated medical summaries, discharge notes, and clinical reasoning chains against expert ground truth.' },
  { title: 'Drug Safety & Pharmacovigilance', desc: 'Annotating adverse event extraction, drug interaction detection, and dosage recommendation accuracy.' },
  { title: 'Radiology AI Scoring', desc: 'Expert radiologists evaluating AI diagnostic outputs across X-ray, CT, MRI, and ultrasound modalities.' },
  { title: 'Medical QA & Reasoning', desc: 'Multi-annotator evaluation of AI performance on medical board-level questions with chain-of-thought grading.' },
  { title: 'RLHF Preference Data', desc: 'Side-by-side comparisons of medical AI responses ranked by specialists for safety, accuracy, and helpfulness.' },
  { title: 'Claim Verification', desc: 'Fact-checking AI-generated health claims against clinical evidence and guidelines (WHO, FDA, NICE).' },
];

const delivered = [
  { metric: '850+', label: 'Annotated clinical prompts delivered' },
  { metric: '12', label: 'Active medical specialties covered' },
  { metric: '97.2%', label: 'Accuracy on diagnostic annotation tasks' },
  { metric: '3.8x', label: 'Avg. annotators per data point' },
];

export default function HealthcarePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-base)' }}>

      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '120%', height: '80%', background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255, 122, 69, 0.06), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '80px var(--section-x) var(--space-12)', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--color-signal-subtle)', border: '1px solid var(--color-signal-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Stethoscope size={20} style={{ color: 'var(--color-signal)' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-signal)' }}>Healthcare &amp; Life Sciences</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)', color: 'var(--color-text-primary)', fontWeight: 400, maxWidth: 700, margin: '0 0 var(--space-6)' }}>
            45+ credentialed medical professionals. <span style={{ color: 'var(--color-signal)', fontStyle: 'italic' }}>12 specialties.</span>
          </h1>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)', maxWidth: 580, margin: '0 0 var(--space-8)' }}>
            AIIMS- and CMC-trained physicians alongside IIT biomedical researchers delivering rigorous medical annotation. Every annotation is multi-reviewed, every expert is vetted.
          </p>

          <a href="/#contact" className="btn-primary" style={{ padding: '14px 28px', fontSize: 'var(--text-sm)' }}>
            Discuss Your Project <ArrowRight size={14} />
          </a>
        </div>
      </section>

      {/* Numbers */}
      <section style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'var(--space-12) var(--section-x)' }}>
          <div className="grid-cols-4-md" style={{ gap: 'var(--space-6)' }}>
            {delivered.map(({ metric, label }) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-2xl)', fontWeight: 500, color: 'var(--color-text-primary)', marginBottom: 'var(--space-1)' }}>{metric}</div>
                <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert credentials */}
      <section style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'var(--section-y) var(--section-x)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <Award size={18} style={{ color: 'var(--color-signal)' }} />
            <span className="mono-label" style={{ color: 'var(--color-text-faint)' }}>Our Expert Pool</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--color-text-primary)', fontWeight: 400, lineHeight: 'var(--leading-tight)', margin: '0 0 var(--space-8)' }}>
            Who evaluates your data
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 'var(--max-prose)' }}>
            {credentials.map((cred) => (
              <div key={cred} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--color-signal)', flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{cred}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'var(--section-y) var(--section-x)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <FileText size={18} style={{ color: 'var(--color-signal)' }} />
            <span className="mono-label" style={{ color: 'var(--color-text-faint)' }}>What We Deliver</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--color-text-primary)', fontWeight: 400, lineHeight: 'var(--leading-tight)', margin: '0 0 var(--space-8)' }}>
            Healthcare annotation capabilities
          </h2>
          <div className="grid-cols-2-md" style={{ gap: 'var(--space-6)' }}>
            {capabilities.map(({ title, desc }) => (
              <div key={title} className="card-surface" style={{ padding: 'var(--space-6)' }}>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-primary)', fontWeight: 500, margin: '0 0 var(--space-2)' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance */}
      <section style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'var(--space-12) var(--section-x)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
            <ShieldCheck size={18} style={{ color: 'var(--color-signal)' }} />
            <span className="mono-label" style={{ color: 'var(--color-text-faint)' }}>Compliance</span>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            {['HIPAA Compliant', 'GCP\u2122 Aligned', 'SOC 2 Type II', 'NDA All Experts', 'IRB-Ready Workflows', 'GDPR Compliant'].map((badge) => (
              <span key={badge} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', padding: '6px 14px', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)' }}>{badge}</span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ borderTop: '1px solid var(--color-border)', background: 'linear-gradient(180deg, var(--color-bg-base), #080808)' }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'var(--space-24) var(--section-x)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', fontWeight: 400, lineHeight: 'var(--leading-tight)', margin: '0 0 var(--space-5)' }}>
            Need healthcare AI evaluation data?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', maxWidth: 440, margin: '0 auto var(--space-8)' }}>
            Tell us about your project. We&apos;ll match you with the right experts.
          </p>
          <a href="/#contact" className="btn-primary" style={{ padding: '14px 36px', fontSize: 'var(--text-sm)' }}>
            Get in Touch <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
