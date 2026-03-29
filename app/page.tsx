'use client';

import { useState } from 'react';
import Link from 'next/link';
import {
  ArrowRight, Shield, FlaskConical, CheckCircle2,
  Activity, FileText, Users, Loader2, Send,
  Stethoscope, TrendingUp, Scale, Cpu, GraduationCap,
} from 'lucide-react';
import { ScrollReveal } from '@/components/scroll-reveal';
import { InstitutionRibbon } from '@/components/institution-logos';
import { ExpertApplyButton } from '@/components/expert-modal';

/* ================================================================== */
/* DATA                                                                */
/* ================================================================== */

const DOMAINS = [
  { slug: 'healthcare', name: 'Healthcare', icon: Stethoscope, experts: '45+', sub: 'MDs, PhDs & clinical researchers from AIIMS, CMC & medical institutions' },
  { slug: 'finance', name: 'Finance', icon: TrendingUp, experts: '30+', sub: 'CFA charterholders, IIM faculty & quantitative researchers' },
  { slug: 'legal', name: 'Legal', icon: Scale, experts: '20+', sub: 'NLU alumni, practicing lawyers & policy analysts' },
  { slug: 'technology', name: 'Technology', icon: Cpu, experts: '25+', sub: 'IIT faculty, ML researchers & senior engineers' },
];

const STEPS = [
  { num: '01', title: 'Share your data', desc: 'Send us model outputs or evaluation benchmarks — or use our existing datasets.', icon: Activity },
  { num: '02', title: 'Expert evaluation', desc: 'IIT/IIM faculty and domain specialists evaluate through structured rubrics.', icon: Users },
  { num: '03', title: 'Get results', desc: 'Clean annotated data with full provenance — any format, research-ready.', icon: FileText },
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
        <a href="#contact" className="btn-primary" style={{ padding: '14px 28px', fontSize: 'var(--text-sm)' }}>
          Get Your Data Annotated <ArrowRight size={16} />
        </a>
        <Link href="/experts" className="btn-secondary" style={{ padding: '14px 28px', fontSize: 'var(--text-sm)' }}>
          View Expert Network
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
      padding: 'var(--space-4) 0',
      borderTop: '1px solid var(--color-border)',
      borderBottom: '1px solid var(--color-border)',
    }}>
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
  return (
    <section id="pipeline" style={{
      padding: 'var(--space-16) var(--section-x)',
      borderTop: '1px solid var(--color-border)', background: 'var(--color-bg-surface)',
    }}>
      <div style={{ maxWidth: 'var(--max-content)', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 'var(--space-8)' }}>
            <div style={{ width: 20, height: 1, background: 'var(--color-signal)' }} />
            <span style={{
              fontFamily: 'var(--font-mono)', fontSize: '11px',
              letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--color-signal)',
            }}>How It Works</span>
          </div>
        </ScrollReveal>

        <div className="grid-cols-3-md" style={{ gap: 'var(--space-4)' }}>
          {STEPS.map(({ num, title, desc, icon: Icon }, i) => (
            <ScrollReveal key={num} delay={i * 100}>
              <div style={{
                padding: 'var(--space-6)', background: 'var(--color-bg-muted)',
                border: '1px solid var(--color-border)', borderRadius: 'var(--radius-lg)', height: '100%',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', marginBottom: 'var(--space-4)' }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: '50%',
                    background: 'var(--color-signal-subtle)', border: '1px solid var(--color-signal-border)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}>
                    <Icon size={14} style={{ color: 'var(--color-signal)' }} />
                  </div>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-faint)', letterSpacing: 'var(--tracking-wider)' }}>{num}</span>
                </div>
                <h3 style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-primary)', fontWeight: 500, margin: '0 0 var(--space-2)' }}>{title}</h3>
                <p style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', lineHeight: 'var(--leading-relaxed)', margin: 0 }}>{desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={200}>
          <div style={{ marginTop: 'var(--space-6)', display: 'flex', alignItems: 'center', gap: 'var(--space-3)', flexWrap: 'wrap', justifyContent: 'center' }}>
            {['SOC 2', 'ISO 27001', 'HIPAA', 'GDPR', 'NDA'].map((b) => (
              <span key={b} style={{
                fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-faint)',
                letterSpacing: 'var(--tracking-wide)', padding: '4px 10px',
                border: '1px solid var(--color-border)', borderRadius: 'var(--radius-full)',
              }}>{b}</span>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
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

  const update = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));
  const canSend = form.name.trim() && form.email.trim() && form.org.trim();

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    setSending(false);
    setSent(true);
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
          <CheckCircle2 size={32} style={{ color: 'var(--color-signal)', marginBottom: 'var(--space-4)' }} />
          <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--color-text-primary)', margin: '0 0 var(--space-2)' }}>
            We&apos;ll be in touch
          </h3>
          <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: 0 }}>
            Thanks, {form.name.split(' ')[0]}. Expect to hear from us within 48 hours.
          </p>
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
