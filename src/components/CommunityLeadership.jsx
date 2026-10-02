import React from 'react';
import { Users, ChevronRight } from 'lucide-react';
import { COMMUNITY_LEADERSHIP } from '../data/portfolioData';

export default function CommunityLeadership() {
  return (
    <section id="community" aria-label="Community Service and Leadership">
      <div className="container">
        <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
          <p className="section-eyebrow"><Users size={14} /> Community & Leadership</p>
          <h2 className="section-title">Service Beyond the Clinic</h2>
          <p className="section-subtitle">
            Free medical camps, flood relief operations, nationwide student health advocacy, and infection control training — over 6 years of sustained community engagement.
          </p>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-5)',
          }}
        >
          {COMMUNITY_LEADERSHIP.map((item) => (
            <article
              key={item.id}
              className="card"
              style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', gap: '0.5rem' }}>
                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {item.dates}
                  </span>
                  <span className="badge badge-accepted" style={{ fontSize: '0.62rem' }}>
                    {item.focus}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', marginBottom: '0.2rem' }}>
                  {item.organization}
                </h3>
                <p style={{ fontFamily: 'var(--font-sans)', fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-muted)', marginBottom: 'var(--space-4)' }}>
                  {item.role}
                </p>

                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: item.quote ? 'var(--space-4)' : 0 }}>
                  {item.highlights.map((point, idx) => (
                    <li key={idx} style={{
                      fontSize: '0.85rem',
                      lineHeight: 1.65,
                      color: 'var(--text-secondary)',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                    }}>
                      <ChevronRight size={14} style={{ color: 'var(--accent-gold)', flexShrink: 0, marginTop: '0.25rem' }} aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {item.quote && (
                <blockquote
                  style={{
                    backgroundColor: 'var(--bg-surface-alt)',
                    padding: '0.85rem 1rem',
                    borderRadius: 'var(--radius-sm)',
                    borderLeft: '2px solid var(--accent-gold)',
                    fontSize: '0.8rem',
                    fontStyle: 'italic',
                    color: 'var(--text-primary)',
                    marginTop: 'var(--space-4)',
                    lineHeight: 1.6,
                  }}
                >
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
