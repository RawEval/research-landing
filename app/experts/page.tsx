import {
  GraduationCap, ClipboardCheck, FlaskRound, BadgeCheck,
  CheckCircle2, ArrowRight, Users, Shield,
} from 'lucide-react';
import { ExpertApplyButton } from '@/components/expert-modal';

/* ================================================================== */
/* DATA                                                                */
/* ================================================================== */

const VETTING = [
  { icon: GraduationCap, label: 'Credential Audit', desc: 'Degrees, publications & affiliation verified.' },
  { icon: ClipboardCheck, label: 'Test Annotation', desc: 'Blind task scored against ground truth. Min 90%.' },
  { icon: FlaskRound, label: 'Calibration', desc: 'IAA alignment across trial batches.' },
  { icon: BadgeCheck, label: 'Active Expert', desc: 'Ongoing QC and performance retention.' },
];

const DIRECTORY: {
  first: string; firstRedact: number;
  last: string; lastRedact: number;
  institution: string; dept: string; areas: string;
  hIndex: string; notable?: string;
}[] = [
  { first: 'Su', firstRedact: 5, last: 'Sa', lastRedact: 7, institution: 'IIT Bombay', dept: 'CSE', areas: 'Statistical ML, Information Extraction, Causal Inference', hIndex: '50+', notable: 'ACM Fellow · Infosys Prize' },
  { first: 'So', firstRedact: 5, last: 'Ch', lastRedact: 10, institution: 'IIT Bombay', dept: 'CSE', areas: 'Web Search, Knowledge Graphs, Information Retrieval', hIndex: '55+', notable: 'Bhatnagar Prize · JC Bose Fellow' },
  { first: 'Ga', firstRedact: 5, last: 'Ra', lastRedact: 11, institution: 'IIT Bombay', dept: 'CSE', areas: 'Relational Learning, Low-resource ML, Optimization', hIndex: '20+', notable: 'BharatGen Project Lead' },
  { first: 'Pr', firstRedact: 5, last: 'Jy', lastRedact: 4, institution: 'IIT Bombay', dept: 'CSE', areas: 'Speech Recognition, Multilingual NLP, Code-switching', hIndex: '20+' },
  { first: 'Am', firstRedact: 3, last: 'Se', lastRedact: 3, institution: 'IIT Bombay', dept: 'EE', areas: 'Computational Pathology, Medical Image Analysis', hIndex: '30+' },
  { first: 'Ma', firstRedact: 4, last: '', lastRedact: 0, institution: 'IIT Delhi', dept: 'CSE / AI', areas: 'Information Extraction, Neuro-Symbolic AI, NLP', hIndex: '35+', notable: 'Founding Head, IIT-D School of AI' },
  { first: 'Pa', firstRedact: 4, last: 'Si', lastRedact: 4, institution: 'IIT Delhi', dept: 'CSE', areas: 'Probabilistic ML, Neuro-Symbolic Reasoning', hIndex: '25+' },
  { first: 'Sa', firstRedact: 4, last: 'Ra', lastRedact: 2, institution: 'IIT Delhi', dept: 'CSE', areas: 'Graph Neural Networks, Spatio-temporal Analytics', hIndex: '25+', notable: 'Nick McKeown Chair' },
  { first: 'Ch', firstRedact: 5, last: 'Ar', lastRedact: 3, institution: 'IIT Delhi', dept: 'CSE', areas: 'Computer Vision, ML, Image/Video Analysis', hIndex: '20+' },
  { first: 'Ba', firstRedact: 8, last: 'Ra', lastRedact: 8, institution: 'IIT Madras', dept: 'DSAI', areas: 'Reinforcement Learning, Network Analysis, Responsible AI', hIndex: '35+', notable: 'AAAI Fellow · Heads RBCDSAI' },
  { first: 'Mi', firstRedact: 4, last: 'Kh', lastRedact: 4, institution: 'IIT Madras', dept: 'DSAI', areas: 'Multilingual NLP, Neural MT, Speech Recognition', hIndex: '30+', notable: 'Google Faculty Award · AI4Bharat' },
  { first: 'Pi', firstRedact: 4, last: 'Ra', lastRedact: 1, institution: 'IIT Kanpur', dept: 'CSE', areas: 'Bayesian ML, Probabilistic Modeling, Generative Models', hIndex: '35+' },
  { first: 'Pu', firstRedact: 9, last: 'Ka', lastRedact: 1, institution: 'IIT Kanpur', dept: 'CSE', areas: 'Optimization, Extreme Classification, Learning Theory', hIndex: '25+' },
  { first: 'Ar', firstRedact: 4, last: 'Bh', lastRedact: 11, institution: 'IIT Kanpur', dept: 'CSE', areas: 'Legal Document Processing, Data Mining, NLP', hIndex: '15+' },
  { first: 'Ni', firstRedact: 4, last: 'Ga', lastRedact: 5, institution: 'IIT Kharagpur', dept: 'CSE', areas: 'Social Computing, Network Science, NLP', hIndex: '40+', notable: 'INAE Fellow · Chatterjee Chair' },
  { first: 'Pa', firstRedact: 4, last: 'Go', lastRedact: 3, institution: 'IIT Kharagpur', dept: 'CSE', areas: 'Computational Linguistics, Information Retrieval', hIndex: '30+' },
  { first: 'Su', firstRedact: 6, last: 'Sa', lastRedact: 4, institution: 'IIT Kharagpur', dept: 'CSE', areas: 'NLP, Recommender Systems, Indian Language Parsing', hIndex: '30+' },
  { first: 'Jo', firstRedact: 4, last: 'Ja', lastRedact: 3, institution: 'IIM Ahmedabad', dept: 'Finance', areas: 'Behavioral Finance, Empirical Asset Pricing', hIndex: '15+' },
  { first: 'So', firstRedact: 6, last: 'Ag', lastRedact: 7, institution: 'IIM Ahmedabad', dept: 'Finance', areas: 'Market Microstructure, Corporate Finance, Governance', hIndex: '15+', notable: 'Hari Mundra Research Chair' },
  { first: 'Pu', firstRedact: 4, last: 'Gh', lastRedact: 3, institution: 'IIM Bangalore', dept: 'Decision Sci.', areas: 'Fintech, Bayesian Statistics, Development Finance', hIndex: '25+', notable: 'NBER Associate' },
];

