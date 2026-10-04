import React from 'react';
import { Trophy, ChevronRight } from 'lucide-react';
import { SPORTS_LEADERSHIP } from '../data/portfolioData';

export default function LeadershipSports() {
  return (
    <section id="leadership" tabIndex={-1} aria-label="Athletic Leadership" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
      <div className="container">
        <div
          className="card"
          style={{
            padding: 'clamp(2rem, 4vw, 3rem)',
            maxWidth: '1000px',
            margin: '0 auto',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))',
              gap: 'var(--space-8)',
              alignItems: 'center',
            }}
          >
            {/* Text */}
            <div>
              <p className="section-eyebrow"><Trophy size={14} /> Athletic Leadership</p>
              <h2 style={{ fontSize: 'clamp(1.5rem, 3vw, 2rem)', marginBottom: '0.35rem' }}>
                {SPORTS_LEADERSHIP.title}
              </h2>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: 'var(--accent-blue)',
                marginBottom: 'var(--space-5)',
              }}>
                {SPORTS_LEADERSHIP.organization} &bull; {SPORTS_LEADERSHIP.dates}
              </p>

              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {SPORTS_LEADERSHIP.highlights.map((item, idx) => (
                  <li key={idx} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.5rem',
                    fontSize: '0.875rem',
                    lineHeight: 1.65,
                    color: 'var(--text-secondary)',
                  }}>
                    <ChevronRight size={14} color="var(--accent-gold)" style={{ flexShrink: 0, marginTop: '0.25rem' }} aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quote Box */}
            <div
              style={{
                backgroundColor: 'var(--accent-blue-light)',
                borderRadius: 'var(--radius-md)',
                padding: 'var(--space-6)',
                border: '1px solid rgba(30, 58, 95, 0.1)',
              }}
            >
              <h3 style={{ fontSize: '1.15rem', marginBottom: 'var(--space-4)', color: 'var(--accent-blue)' }}>
                Leadership Philosophy
              </h3>
              <blockquote
                style={{
                  fontSize: '0.95rem',
                  lineHeight: 1.7,
                  color: 'var(--text-primary)',
                  fontStyle: 'italic',
                  marginBottom: 'var(--space-4)',
                  fontFamily: 'var(--font-serif)',
                }}
              >
                &ldquo;{SPORTS_LEADERSHIP.quote}&rdquo;
              </blockquote>
              <p style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 700,
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}>
                — Lessons carried to clinical medicine
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
