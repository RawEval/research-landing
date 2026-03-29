'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Shield, FlaskConical, CheckCircle2,
  Activity, FileText, Users, Loader2, Send,
  Stethoscope, TrendingUp, Scale, Cpu, GraduationCap,
  X, Upload, ClipboardCheck, BarChart3, GitBranch,
  Layers, Target, Microscope, BookOpen, ScanSearch,
  RefreshCw, Fingerprint, AlertTriangle, Sparkles,
} from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';
import { InstitutionRibbon } from '@/components/institution-logos';
import { ExpertApplyButton } from '@/components/expert-modal';
import { useLenis } from '@/components/smooth-scroll';

/* ================================================================== */
/* DATA                                                                */
/* ================================================================== */

const DOMAINS = [
  { slug: 'healthcare', name: 'Healthcare', icon: Stethoscope, experts: '45+', sub: 'MDs, PhDs & clinical researchers from AIIMS, CMC & medical institutions' },
  { slug: 'finance', name: 'Finance', icon: TrendingUp, experts: '30+', sub: 'CFA charterholders, IIM faculty & quantitative researchers' },
  { slug: 'legal', name: 'Legal', icon: Scale, experts: '20+', sub: 'NLU alumni, practicing lawyers & policy analysts' },
  { slug: 'technology', name: 'Technology', icon: Cpu, experts: '25+', sub: 'IIT faculty, ML researchers & senior engineers' },
];

