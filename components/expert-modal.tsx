'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';
import { useLenis } from '@/components/smooth-scroll';

const ROLES = [
  'Professor / Associate Professor',
  'Assistant Professor',
  'Postdoctoral Researcher',
  'PhD Student',
  'Industry Researcher',
  'Independent Researcher',
];

const DOMAINS = [
  'Machine Learning / AI',
  'Natural Language Processing',
  'Computer Vision',
  'Healthcare / Biomedical',
  'Finance / Economics',
  'Legal / Policy',
  'Data Science / Analytics',
  'Other',
];

const input: React.CSSProperties = {
  width: '100%', padding: '10px 12px', fontFamily: 'var(--font-body)',
  fontSize: 'var(--text-sm)', color: 'var(--color-text-primary)',
  background: 'var(--color-bg-base)', border: '1px solid var(--color-border)',
  borderRadius: 'var(--radius-md)', outline: 'none',
};

export function ExpertApplyButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="btn-primary"
        style={{ padding: '14px 28px', fontSize: 'var(--text-sm)' }}
      >
        Apply as Expert <ArrowRight size={14} />
      </button>
      {open && <ExpertModal onClose={() => setOpen(false)} />}
    </>
  );
}

function ExpertModal({ onClose }: { onClose: () => void }) {
  const lenis = useLenis();

  useEffect(() => {
    lenis.stop();
    document.body.style.overflow = 'hidden';
    return () => {
      lenis.start();
      document.body.style.overflow = '';
    };
  }, [lenis]);

  const [form, setForm] = useState({
    name: '', email: '', institution: '', role: '',
    department: '', domain: '', scholar: '', hIndex: '', bio: '',
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const u = (f: string, v: string) => setForm((p) => ({ ...p, [f]: v }));
  const canSend = form.name.trim() && form.email.trim() && form.institution.trim() && form.role;

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 2000));
    setSending(false);
    setSent(true);
  }

  return createPortal(
    <div
      className="expert-modal-overlay"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div className="expert-modal-panel">
        {/* Header */}
        <div style={{
          padding: 'var(--space-5) var(--space-6)',
          borderBottom: '1px solid var(--color-border)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          position: 'sticky', top: 0, background: 'var(--color-bg-surface)',
          borderRadius: 'var(--radius-xl) var(--radius-xl) 0 0', zIndex: 2,
        }}>
          <div>
            <div style={{ fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--color-text-primary)', fontWeight: 500 }}>
              Join the Expert Network
            </div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-faint)', letterSpacing: 'var(--tracking-wide)', marginTop: 2 }}>
              Application reviewed within 48 hours
            </div>
          </div>
          <button onClick={onClose} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            padding: 8, minWidth: 44, minHeight: 44,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            color: 'var(--color-text-muted)', borderRadius: 'var(--radius-sm)',
          }}>
            <X size={18} />
          </button>
        </div>

        {/* Body */}
        <div style={{ padding: 'var(--space-6)' }}>
          {sent ? (
            <div style={{ textAlign: 'center', padding: 'var(--space-8) 0' }}>
              <CheckCircle2 size={36} style={{ color: 'var(--color-signal)', marginBottom: 'var(--space-4)' }} />
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-xl)', color: 'var(--color-text-primary)', margin: '0 0 var(--space-3)' }}>
                Application received
              </h3>
              <p style={{ fontSize: 'var(--text-sm)', color: 'var(--color-text-muted)', margin: '0 0 var(--space-2)', lineHeight: 'var(--leading-relaxed)' }}>
                Thank you, {form.name.split(' ')[0]}. We&apos;ll review your credentials and
                reach out to <strong style={{ color: 'var(--color-text-secondary)' }}>{form.email}</strong> within 48 hours.
              </p>
              <p style={{ fontSize: '12px', color: 'var(--color-text-faint)', margin: '0 0 var(--space-6)' }}>
                Less than 8% of applicants are accepted into our network.
              </p>
              <button onClick={onClose} className="btn-secondary" style={{ fontSize: 'var(--text-sm)', padding: '10px 24px' }}>
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <Field label="Full name" required>
                  <input type="text" value={form.name} onChange={(e) => u('name', e.target.value)} placeholder="Dr. Jane Smith" style={input} />
                </Field>
                <Field label="Email" required>
                  <input type="email" value={form.email} onChange={(e) => u('email', e.target.value)} placeholder="jane@iitb.ac.in" style={input} />
                </Field>
              </div>

              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <Field label="Institution" required>
                  <input type="text" value={form.institution} onChange={(e) => u('institution', e.target.value)} placeholder="IIT Bombay" style={input} />
                </Field>
                <Field label="Department">
                  <input type="text" value={form.department} onChange={(e) => u('department', e.target.value)} placeholder="Computer Science" style={input} />
                </Field>
              </div>

              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-4)' }}>
                <Field label="Current role" required>
                  <select value={form.role} onChange={(e) => u('role', e.target.value)} style={{
                    ...input, appearance: 'none',
                    color: form.role ? 'var(--color-text-primary)' : 'var(--color-text-faint)',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2385858F\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: 32,
                  }}>
                    <option value="" disabled>Select role</option>
                    {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
                  </select>
                </Field>
                <Field label="Domain expertise">
                  <select value={form.domain} onChange={(e) => u('domain', e.target.value)} style={{
                    ...input, appearance: 'none',
                    color: form.domain ? 'var(--color-text-primary)' : 'var(--color-text-faint)',
                    backgroundImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' width=\'12\' height=\'12\' viewBox=\'0 0 24 24\' fill=\'none\' stroke=\'%2385858F\' stroke-width=\'2\'%3E%3Cpolyline points=\'6 9 12 15 18 9\'%3E%3C/polyline%3E%3C/svg%3E")',
                    backgroundRepeat: 'no-repeat', backgroundPosition: 'right 10px center', paddingRight: 32,
                  }}>
                    <option value="" disabled>Select domain</option>
                    {DOMAINS.map((d) => <option key={d} value={d}>{d}</option>)}
                  </select>
                </Field>
              </div>

              <div className="form-row" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: 'var(--space-4)' }}>
                <Field label="Google Scholar URL">
                  <input type="url" value={form.scholar} onChange={(e) => u('scholar', e.target.value)} placeholder="https://scholar.google.com/..." style={input} />
                </Field>
                <Field label="h-index">
                  <input type="text" value={form.hIndex} onChange={(e) => u('hIndex', e.target.value)} placeholder="e.g. 28" style={input} />
                </Field>
              </div>

              <Field label="Research interests & relevant experience">
                <textarea value={form.bio} onChange={(e) => u('bio', e.target.value)} rows={3}
                  placeholder="Brief overview of your research and annotation experience"
                  style={{ ...input, resize: 'vertical', minHeight: 72 }} />
              </Field>

              <button type="submit" className="btn-primary" disabled={!canSend || sending} style={{
                width: '100%', padding: '12px', fontSize: 'var(--text-sm)', marginTop: 'var(--space-2)',
                opacity: (!canSend || sending) ? 0.5 : 1,
                cursor: (!canSend || sending) ? 'not-allowed' : 'pointer',
              }}>
                {sending
                  ? <><Loader2 size={14} style={{ animation: 'spin 1s linear infinite' }} /> Submitting...</>
                  : <>Submit Application</>
                }
              </button>

              <p style={{ fontFamily: 'var(--font-mono)', fontSize: '10px', color: 'var(--color-text-faint)', textAlign: 'center', margin: 0, letterSpacing: 'var(--tracking-wide)' }}>
                All information is kept confidential under mutual NDA.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>,
    document.body
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label style={{
        display: 'block', fontFamily: 'var(--font-mono)', fontSize: '10px',
        letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase',
        color: 'var(--color-text-muted)', marginBottom: 6,
      }}>
        {label}{required && <span style={{ color: 'var(--color-signal)', marginLeft: 3 }}>*</span>}
      </label>
      {children}
    </div>
  );
}
