import React from 'react';
import { Smile, Utensils, Mountain, Wrench, Film, Activity } from 'lucide-react';
import { BEYOND_MEDICINE } from '../data/portfolioData';

const ICONS = [Activity, Utensils, Mountain, Wrench, Film];

export default function BeyondMedicine() {
  return (
    <section id="beyond" tabIndex={-1} aria-label="Beyond Medicine">
      <div className="container">
        <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
          <p className="section-eyebrow"><Smile size={14} /> Personal Interests</p>
          <h2 className="section-title">Beyond Medicine</h2>
          <p className="section-subtitle">
            A little of life outside the clinic and the research desk.
          </p>
        </div>

        <div className="interests-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 200px), 1fr))',
            gap: 'var(--space-4)',
          }}
        >
          {BEYOND_MEDICINE.map((item, idx) => {
            const IconComponent = ICONS[idx] || Smile;
            return (
              <div
                key={idx}
                className="card"
                style={{ padding: 'var(--space-5)' }}
              >
                <div
                  style={{
                    backgroundColor: 'var(--accent-gold-light)',
                    color: 'var(--accent-gold)',
                    width: '40px',
                    height: '40px',
                    borderRadius: 'var(--radius-sm)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 'var(--space-4)',
                  }}
                  aria-hidden="true"
                >
                  <IconComponent size={20} />
                </div>

                <p style={{
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.68rem',
                  fontWeight: 700,
                  color: 'var(--accent-gold)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  marginBottom: '0.2rem',
                }}>
                  {item.category}
                </p>

                <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>
                  {item.title}
                </h3>

                <p style={{ fontSize: '0.85rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