const STEPS: {
  num: string; title: string; desc: string; icon: typeof Activity;
  tag: string; detail: {
    heading: string; intro: string;
    points: { icon: typeof Activity; label: string; text: string }[];
    footnote: string;
  };
}[] = [
  {
    num: '01', title: 'Ingest & scope', icon: Upload, tag: 'Data onboarding',
    desc: 'Send model outputs, benchmarks, or raw corpora. We co-design the annotation schema, rubric, evaluation dimensions, and annotator allocation with your team.',
    detail: {
      heading: 'Data Onboarding',
      intro: 'Every engagement starts with a scoping call where we align on taxonomy, edge-case definitions, evaluation dimensions, annotator depth, and success metrics — before a single label is placed.',
      points: [
        { icon: Layers, label: 'Format-agnostic intake', text: 'JSONL, Parquet, CSV, PDF corpora, HuggingFace Datasets, API exports — we normalize everything into our internal pipeline via RawEval Ingest\u2122. No reformatting on your end.' },
        { icon: GitBranch, label: 'Rubric & ontology co-design', text: 'Our ontology team builds custom annotation guidelines with you — Likert scales, pairwise preference ranking, span-level tagging, multi-dimensional rubrics, or DPO preference pairs. We iterate until the guideline document passes a pilot round with \u22650.85 inter-annotator agreement.' },
        { icon: Users, label: 'Flexible annotator allocation', text: 'You define the depth. Single-expert review for straightforward labeling, 3\u20135 annotators for multi-blind consensus, 7+ for high-stakes safety or regulatory tasks. Per-task annotator count is fully configurable — our Workbench\u2122 dynamically allocates from the qualified pool based on your schema.' },
        { icon: Target, label: 'Pilot calibration', text: 'Before full annotation begins, we run a 50\u2013100 sample pilot. Annotators are calibrated against gold-standard labels and each other. Only annotators who clear the calibration threshold proceed to production tasks.' },
      ],
      footnote: 'Average onboarding time: 3\u20135 business days from data receipt to first annotated batch.',
    },
  },
  {
    num: '02', title: 'Expert annotation', icon: ClipboardCheck, tag: 'Workbench\u2122',
    desc: 'Domain experts annotate through RawEval Workbench\u2122 — single-expert, multi-blind, or tiered review. You choose the depth; we match the expertise.',
    detail: {
      heading: 'RawEval Workbench\u2122',
      intro: 'Workbench\u2122 is our proprietary annotation environment built for research-grade tasks. It supports RLHF preference ranking, SFT demonstrations, safety red-teaming, evaluation benchmarks, and custom schemas — with configurable annotator depth per task.',
      points: [
        { icon: Users, label: 'Configurable annotation modes', text: 'Solo Expert: single credentialed annotator for high-throughput labeling. Multi-Blind: 2\u20137+ independent annotators per sample with no label visibility between them. Tiered Review: junior annotators label, senior domain experts audit, faculty-level adjudicators resolve edge cases. You set the annotator count per task — or let our routing engine auto-assign based on task complexity.' },
        { icon: Microscope, label: 'Expertise-matched routing', text: 'A cardiology question goes to MDs with cardiology training, not a general practitioner. A derivatives pricing task goes to CFA charterholders, not MBA generalists. Our routing engine matches task taxonomy to annotator credentials at the sub-domain level — powered by RawEval ExpertGraph\u2122.' },
        { icon: BookOpen, label: 'Adjudication protocol', text: 'When annotators disagree, we don\u2019t majority-vote. A senior domain expert (typically faculty-level) reviews the disputed sample, writes a justification, and renders a final label. Every adjudication is logged and shipped with your data.' },
        { icon: AlertTriangle, label: 'Red-teaming & adversarial evaluation', text: 'For safety and alignment work, our annotators systematically probe for model vulnerabilities \u2014 jailbreaks, harmful completions, refusal failures, and cultural insensitivity. Exploit categories are tracked and categorized across sessions via Workbench\u2122\u2019s adversarial module.' },
      ],
      footnote: 'Less than 8% of applicants are accepted. Average inter-annotator agreement: \u03ba\u2009=\u20090.87.',
    },
  },
  {
    num: '03', title: 'Autoreview & QA', icon: ScanSearch, tag: 'Sentinel\u2122',
    desc: 'Every label runs through Sentinel\u2122 \u2014 automated quality gates, honeypot scoring, per-annotator trust tracking, and model-assisted consistency checks.',
    detail: {
      heading: 'RawEval Sentinel\u2122',
      intro: 'Human expertise alone isn\u2019t enough at scale. Sentinel\u2122 is our automated review engine that runs quality checks on every annotation \u2014 per-annotator, per-batch, and project-wide \u2014 before anything reaches your training data.',
      points: [
        { icon: Sparkles, label: 'Model-in-the-loop validation', text: 'A secondary model cross-checks every human annotation for internal consistency, schema compliance, and label-rationale alignment. Flagged samples are re-routed for human re-evaluation \u2014 not silently corrected. Sentinel\u2122 never overrides human judgment; it surfaces what needs a second look.' },
        { icon: Fingerprint, label: 'Honeypot injection & TrustScore\u2122', text: 'Expert-labeled ground-truth samples are injected into every queue without annotators\u2019 knowledge. Per-annotator accuracy is continuously scored against these hidden benchmarks into a rolling TrustScore\u2122. Annotators who drift below threshold are paused and recalibrated \u2014 automatically.' },
        { icon: RefreshCw, label: 'Drift detection & recalibration', text: 'Sentinel\u2122 monitors inter-rater agreement, label distribution skew, and per-annotator accuracy trends across batches in real time. If quality metrics drift below project thresholds, the batch is paused, the team recalibrated, and affected samples re-annotated.' },
        { icon: BarChart3, label: 'Accord\u2122 consensus engine', text: 'Accord\u2122 computes per-sample consensus across all annotators \u2014 whether that\u2019s 2 or 12. Outlier annotations are flagged, reviewed, and either adjudicated or re-queued. Works across single-expert, multi-blind, and tiered review modes. You receive full transparency into agreement breakdowns \u2014 no black-box quality scores.' },
      ],
      footnote: 'Sentinel\u2122 catches an average of 12% of annotations that would otherwise require post-hoc correction.',
    },
  },
  {
    num: '04', title: 'Delivery & provenance', icon: FileText, tag: 'Research-ready output',
    desc: 'Training-ready datasets with full Sentinel\u2122 audit trails, IAA reports, TrustScore\u2122 breakdowns, and annotator credential metadata.',
    detail: {
      heading: 'What You Receive',
      intro: 'You don\u2019t get a CSV of labels. You get a complete provenance package \u2014 designed to feed directly into your RLHF, SFT, or evaluation pipeline, attach to model cards, and hold up under peer review. Every metric is traceable back to the annotator, the quality gate, and the guideline version that produced it.',
      points: [
        { icon: FileText, label: 'Annotation package', text: 'Final labels in your preferred format (JSONL, Parquet, HuggingFace Dataset). Every row includes: annotator pseudonym, TrustScore\u2122 at time of annotation, timestamp, confidence score, and free-text rationale. Preference pairs are margin-gated for reward model training.' },
        { icon: FlaskConical, label: 'Sentinel\u2122 quality report', text: 'A detailed report with inter-annotator agreement metrics, confusion matrices, label distribution analysis, Sentinel\u2122 autoreview pass rates, TrustScore\u2122 distributions, and a full breakdown of adjudicated disagreements. Ready to plug into your training pipeline or drop into a paper\u2019s appendix.' },
        { icon: Shield, label: 'Annotator credential sheet', text: 'Anonymized credential metadata for each annotator: degree level, institution tier, years of domain experience, h-index range, and relevant publication count. Reviewers can verify expertise without compromising annotator identity.' },
        { icon: Layers, label: 'Guidelines, changelog & audit trail', text: 'The full guideline document, edge-case rulings, mid-project refinements, Sentinel\u2122 configuration, and Accord\u2122 consensus thresholds. Versioned so you can trace exactly what instructions and quality gates produced each label.' },
      ],
      footnote: 'Typical turnaround: 7\u201314 days for 1,000 samples. Expedited delivery and continuous pipeline integrations available.',
    },
  },
];