const TIERS = [
  { tier: 'Domain Lead', count: '12', desc: 'Senior faculty who design rubrics and review edge cases.', color: 'var(--color-signal)' },
  { tier: 'Senior Expert', count: '35', desc: 'Published researchers handling complex annotation tasks.', color: 'var(--color-text-secondary)' },
  { tier: 'Expert', count: '73+', desc: 'Vetted professionals who passed the full pipeline.', color: 'var(--color-text-muted)' },
];

/* ================================================================== */
/* REDACTED NAME                                                       */
/* ================================================================== */

function Redacted({ visible, len }: { visible: string; len: number }) {
  if (!visible) return null;
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 0 }}>
      <span style={{ color: 'var(--color-text-primary)' }}>{visible}</span>
      {len > 0 && (
        <span style={{
          display: 'inline-block', width: Math.max(len * 6.5, 20), height: 13,
          borderRadius: 2, marginLeft: 1,
          background: 'linear-gradient(90deg, rgba(255,122,69,0.18), rgba(255,122,69,0.06))',
          border: '1px solid rgba(255,122,69,0.1)',
          position: 'relative', overflow: 'hidden',
        }}>
          <span style={{
            position: 'absolute', inset: 0,
            backgroundImage: 'repeating-linear-gradient(90deg, rgba(255,122,69,0.1) 0px, rgba(255,122,69,0.1) 1px, transparent 1px, transparent 3px)',
          }} />
        </span>
      )}
    </span>
  );
}

function FullRedactedName({ first, firstRedact, last, lastRedact }: {
  first: string; firstRedact: number; last: string; lastRedact: number;
}) {
  return (
    <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', fontWeight: 500, display: 'inline-flex', alignItems: 'center', gap: 5 }}>
      <Redacted visible={first} len={firstRedact} />
      {last && <Redacted visible={last} len={lastRedact} />}
    </span>
  );
}

/* ================================================================== */
/* PAGE                                                                */
/* ================================================================== */

