import React from 'react';
import { ArrowRight, BookOpen, ChevronDown } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      style={{
        paddingTop: '7.5rem',
        paddingBottom: '4rem',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: 'clamp(2rem, 5vw, 4.5rem)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left: Content */}
          <div>
            <p
              style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'var(--accent-gold)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Physician &bull; Researcher &bull; Community Advocate
            </p>

            <h1
              style={{
                fontSize: 'clamp(2.1rem, 4.5vw, 3.25rem)',
                lineHeight: 1.12,
                marginBottom: 'var(--space-5)',
                color: 'var(--text-primary)',
                letterSpacing: '-0.025em',
                maxWidth: '620px',
              }}
            >
              Evidence-Driven Medicine{' '}
              <span style={{ color: 'var(--accent-blue)' }}>Rooted in Humility</span>{' '}
              & Service
            </h1>

            <p
              style={{
                fontSize: '1.05rem',
                lineHeight: 1.75,
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-6)',
                maxWidth: '560px',
              }}
            >
              Internal Medicine residency applicant with a 12-month clinical house officer
              training at a 1,200-bed teaching hospital, U.S. hospitalist observerships at
              Level 1 & 2 Trauma Centers, and 18 systematic reviews and meta-analyses across
              AHA, ACG, ESMO, Circulation, and Frontiers.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', marginBottom: 'var(--space-8)' }}>
              <a href="#about" className="btn btn-primary">
                Explore My Journey <ArrowRight size={16} />
              </a>
              <a href="#research" className="btn btn-secondary">
                <BookOpen size={16} /> Research & Publications
              </a>
            </div>

            {/* Credential Line */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.5rem',
                paddingTop: 'var(--space-5)',
                borderTop: '1px solid var(--border-subtle)',
              }}
            >
              {['MBBS — SIMS Lahore', 'U.S. Clinical Observerships', '18 Scholarly Works'].map((item) => (
                <span
                  key={item}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.775rem',
                    fontWeight: 600,
                    color: 'var(--text-muted)',
                    letterSpacing: '0.02em',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                  }}
                >
                  <span style={{ width: '5px', height: '5px', borderRadius: '50%', backgroundColor: 'var(--accent-gold)', display: 'inline-block' }} />
                  {item}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Portrait */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', maxWidth: '400px', width: '100%' }}>
              {/* Subtle accent frame behind */}
              <div
                style={{
                  position: 'absolute',
                  inset: '-8px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'linear-gradient(145deg, rgba(153,101,21,0.08) 0%, rgba(30,58,95,0.06) 100%)',
                  transform: 'rotate(-1.5deg)',
                  zIndex: 1,
                }}
                aria-hidden="true"
              />

              <div
                style={{
                  position: 'relative',
                  zIndex: 2,
                  backgroundColor: 'var(--bg-surface)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '0.5rem',
                  boxShadow: 'var(--shadow-lg)',
                  border: '1px solid var(--border-subtle)',
                }}
              >
                <img
                  src="/ahmad_ali_portrait.jpg"
                  alt="Dr. Ahmad Ali, M.B.,B.S. — Professional portrait in formal attire"
                  loading="eager"
                  style={{
                    width: '100%',
                    height: 'auto',
                    aspectRatio: '4 / 5',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    borderRadius: 'calc(var(--radius-lg) - 4px)',
                    display: 'block',
                  }}
                />

                <div style={{ padding: '1rem 0.75rem 0.5rem', textAlign: 'center' }}>
                  <p style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    marginBottom: '0.15rem',
                    lineHeight: 1.3,
                  }}>
                    Ahmad Ali, M.B.,B.S.
                  </p>
                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.4,
                  }}>
                    Services Institute of Medical Sciences
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stat Strip */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            marginTop: 'var(--space-10)',
            backgroundColor: 'var(--bg-surface)',
            borderRadius: 'var(--radius-md)',
            border: '1px solid var(--border-subtle)',
            overflow: 'hidden',
          }}
          className="stat-grid"
        >
          {PERSONAL_INFO.heroStats.map((stat, idx) => (
            <div
              key={idx}
              style={{
                textAlign: 'center',
                padding: 'var(--space-5) var(--space-4)',
                borderRight: idx < 3 ? '1px solid var(--border-subtle)' : 'none',
              }}
              className="stat-item"
            >
              <div style={{
                fontFamily: 'var(--font-serif)',
                fontSize: '2rem',
                fontWeight: 700,
                color: 'var(--accent-blue)',
                lineHeight: 1.1,
              }}>
                {stat.value}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.825rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
                marginTop: '0.3rem',
              }}>
                {stat.label}
              </div>
              <div style={{
                fontFamily: 'var(--font-sans)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                marginTop: '0.15rem',
              }}>
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll Indicator */}
      <a href="#about" className="scroll-indicator" aria-label="Scroll to About section" style={{ textDecoration: 'none' }}>
        <ChevronDown size={16} />
      </a>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            order: 2;
          }
          .hero-grid > div:last-child {
            order: 1;
          }
          .hero-grid > div:first-child > div:last-child {
            justify-content: center;
          }
        }
        @media (max-width: 640px) {
          .stat-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .stat-item {
            border-bottom: 1px solid var(--border-subtle);
          }
          .stat-item:nth-child(odd) {
            border-right: 1px solid var(--border-subtle) !important;
          }
          .stat-item:nth-child(even) {
            border-right: none !important;
          }
          .stat-item:nth-child(n+3) {
            border-bottom: none;
          }
        }
      `}</style>
    </section>
  );
}
