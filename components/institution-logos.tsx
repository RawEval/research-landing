/* eslint-disable @next/next/no-img-element */

const INSTITUTIONS: { name: string; short: string; logo?: string }[] = [
  { name: 'IIT Bombay', short: 'IITB', logo: '/logos/iit-bombay.svg' },
  { name: 'IIM Ahmedabad', short: 'IIMA', logo: '/logos/iim-ahmedabad.svg' },
  { name: 'AIIMS Delhi', short: 'AIIMS', logo: '/logos/aiims-delhi.svg' },
  { name: 'IIT Delhi', short: 'IITD', logo: '/logos/iit-delhi.svg' },
  { name: 'ISB Hyderabad', short: 'ISB', logo: '/logos/isb-hyderabad.png' },
  { name: 'IIT Madras', short: 'IITM', logo: '/logos/iit-madras.svg' },
  { name: 'IIM Bangalore', short: 'IIMB', logo: '/logos/iim-bangalore.svg' },
  { name: 'IIT Kanpur', short: 'IITK', logo: '/logos/iit-kanpur.svg' },
  { name: 'NLU Delhi', short: 'NLU', logo: '/logos/nlu-delhi.png' },
  { name: 'IIT Kharagpur', short: 'IITKgp', logo: '/logos/iit-kharagpur.svg' },
  { name: 'CMC Vellore', short: 'CMC', logo: '/logos/cmc-vellore.png' },
  { name: 'IIT Hyderabad', short: 'IITH', logo: '/logos/iit-hyderabad.svg' },
];

function LogoMark({ name, short, logo }: { name: string; short: string; logo?: string }) {
  return (
    <div className="inst-mark">
      <div className="inst-mark-icon">
        {logo ? (
          <img src={logo} alt={name} width={36} height={36}
            style={{ width: 36, height: 36, objectFit: 'contain' }} />
        ) : (
          <span style={{
            fontFamily: 'var(--font-mono)', fontSize: '13px', fontWeight: 700,
            color: 'var(--color-signal)',
          }}>{short}</span>
        )}
      </div>
      <span className="inst-mark-name">{name}</span>
    </div>
  );
}

export function InstitutionRibbon() {
  return (
    <div className="ribbon-wrap">
      <div className="ribbon-track">
        {[...INSTITUTIONS, ...INSTITUTIONS].map((inst, i) => (
          <LogoMark key={`${inst.short}-${i}`} {...inst} />
        ))}
      </div>
    </div>
  );
}
