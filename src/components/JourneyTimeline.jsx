import React from 'react';
import { Milestone } from 'lucide-react';
import { CAREER_JOURNEY } from '../data/portfolioData';

export default function JourneyTimeline() {
  return (
    <section id="journey" aria-label="Career Journey" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
      <div className="container">
        <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
          <p className="section-eyebrow"><Milestone size={14} /> Career Timeline</p>
          <h2 className="section-title">The Journey So Far</h2>
          <p className="section-subtitle">
            Key milestones from rural village roots to U.S. clinical observerships and multi-institutional research.
          </p>
        </div>

        <div style={{ position: 'relative', maxWidth: '820px', margin: '0 auto' }}>
          {/* Vertical Line */}
          <div
            style={{
              position: 'absolute',
              left: '23px',
              top: '10px',
              bottom: '10px',
              width: '2px',
              backgroundColor: 'var(--border-medium)',
              zIndex: 1,
            }}
            aria-hidden="true"
          />

          <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 'var(--space-5)' }}>
            {CAREER_JOURNEY.map((item, idx) => (
              <li
                key={idx}
                style={{
                  position: 'relative',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 'var(--space-5)',
                }}
              >
                {/* Step Number */}
                <div
                  style={{
                    width: '46px',
                    height: '46px',
                    borderRadius: 'var(--radius-full)',
                    backgroundColor: 'var(--accent-blue)',
                    color: '#FFFFFF',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 700,
                    fontSize: '0.85rem',
                    flexShrink: 0,
                    boxShadow: 'var(--shadow-sm)',
                  }}
                  aria-hidden="true"
                >
                  {String(idx + 1).padStart(2, '0')}
                </div>

                {/* Content Card */}
                <div
                  className="card"
                  style={{ flex: 1, padding: 'var(--space-5)' }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '0.4rem', marginBottom: '0.25rem' }}>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: 'var(--accent-gold)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.06em',
                    }}>
                      {item.year}
                    </span>
                    <span style={{
                      fontFamily: 'var(--font-sans)',
                      fontSize: '0.75rem',
                      color: 'var(--text-muted)',
                    }}>
                      {item.subtitle}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.15rem', marginBottom: '0.35rem' }}>
                    {item.title}
                  </h3>

                  <p style={{ fontSize: '0.875rem', lineHeight: 1.65, color: 'var(--text-secondary)' }}>
                    {item.description}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