/* ================================================================== */
/* PAGE                                                                */
/* ================================================================== */

export default function Home() {
  return (
    <div>
      <Hero />
      <Marquee />
      <Domains />
      <Pipeline />
      <ExpertStrip />
      <Contact />
    </div>
  );
}

/* ================================================================== */
/* HERO                                                                */
/* ================================================================== */

function Hero() {
  return (
    <section style={{
      padding: 'var(--space-24) var(--section-x) var(--space-16)',
      maxWidth: 'var(--max-content)', margin: '0 auto',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'var(--space-6)',
        animation: 'fade-up 0.6s ease-out forwards', opacity: 0,
      }}>
        <div style={{ width: 20, height: 1, background: 'var(--color-signal)' }} />
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px',
          letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase',
          color: 'var(--color-signal)',
        }}>Expert AI Evaluation Data</span>
      </div>

      <h1 style={{
        fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 5vw, 64px)',
        lineHeight: 'var(--leading-tight)', letterSpacing: 'var(--tracking-tight)',
        color: 'var(--color-text-primary)', maxWidth: '780px',
        margin: '0 0 var(--space-6)',
        animation: 'fade-up 0.6s ease-out 0.1s forwards', opacity: 0,
      }}>
        AI evaluation by{' '}
        <span style={{ color: 'var(--color-signal)', fontStyle: 'italic' }}>IIT &amp; IIM faculty.</span>{' '}
        Not crowdworkers.
      </h1>

      <p style={{
        fontSize: 'var(--text-lg)', lineHeight: 'var(--leading-relaxed)',
        color: 'var(--color-text-secondary)', maxWidth: '560px',
        margin: '0 0 var(--space-8)',
        animation: 'fade-up 0.6s ease-out 0.2s forwards', opacity: 0,
      }}>
        Our expert network is anchored by professors and researchers from
        India&apos;s top institutions. They publish in NeurIPS, ACL, and top
        journals. They review your AI&apos;s outputs with the same rigor.
      </p>

      <div style={{
        display: 'flex', alignItems: 'center', gap: 'var(--space-4)', flexWrap: 'wrap',
        animation: 'fade-up 0.6s ease-out 0.3s forwards', opacity: 0,
      }}>
        <a href="#contact" className="btn-primary" style={{ padding: '14px 32px', fontSize: 'var(--text-sm)' }}>
          Get Your Data Annotated <ArrowRight size={16} />
        </a>
        <Link href="/experts" className="btn-secondary" style={{ padding: '14px 32px', fontSize: 'var(--text-sm)' }}>
          View Expert Network <ArrowRight size={14} />
        </Link>
      </div>

      {/* Credibility strip */}
      <div style={{
        marginTop: 'var(--space-10)', paddingTop: 'var(--space-6)',
        borderTop: '1px solid var(--color-border)',
        display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
        animation: 'fade-up 0.6s ease-out 0.4s forwards', opacity: 0,
      }}>
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-muted)',
          letterSpacing: 'var(--tracking-wide)',
          padding: '6px 14px', borderRadius: 'var(--radius-full)',
          border: '1px solid var(--color-border)', background: 'var(--color-bg-surface)',
          alignSelf: 'flex-start',
        }}>
          Built by ex-Mercor &middot; 1% Club &middot; Futurense
        </span>

        <div style={{ display: 'flex', gap: 'var(--space-4)', flexWrap: 'wrap' }}>
          {[
            { icon: Shield, text: 'Human-verified' },
            { icon: FlaskConical, text: 'Multi-annotator IAA' },
            { icon: CheckCircle2, text: '120+ vetted experts' },
          ].map(({ icon: Icon, text }) => (
            <div key={text} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <Icon size={12} style={{ color: 'var(--color-text-faint)' }} />
              <span style={{ fontFamily: 'var(--font-body)', fontSize: '12px', color: 'var(--color-text-muted)' }}>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* MARQUEE                                                             */
/* ================================================================== */

function Marquee() {
  return (
    <div style={{
      padding: 'var(--space-6) 0 var(--space-4)',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
    }}>
      <p style={{
        fontFamily: 'var(--font-mono)', fontSize: '10px',
        letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase',
        color: 'var(--color-text-faint)', textAlign: 'center',
        margin: '0 0 var(--space-4)',
      }}>Our experts come from</p>
      <InstitutionRibbon />
    </div>
  );
}

/* ================================================================== */
/* DOMAINS                                                             */
/* ================================================================== */

function Domains() {
  return (
    <section style={{ padding: 'var(--space-16) var(--section-x)' }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{
            display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'var(--space-8)',
          }}>
            <div style={{ width: 20, height: 1, background: 'var(--color-signal)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase',
              color: 'var(--color-signal)',
            }}>Domains</span>
          </div>
        </ScrollReveal>

        <div className="grid-cols-2-md" style={{ gap: 'var(--space-4)' }}>
          {DOMAINS.map(({ slug, name, icon: Icon, experts, sub }, i) => (
            <ScrollReveal key={slug} delay={i * 80}>
              <Link href={`/domains/${slug}`} className="card-surface hover-glow" style={{
                padding: 'var(--space-5) var(--space-6)', display: 'flex', alignItems: 'center',
                gap: 'var(--space-4)', textDecoration: 'none', color: 'inherit',
              }}>
                <div style={{
                  width: 40, height: 40, borderRadius: 'var(--radius-md)', flexShrink: 0,
                  background: 'var(--color-signal-subtle)', border: '1px solid var(--color-signal-border)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={18} style={{ color: 'var(--color-signal)' }} />
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 'var(--space-2)', marginBottom: 2 }}>
                    <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-primary)', fontWeight: 500 }}>{name}</span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-signal)', letterSpacing: 'var(--tracking-wide)' }}>{experts}</span>
                  </div>
                  <span style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)' }}>{sub}</span>
                </div>
                <ArrowRight size={16} className="domain-arrow" style={{ color: 'var(--color-text-faint)', flexShrink: 0 }} />
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================================================================== */
/* PIPELINE                                                            */
/* ================================================================== */

function Pipeline() {
  const [openStep, setOpenStep] = useState<number | null>(null);

  return (
    <section id="pipeline" style={{
      padding: 'var(--space-16) var(--section-x)',
      borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-surface)',
    }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'var(--space-3)' }}>
            <div style={{ width: 20, height: 1, background: 'var(--color-signal)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-signal)',
            }}>How It Works</span>
          </div>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)',
            margin: '0 0 var(--space-8)', maxWidth: 580, lineHeight: 'var(--leading-relaxed)',
          }}>
            A research-grade annotation pipeline powered by Workbench™, Sentinel™ autoreview, and Accord™ consensus — built for AI labs that need configurable annotator depth, per-annotator trust scoring, and training-ready provenance. Click any step to see the details.
          </p>
        </ScrollReveal>

        <div className="grid-cols-2-md" style={{ gap: 'var(--space-4)' }}>
          {STEPS.map((step, i) => (
            <ScrollReveal key={step.num} delay={i * 100}>
              <button
                onClick={() => setOpenStep(i)}
                style={{
                  all: 'unset', boxSizing: 'border-box', cursor: 'pointer', width: '100%',
                  padding: 'var(--space-6)', background: 'var(--color-bg-muted)',
                  border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)',
                  display: 'flex', flexDirection: 'column', height: '100%',
                  transition: 'border-color 0.2s ease, background 0.2s ease',
                }}
                className="pipeline-card"
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: 'var(--space-4)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
                    <div style={{
                      width: 36, height: 36, borderRadius: '50%',
                      background: 'var(--color-signal-subtle)', border: '1px solid var(--color-signal-border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <step.icon size={16} style={{ color: 'var(--color-signal)' }} />
                    </div>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-faint)', letterSpacing: 'var(--tracking-wider)' }}>
                      STEP {step.num}
                    </span>
                  </div>
                  <span style={{
                    fontFamily: 'var(--font-mono)', fontSize: '9px', color: 'var(--color-signal)',
                    letterSpacing: 'var(--tracking-wide)', opacity: 0.7,
                    padding: '3px 8px', borderRadius: 'var(--radius-full)',
                    border: '1px solid var(--color-signal-border)',
                  }}>{step.tag}</span>
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
                  color: 'var(--color-text-primary)', fontWeight: 500,
                  margin: '0 0 var(--space-2)', textAlign: 'left',
                }}>{step.title}</h3>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)',
                  margin: '0 0 var(--space-4)', textAlign: 'left', flex: 1,
                }}>{step.desc}</p>
                <span style={{
                  fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-faint)',
                  display: 'flex', alignItems: 'center', gap: 4,
                }}>
                  Learn more <ArrowRight size={12} />
                </span>
              </button>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div style={{ marginTop: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['SOC 2 Type II', 'ISO 27001', 'ISO 42001', 'HIPAA BAA', 'GDPR', 'Air-gapped deploy', 'Per-project NDA'].map((b) => (
              <span key={b} style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-faint)',
                letterSpacing: 'var(--tracking-wide)', padding: '4px 10px',
                border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)',
              }}>{b}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>

      {openStep !== null && (
        <PipelineModal step={STEPS[openStep]!} onClose={() => setOpenStep(null)} />
      )}
    </section>
  );
}

