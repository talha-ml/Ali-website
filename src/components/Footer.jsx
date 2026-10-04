import React from 'react';
import { ArrowUp } from 'lucide-react';
import { useMotionPreference } from '../utils/motion';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const { reduced, systemReduced, manualReduced, setManualReduced } = useMotionPreference();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduced ? 'instant' : 'smooth' });
    document.getElementById('hero')?.focus({ preventScroll: true });
  };

  return (
    <footer
      className="site-footer"
      role="contentinfo"
      style={{
        backgroundColor: '#111827',
        color: '#E5E7EB',
        padding: 'var(--space-10) 0 var(--space-6) 0',
        borderTop: '1px solid #1F2937',
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
            gap: 'var(--space-8)',
            paddingBottom: 'var(--space-8)',
            borderBottom: '1px solid #1F2937',
          }}
        >
          {/* Brand */}
          <div>
            <h2 style={{
              fontFamily: 'var(--font-serif)',
              fontSize: '1.35rem',
              color: '#FFFFFF',
              marginBottom: '0.3rem',
              fontWeight: 700,
            }}>
              AHMAD ALI, M.B.,B.S.
            </h2>
            <p style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.72rem',
              color: '#9CA3AF',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: '0.85rem',
            }}>
              Physician &bull; Researcher &bull; Community Advocate
            </p>
            <p style={{ fontSize: '0.825rem', color: '#D1D5DB', lineHeight: 1.65, maxWidth: '300px' }}>
              Committed to patient-centered internal medicine, evidence-based research, and equitable healthcare for underserved communities.
            </p>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              color: '#9CA3AF',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '1rem',
              fontWeight: 600,
            }}>
              Navigation
            </h3>
            <ul className="footer-links">
              {[
                { label: 'Home', href: '#hero' },
                { label: 'About', href: '#about' },
                { label: 'Clinical Experience', href: '#clinical' },
                { label: 'Research', href: '#research' },
                { label: 'Community', href: '#community' },
                { label: 'Beyond Medicine', href: '#beyond' },
                { label: 'Career timeline', href: '#journey' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => document.querySelector(link.href)?.focus({ preventScroll: true })}
                    style={{
                      color: '#D1D5DB',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#FFFFFF')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#D1D5DB')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Credentials */}
          <div>
            <h3 style={{
              fontFamily: 'var(--font-sans)',
              fontSize: '0.8rem',
              color: '#9CA3AF',
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              marginBottom: '1rem',
              fontWeight: 600,
            }}>
              Professional Status
            </h3>
            <p style={{ fontSize: '0.825rem', color: '#D1D5DB', lineHeight: 1.65, marginBottom: '0.6rem' }}>
              Medical School: Services Institute of Medical Sciences (SIMS), Pakistan (2023)
            </p>
            <p style={{ fontSize: '0.825rem', color: '#D1D5DB', lineHeight: 1.65 }}>
              U.S. Observerships: Lehigh Valley Hospital (PA) & Forrest General Hospital (MS)
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '0.75rem',
            paddingTop: 'var(--space-5)',
            fontSize: '0.75rem',
            color: '#6B7280',
          }}
        >
          <p>&copy; {currentYear} Ahmad Ali. All rights reserved.</p>
          <button className="motion-toggle" aria-pressed={reduced} disabled={systemReduced} onClick={() => setManualReduced(!manualReduced)}>
            Reduce motion{systemReduced ? ' (system setting)' : ''}
          </button>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.35rem',
              background: 'none',
              border: '1px solid #374151',
              color: '#D1D5DB',
              padding: '0.35rem 0.75rem',
              borderRadius: 'var(--radius-sm)',
              cursor: 'pointer',
              fontFamily: 'var(--font-sans)',
              fontSize: '0.75rem',
              transition: 'border-color 0.2s ease, color 0.2s ease',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#6B7280'; e.currentTarget.style.color = '#FFFFFF'; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = '#374151'; e.currentTarget.style.color = '#D1D5DB'; }}
          >
            Back to Top <ArrowUp size={12} />
          </button>
        </div>
      </div>
    </footer>
  );
}
