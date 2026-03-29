import type { Metadata } from 'next';
import { TrendingUp, CheckCircle2, ArrowRight, Award, FileText, ShieldCheck } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Finance & Banking | RawEval Research',
  description: 'Expert-annotated AI evaluation data for finance. 30+ specialists including CFA charterholders, quants & risk analysts.',
};

const credentials = [
  'CFA charterholders and FRM-certified risk professionals',
  'IIM alumni with deep capital markets and PE/VC experience',
  'Quantitative analysts from top hedge funds and prop desks',
  'Regulatory compliance specialists (RBI, SEBI, SEC frameworks)',
  'Fintech builders with exits and published financial research',
];

const capabilities = [
  { title: 'Financial Reasoning Evaluation', desc: 'Grading AI-generated financial analysis, investment theses, and market commentary against expert ground truth.' },
  { title: 'Risk & Compliance Scoring', desc: 'Annotating regulatory compliance outputs, AML/KYC detection accuracy, and credit risk model explanations.' },
  { title: 'Trading AI Evaluation', desc: 'Expert traders scoring algorithmic trade rationale, market sentiment analysis, and portfolio recommendation quality.' },
  { title: 'Financial Document QA', desc: 'Multi-annotator evaluation of AI extraction accuracy on 10-Ks, balance sheets, earnings calls, and prospectuses.' },
  { title: 'Fraud Detection Annotation', desc: 'Labeling transaction patterns, flagging false positives, and evaluating AI explanations for suspicious activity.' },
  { title: 'RLHF for Financial Advisors', desc: 'Preference ranking of AI financial advice for safety, regulatory alignment, and actionability by credentialed professionals.' },
];

const delivered = [
  { metric: '620+', label: 'Annotated financial prompts delivered' },
  { metric: '6', label: 'Financial sub-domains active' },
  { metric: '96.4%', label: 'Accuracy on compliance annotation' },
  { metric: '3.4x', label: 'Avg. annotators per data point' },
];

export default function FinancePage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-base)' }}>

      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div aria-hidden="true" style={{ position: 'absolute', top: '-20%', left: '50%', transform: 'translateX(-50%)', width: '120%', height: '80%', background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(255, 122, 69, 0.06), transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '80px var(--section-x) var(--space-12)', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-md)', background: 'var(--color-signal-subtle)', border: '1px solid var(--color-signal-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <TrendingUp size={20} style={{ color: 'var(--color-signal)' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-signal)' }}>Finance &amp; Banking</span>
          </div>

          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)', color: 'var(--color-text-primary)', fontWeight: 400, maxWidth: 700, margin: '0 0 var(--space-6)' }}>
            30+ financial specialists. <span style={{ color: 'var(--color-signal)', fontStyle: 'italic' }}>CFA to quant.</span>
          </h1>

          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)', maxWidth: 580, margin: '0 0 var(--space-8)' }}>
            IIM-trained analysts, CFA charterholders, and quantitative researchers from top financial institutions. We evaluate financial AI where generic annotators can&apos;t &mdash; because our people actually trade, model, and advise.
          </p>

          <a href="/#contact" className="btn-primary" style={{ padding: '14px 28px', fontSize: 'var(--text-sm)' }}>
            Discuss Your Project <ArrowRight size={14} />
          </a>
        </div>
      </section>

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

      <section style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'var(--section-y) var(--section-x)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <Award size={18} style={{ color: 'var(--color-signal)' }} />
            <span className="mono-label" style={{ color: 'var(--color-text-faint)' }}>Our Expert Pool</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--color-text-primary)', fontWeight: 400, lineHeight: 'var(--leading-tight)', margin: '0 0 var(--space-8)' }}>Who evaluates your data</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', maxWidth: 'var(--max-prose)' }}>
            {credentials.map((c) => (
              <div key={c} style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-3)' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--color-signal)', flexShrink: 0, marginTop: 2 }} />
                <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)' }}>{c}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'var(--section-y) var(--section-x)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
            <FileText size={18} style={{ color: 'var(--color-signal)' }} />
            <span className="mono-label" style={{ color: 'var(--color-text-faint)' }}>What We Deliver</span>
          </div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--color-text-primary)', fontWeight: 400, lineHeight: 'var(--leading-tight)', margin: '0 0 var(--space-8)' }}>Finance annotation capabilities</h2>
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

      <section style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'var(--space-12) var(--section-x)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-6)' }}>
            <ShieldCheck size={18} style={{ color: 'var(--color-signal)' }} />
            <span className="mono-label" style={{ color: 'var(--color-text-faint)' }}>Compliance</span>
          </div>
          <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
            {['SOC 2 Type II', 'GDPR Compliant', 'NDA All Experts', 'ISO 27001', 'PCI-DSS Aware', 'Data Residency Options'].map((b) => (
              <span key={b} style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-xs)', color: 'var(--color-text-secondary)', padding: '6px 14px', background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)' }}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <section style={{ borderTop: '1px solid var(--color-border)', background: 'linear-gradient(180deg, var(--color-bg-base), #080808)' }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'var(--space-24) var(--section-x)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', color: 'var(--color-text-primary)', fontWeight: 400, lineHeight: 'var(--leading-tight)', margin: '0 0 var(--space-5)' }}>
            Need financial AI evaluation data?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-muted)', maxWidth: 440, margin: '0 auto var(--space-8)' }}>
            Tell us about your project. We&apos;ll match you with the right specialists.
          </p>
          <a href="/#contact" className="btn-primary" style={{ padding: '14px 36px', fontSize: 'var(--text-sm)' }}>
            Get in Touch <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