function PipelineModal({ step, onClose }: { step: typeof STEPS[number]; onClose: () => void }) {
  const lenis = useLenis();

  useEffect(() => {
    lenis.stop();
    document.body.style.overflow = 'hidden';
    return () => {
      lenis.start();
      document.body.style.overflow = '';
    };
  }, [lenis]);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 100,
        background: 'rgba(0,0,0,0.7)', backdropFilter: 'blur(8px)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: 'var(--space-4)', animation: 'fade-in 0.15s ease-out',
        overflowY: 'auto',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
        style={{
          width: '100%', maxWidth: 'min(600px, 100%)', maxHeight: '90vh', overflowY: 'auto',
          background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)',
          borderRadius: 'var(--radius-xl)', position: 'relative',
        }}
      >
        {/* Header */}
        <div style={{
          padding: 'var(--space-5) var(--space-6)',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'sticky', top: 0, background: 'var(--color-bg-surface)',
          borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0', zIndex: 2,
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
            <div style={{
              width: 36, height: 36, borderRadius: '50%',
              background: 'var(--color-signal-subtle)', border: '1px solid var(--color-signal-border)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <step.icon size={16} style={{ color: 'var(--color-signal)' }} />
            </div>
            <div>
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
                color: 'var(--color-text-primary)', fontWeight: 500,
              }}>{step.detail.heading}</div>
              <div style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-faint)',
                letterSpacing: 'var(--tracking-wide)', marginTop: 1,
              }}>STEP {step.num} — {step.tag.toUpperCase()}</div>
            </div>
          </div>
          <button onClick={onClose} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 8, display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--color-text-muted)', borderRadius: 'var(--radius-sm)',
          }}>
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: 'var(--space-6)' }}>
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
            color: 'var(--color-text-secondary)', lineHeight: 'var(--leading-relaxed)',
            margin: '0 0 var(--space-6)',
          }}>
            {step.detail.intro}
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {step.detail.points.map((pt) => (
              <div key={pt.label} style={{
                padding: 'var(--space-4) var(--space-5)',
                background: 'var(--color-bg-muted)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-md)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-2)', marginBottom: 'var(--space-2)' }}>
                  <pt.icon size={14} style={{ color: 'var(--color-signal)', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
                    color: 'var(--color-text-primary)', fontWeight: 500,
                  }}>{pt.label}</span>
                </div>
                <p style={{
                  fontFamily: 'var(--font-body)', fontSize: '13px',
                  color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)',
                  margin: 0,
                }}>
                  {pt.text}
                </p>
              </div>
            ))}
          </div>

          <div style={{
            marginTop: 'var(--space-5)', padding: 'var(--space-3) var(--space-4)',
            borderRadius: 'var(--radius-md)', background: 'var(--color-signal-subtle)',
            border: '1px solid var(--color-signal-border)',
          }}>
            <p style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-signal)',
              margin: 0, letterSpacing: 'var(--tracking-wide)',
            }}>
              {step.detail.footnote}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/* EXPERT STRIP — separate CTA for experts to join                     */
