/* eslint-disable @next/next/no-img-element */

const INSTITUTIONS: { name: string; short: string; logo?: string }[] = [
  { name: 'IIT Bombay', short: 'IITB', logo: '/logos/iit-bombay.svg' },
  { name: 'IIT Delhi', short: 'IITD', logo: '/logos/iit-delhi.svg' },
  { name: 'IIT Madras', short: 'IITM', logo: '/logos/iit-madras.svg' },
  { name: 'IIT Kanpur', short: 'IITK', logo: '/logos/iit-kanpur.svg' },
  { name: 'IIT Kharagpur', short: 'IITKgp', logo: '/logos/iit-kharagpur.svg' },
  { name: 'IIT Hyderabad', short: 'IITH', logo: '/logos/iit-hyderabad.svg' },
  { name: 'IIM Ahmedabad', short: 'IIMA' },
  { name: 'IIM Bangalore', short: 'IIMB' },
  { name: 'AIIMS Delhi', short: 'AIIMS' },
  { name: 'NLU Delhi', short: 'NLU' },
  { name: 'ISB Hyderabad', short: 'ISB' },
  { name: 'CMC Vellore', short: 'CMC' },
];

function Chip({ name, short, logo }: { name: string; short: string; logo?: string }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '0 20px', whiteSpace: 'nowrap', flexShrink: 0,
    }}>
      {logo ? (
        <img src={logo} alt="" width={18} height={18}
          style={{ width: 18, height: 18, objectFit: 'contain', filter: 'brightness(1.1)', opacity: 0.7 }} />
      ) : (
        <span style={{
          fontFamily: 'var(--font-mono)', fontSize: '9px', fontWeight: 600,
          color: 'var(--color-signal)', opacity: 0.6,
        }}>{short}</span>
      )}
      <span style={{
        fontFamily: 'var(--font-mono)', fontSize: '11px',
        color: 'var(--color-text-faint)', fontWeight: 500,
      }}>{name}</span>
    </div>
  );
}

export function InstitutionRibbon() {
  return (
    <div className="ribbon-wrap">
      <div className="ribbon-track">
        {[...INSTITUTIONS, ...INSTITUTIONS].map((inst, i) => (
          <Chip key={`${inst.short}-${i}`} {...inst} />
        ))}
      </div>
    </div>
  );
}