export default function ExpertsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--color-bg-base)' }}>

      {/* ── HERO ── */}
      <section>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: '80px var(--section-x) var(--space-12)' }}>
          <style>{`
            .exp-hero { display: grid; grid-template-columns: 1fr; gap: var(--space-8); }
            @media (min-width: 768px) { .exp-hero { grid-template-columns: 1.1fr 0.9fr; align-items: start; gap: var(--space-10); } }
          `}</style>
          <div className="exp-hero">
            {/* Left */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-5)' }}>
                <Users size={18} style={{ color: 'var(--color-signal)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-signal)' }}>
                  The Expert Network
                </span>
              </div>

              <h1 style={{
                fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)',
                lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)',
                color: 'var(--color-text-primary)', fontWeight: 400, margin: '0 0 var(--space-5)',
              }}>
                IIT &amp; IIM faculty.{' '}
                <span style={{ color: 'var(--color-signal)', fontStyle: 'italic' }}>Peer-reviewed rigor.</span>
              </h1>

              <p style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--text-lg)',
                lineHeight: 'var(--leading-relaxed)', color: 'var(--color-text-secondary)',
                maxWidth: 'min(480px, 100%)', margin: '0 0 var(--space-8)',
              }}>
                Professors and researchers who publish at NeurIPS, ACL, and in top-tier
                journals. Less than 8% of applicants make it through.
              </p>

              <div style={{ display: 'flex', gap: 'var(--space-3)', flexWrap: 'wrap' }}>
                <a href="/#contact" className="btn-primary" style={{ padding: '14px 28px', fontSize: 'var(--text-sm)' }}>
                  Get your data annotated <ArrowRight size={14} />
                </a>
                <ExpertApplyButton />
              </div>
            </div>

            {/* Right — dashboard panel */}
            <div style={{
              background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)', overflow: 'hidden',
            }}>
              {/* Stats row */}
              <div className="exp-stats-grid" style={{
                display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)',
                borderBottom: '1px solid var(--color-border)',
              }}>
                {[
                  { v: '120+', l: 'Experts' },
                  { v: '<8%', l: 'Accept Rate' },
                  { v: '30+', l: 'Avg h-index' },
                  { v: '4', l: 'Domains' },
                ].map(({ v, l }, i) => (
                  <div key={l} style={{
                    padding: 'var(--space-4) var(--space-5)',
                    borderRight: i % 2 === 0 ? '1px solid var(--color-border)' : 'none',
                    borderBottom: i < 2 ? '1px solid var(--color-border)' : 'none',
                  }}>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-lg)', fontWeight: 500, color: 'var(--color-signal)', lineHeight: 1 }}>{v}</div>
                    <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-text-faint)', letterSpacing: 'var(--tracking-wider)', marginTop: 4, textTransform: 'uppercase' }}>{l}</div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div style={{ padding: 'var(--space-4) var(--space-5)', borderBottom: '1px solid var(--color-border)' }}>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'EU AI Act', 'NDA'].map((c) => (
                    <span key={c} style={{
                      fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-text-muted)',
                      padding: '3px 7px', border: '1px solid var(--color-border)',
                      borderRadius: 'var(--radius-full)', letterSpacing: 'var(--tracking-wide)',
                    }}>{c}</span>
                  ))}
                </div>
              </div>

              {/* Trust */}
              <div style={{ padding: 'var(--space-4) var(--space-5)', display: 'flex', flexDirection: 'column', gap: 6 }}>
                {['Mutual NDA before data exchange', 'Full audit trail per annotation', 'Expert identity on file'].map((t) => (
                  <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <CheckCircle2 size={10} style={{ color: 'var(--color-signal)', flexShrink: 0 }} />
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-text-muted)' }}>{t}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIRECTORY ── */}
      <section style={{ borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'var(--section-y) var(--section-x)' }}>
          <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-3)', marginBottom: 'var(--space-8)' }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'var(--space-2)' }}>
                <div style={{ width: 20, height: 1, background: 'var(--color-signal)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-signal)' }}>Expert Directory</span>
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--color-text-primary)', fontWeight: 400, margin: 0 }}>
                Verified researchers &amp; faculty
              </h2>
            </div>
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-faint)',
              letterSpacing: 'var(--tracking-wide)', padding: '4px 12px',
              border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)',
              display: 'flex', alignItems: 'center', gap: 5,
            }}>
              <Shield size={10} /> Names redacted under NDA
            </span>
          </div>

          <style>{`
            .dir-header, .dir-row { display: none !important; }
            .dir-card { display: flex !important; }
            @media (min-width: 768px) {
              .dir-header, .dir-row { display: grid !important; }
              .dir-card { display: none !important; }
            }
          `}</style>

          {/* Sticky header */}
          <div className="dir-header" style={{
            gridTemplateColumns: '1.6fr 1fr 0.6fr 2.2fr 0.4fr',
            gap: 'var(--space-3)', padding: 'var(--space-3) var(--space-4)',
            borderBottom: '2px solid var(--color-border)',
            position: 'sticky', top: 56, zIndex: 10, background: 'var(--color-bg-base)',
          }}>
            {['Name', 'Institution', 'Dept', 'Research Areas', 'h-idx'].map((h) => (
              <span key={h} style={{
                fontFamily: 'var(--font-mono)', fontSize: '9px', letterSpacing: 'var(--tracking-wider)',
                textTransform: 'uppercase', color: 'var(--color-text-faint)',
                ...(h === 'h-idx' ? { textAlign: 'right' as const } : {}),
              }}>{h}</span>
            ))}
          </div>

          {DIRECTORY.map((d, i) => (
            <div key={i}>
              {/* Desktop */}
              <div className="dir-row" style={{
                gridTemplateColumns: '1.6fr 1fr 0.6fr 2.2fr 0.4fr',
                gap: 'var(--space-3)', padding: 'var(--space-3) var(--space-4)',
                borderBottom: '1px solid var(--color-border-subtle)', alignItems: 'center',
              }}>
                <div>
                  <FullRedactedName first={d.first} firstRedact={d.firstRedact} last={d.last} lastRedact={d.lastRedact} />
                  {d.notable && <div style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-signal)', letterSpacing: 'var(--tracking-wide)', marginTop: 3, opacity: 0.85 }}>{d.notable}</div>}
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '12px', color: 'var(--color-text-secondary)' }}>{d.institution}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-muted)' }}>{d.dept}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-normal)' }}>{d.areas}</span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', fontWeight: 500, textAlign: 'right' }}>{d.hIndex}</span>
              </div>

              {/* Mobile */}
              <div className="dir-card" style={{
                flexDirection: 'column' as const, gap: 'var(--space-2)',
                padding: 'var(--space-4) 0', borderBottom: '1px solid var(--color-border-subtle)',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <FullRedactedName first={d.first} firstRedact={d.firstRedact} last={d.last} lastRedact={d.lastRedact} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-faint)', padding: '2px 8px', border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)' }}>h:{d.hIndex}</span>
                </div>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-secondary)' }}>{d.institution} · {d.dept}</span>
                <span style={{ fontFamily: 'var(--font-body)', fontSize: '11px', color: 'var(--color-text-faint)', lineHeight: 'var(--leading-relaxed)' }}>{d.areas}</span>
                {d.notable && <span style={{ fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-signal)' }}>{d.notable}</span>}
              </div>
            </div>
          ))}

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-faint)', marginTop: 'var(--space-6)', letterSpacing: 'var(--tracking-wide)' }}>
            Showing 20 of 120+ active experts. Full directory available under NDA.
          </p>
        </div>
      </section>

      {/* ── VETTING + TIERS ── */}
      <section style={{ borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-surface)' }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'var(--section-y) var(--section-x)' }}>
          <style>{`
            .vet-tier { display: grid; grid-template-columns: 1fr; gap: var(--space-10); }
            @media (min-width: 768px) { .vet-tier { grid-template-columns: 1fr 1fr; } }
          `}</style>
          <div className="vet-tier">
            {/* Vetting */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'var(--space-6)' }}>
                <div style={{ width: 20, height: 1, background: 'var(--color-signal)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-signal)' }}>Vetting Process</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                {VETTING.map(({ icon: Icon, label, desc }, i) => (
                  <div key={label} style={{ display: 'flex', gap: 'var(--space-3)', alignItems: 'flex-start' }}>
                    <div style={{ width: 28, height: 28, borderRadius: '50%', flexShrink: 0, background: 'var(--color-signal-subtle)', border: '1px solid var(--color-signal-border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Icon size={12} style={{ color: 'var(--color-signal)' }} />
                    </div>
                    <div>
                      <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)', fontWeight: 500 }}>{label}</span>
                      <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)', margin: '2px 0 0' }}>{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tiers */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'var(--space-6)' }}>
                <div style={{ width: 20, height: 1, background: 'var(--color-signal)' }} />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-signal)' }}>Expert Tiers</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-3)' }}>
                {TIERS.map(({ tier, count, desc, color }) => (
                  <div key={tier} style={{
                    padding: 'var(--space-4) var(--space-5)', background: 'var(--color-bg-muted)',
                    border: '1px solid var(--color-border)', borderRadius: 'var(--radius-md)',
                    borderLeft: `3px solid ${color}`,
                  }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 2 }}>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '11px', letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase', color, fontWeight: 500 }}>{tier}</span>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: 'var(--text-base)', color: 'var(--color-text-primary)', fontWeight: 500 }}>{count}</span>
                    </div>
                    <p style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-muted)', margin: 0 }}>{desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ borderTop: '1px solid var(--color-border)', background: 'linear-gradient(180deg, var(--color-bg-base), #080808)' }}>
        <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto', padding: 'var(--space-16) var(--section-x)', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--color-text-primary)', fontWeight: 400, margin: '0 0 var(--space-3)' }}>
            Ready to work with our experts?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: '0 0 var(--space-6)' }}>
            Tell us your domain and scope. We&apos;ll handle the rest.
          </p>
          <a href="/#contact" className="btn-primary" style={{ padding: '14px 32px', fontSize: 'var(--text-sm)' }}>
            Get in Touch <ArrowRight size={14} />
          </a>
        </div>
      </section>
    </div>
  );
}