/* ================================================================== */

function ExpertStrip() {
  return (
    <section style={{
      borderTop: '1px solid var(--color-border)',
      background: 'var(--color-bg-base)',
    }}>
      <div style={{
        maxWidth: 'var(--max-content)', margin: '0 auto',
        padding: 'var(--space-10) var(--section-x)',
      }}>
        <ScrollReveal>
          <div className="expert-strip-inner" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            flexWrap: 'wrap', gap: 'var(--space-5)',
            padding: 'var(--space-6) var(--space-6)',
            background: 'var(--color-bg-surface)',
            border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-4)' }}>
              <div style={{
                width: 40, height: 40, borderRadius: 'var(--radius-md)',
                background: 'var(--color-signal-subtle)', border: '1px solid var(--color-signal-border)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}>
                <GraduationCap size={18} style={{ color: 'var(--color-signal)' }} />
              </div>
              <div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)',
                  color: 'var(--color-text-primary)', fontWeight: 500,
                }}>Are you a domain expert?</div>
                <div style={{
                  fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
                  color: 'var(--color-text-muted)',
                }}>IIT/IIM faculty, PhD students &amp; researchers — join our annotation network.</div>
              </div>
            </div>
            <ExpertApplyButton />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ================================================================== */
/* CONTACT                                                             */
/* ================================================================== */

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', org: '', message: '' });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const update = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));
  const canSend = form.name.trim() && form.email.trim() && form.org.trim();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    setError(null);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.error || 'Something went wrong. Please try again.');
        return;
      }

      setSent(true);
    } catch {
      setError('Network error. Please check your connection and try again.');
    } finally {
      setSending(false);
    }
  }

  const input: React.CSSProperties = {
    width: '100%', padding: '11px 14px', fontFamily: 'var(--font-body)',
    fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)',
    background: 'var(--color-bg-base)', border: '1px solid var(--color-border)',
    borderRadius: 'var(--radius-md)', outline: 'none',
  };

  if (sent) {
    return (
      <section id="contact" style={{ padding: 'var(--space-20) var(--section-x)', borderTop: '1px solid var(--color-border)' }}>
        <div style={{ maxWidth: 'min(420px, 100%)', margin: '0 auto', textAlign: 'center' }}>
          <div style={{
            width: 56, height: 56, borderRadius: '50%', margin: '0 auto var(--space-5)',
            background: 'var(--color-signal-subtle)', border: '1px solid var(--color-signal-border)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <CheckCircle2 size={24} style={{ color: 'var(--color-signal)' }} />
          </div>
          <h3 style={{
            fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)',
            color: 'var(--color-text-primary)', margin: '0 0 var(--space-2)',
          }}>
            Message sent
          </h3>
          <p style={{
            fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)',
            margin: '0 0 var(--space-5)', lineHeight: 'var(--leading-relaxed)',
          }}>
            Thanks, {form.name.split(' ')[0]}. We&apos;ll get back to you within 24 hours.
          </p>
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '11px', color: 'var(--color-text-faint)',
            letterSpacing: 'var(--tracking-wide)',
            padding: '6px 14px', borderRadius: 'var(--radius-full)',
            border: '1px solid var(--color-border)', background: 'var(--color-bg-surface)',
          }}>
            Check your inbox for a confirmation
          </span>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" style={{ padding: 'var(--space-16) var(--section-x)', borderTop: '1px solid var(--color-border)' }}>
      <div style={{ maxWidth: 'min(480px, 100%)', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: 'var(--space-8)' }}>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-2xl)', color: 'var(--color-text-primary)', fontWeight: 400, margin: '0 0 var(--space-2)' }}>Get in touch</h2>
            <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: 0 }}>
              Tell us what you&apos;re working on. We&apos;ll figure out the rest.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={100}>
          <form onSubmit={submit} style={{
            background: 'var(--color-bg-surface)', border: '1px solid var(--color-border)',
            borderRadius: 'var(--radius-xl)', padding: 'var(--space-6)',
            display: 'flex', flexDirection: 'column', gap: 'var(--space-4)',
          }}>
            <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
              <div>
                <Label text="Name" required />
                <input type="text" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Jane Smith" style={input} />
              </div>
              <div>
                <Label text="Work email" required />
                <input type="email" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="jane@company.com" style={input} />
              </div>
            </div>
            <div>
              <Label text="Organization" required />
              <input type="text" value={form.org} onChange={(e) => update('org', e.target.value)} placeholder="Company or institution" style={input} />
            </div>
            <div>
              <Label text="What are you working on?" />
              <textarea value={form.message} onChange={(e) => update('message', e.target.value)} rows={3} placeholder="Brief description" style={{ ...input, resize: 'vertical', minHeight: 72 }} />
            </div>
            {error && (
              <div style={{
                fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)',
                color: '#ef4444', padding: '8px 12px',
                background: 'rgba(239,68,68,0.1)',
                borderRadius: 'var(--radius-md)',
                border: '1px solid rgba(239,68,68,0.2)',
              }}>{error}</div>
            )}
            <button type="submit" className="btn-primary" disabled={!canSend || sending} style={{
              width: '100%', padding: '12px', fontSize: 'var(--text-sm)',
              opacity: (!canSend || sending) ? 0.5 : 1,
              cursor: (!canSend || sending) ? 'not-allowed' : 'pointer',
            }}>
              {sending ? <><Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} /> Sending...</> : <><Send size={14} /> Get in Touch</>}
            </button>
          </form>
        </ScrollReveal>
      </div>
    </section>
  );
}

function Label({ text, required }: { text: string; required?: boolean }) {
  return (
    <label style={{
      display: 'block', fontFamily: 'var(--font-mono)', fontSize: '10px',
      letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase',
      color: 'var(--color-text-muted)', marginBottom: 'var(--space-2)',
    }}>
      {text}{required && <span style={{ color: 'var(--color-signal)', marginLeft: 3 }}>*</span>}
    </label>
  );
}
