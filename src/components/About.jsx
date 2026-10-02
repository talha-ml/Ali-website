import React from 'react';
import { Quote, Heart, BookOpen, Users } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function About() {
  const pillars = [
    {
      icon: <Heart size={20} />,
      title: 'Clinical Depth',
      description: '12-month inpatient house officer training across a 1,200-bed tertiary hospital, with U.S. hospitalist observership experience in Epic-based workflows.',
      bgColor: 'var(--accent-blue-light)',
      iconColor: 'var(--accent-blue)',
    },
    {
      icon: <BookOpen size={20} />,
      title: 'Research Rigor',
      description: '18 systematic reviews and meta-analyses across AHA, ACG, ESMO, Circulation, and Frontiers — from search string design to statistical analysis in R.',
      bgColor: 'var(--accent-gold-light)',
      iconColor: 'var(--accent-gold)',
    },
    {
      icon: <Users size={20} />,
      title: 'Community Commitment',
      description: '6+ years of rural medical camps, flood relief operations, free village clinics, and national student health advocacy across 60+ medical college chapters.',
      bgColor: '#ECFDF5',
      iconColor: '#047857',
    },
  ];

  return (
    <section id="about" aria-label="About Ahmad Ali" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
      <div className="container">
        {/* Section Header */}
        <div style={{ maxWidth: '720px', marginBottom: 'var(--space-10)' }}>
          <p className="section-eyebrow">About</p>
          <h2 className="section-title">The Journey Behind the Medicine</h2>
          <p className="section-subtitle" style={{ marginBottom: 0 }}>
            From a 400-person village in rural Pakistan to U.S. teaching hospitals — a path shaped by family sacrifice, clinical training, and a deep commitment to health equity.
          </p>
        </div>

        {/* Pull Quote */}
        <blockquote
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            padding: 'clamp(1.5rem, 4vw, 2.5rem) clamp(1.5rem, 4vw, 3rem)',
            borderLeft: '3px solid var(--accent-gold)',
            boxShadow: 'var(--shadow-sm)',
            marginBottom: 'var(--space-8)',
            position: 'relative',
          }}
        >
          <Quote
            size={36}
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.5rem',
              color: 'var(--accent-gold-light)',
              opacity: 0.5,
            }}
            aria-hidden="true"
          />
          <p
            style={{
              fontFamily: 'var(--font-serif)',
              fontSize: 'clamp(1.05rem, 2.2vw, 1.25rem)',
              lineHeight: 1.65,
              color: 'var(--text-primary)',
              fontStyle: 'italic',
              marginBottom: '0.75rem',
              maxWidth: '760px',
            }}
          >
            &ldquo;{PERSONAL_INFO.impactfulQuote}&rdquo;
          </p>
          <footer style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.8rem',
            fontWeight: 600,
            color: 'var(--accent-gold)',
            letterSpacing: '0.06em',
            textTransform: 'uppercase',
          }}>
            — Ahmad Ali, M.B.,B.S.
          </footer>
        </blockquote>

        {/* Two-Column: Story + Pillars */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {/* Narrative */}
          <div className="card">
            <h3 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-4)' }}>
              A Physician's Path
            </h3>
            <p style={{ marginBottom: 'var(--space-4)', lineHeight: 1.75 }}>
              Growing up in a remote village with no nearby hospital or school, I saw firsthand how distance from healthcare shapes entire lives. My family's determination to secure my education — often at personal cost — instilled in me a deep sense of responsibility toward those who lack access to care.
            </p>
            <p style={{ marginBottom: 'var(--space-4)', lineHeight: 1.75 }}>
              Medical training at Services Institute of Medical Sciences and my house officer year at Services Hospital Lahore immersed me in inpatient internal medicine, emergency care, and procedural training across 1,200 beds.
            </p>
            <p style={{ lineHeight: 1.75 }}>
              Returning to my hometown as a Medical Officer and completing U.S. observerships at Lehigh Valley Hospital and Forrest General Hospital have reinforced my commitment to bridging clinical excellence with compassionate, patient-centered care.
            </p>
          </div>

          {/* Core Pillars */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
            {pillars.map((pillar, idx) => (
              <div className="card" key={idx} style={{ padding: 'var(--space-5)' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: 'var(--space-4)' }}>
                  <div
                    style={{
                      backgroundColor: pillar.bgColor,
                      padding: '0.6rem',
                      borderRadius: 'var(--radius-sm)',
                      color: pillar.iconColor,
                      flexShrink: 0,
                      lineHeight: 0,
                    }}
                    aria-hidden="true"
                  >
                    {pillar.icon}
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', fontWeight: 700, marginBottom: '0.25rem', fontFamily: 'var(--font-sans)' }}>
                      {pillar.title}
                    </h4>
                    <p style={{ fontSize: '0.875rem', lineHeight: 1.65 }}>
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
