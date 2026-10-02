import React, { useState } from 'react';
import { Stethoscope, Building2, MapPin, Calendar, ChevronRight } from 'lucide-react';
import { CLINICAL_EXPERIENCES } from '../data/portfolioData';

export default function ClinicalExperience() {
  const [activeId, setActiveId] = useState(CLINICAL_EXPERIENCES[0].id);
  const selected = CLINICAL_EXPERIENCES.find((e) => e.id === activeId) || CLINICAL_EXPERIENCES[0];

  return (
    <section id="clinical" aria-label="Clinical Experience">
      <div className="container">
        <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
          <p className="section-eyebrow"><Stethoscope size={14} /> Clinical Training</p>
          <h2 className="section-title">Clinical Experience</h2>
          <p className="section-subtitle">
            Inpatient, emergency, and outpatient training across U.S. trauma centers and a high-volume tertiary teaching hospital.
          </p>
        </div>

        <div className="clinical-layout" style={{ display: 'grid', gridTemplateColumns: '320px 1fr', gap: 'var(--space-6)', alignItems: 'start' }}>
          {/* Sidebar Tabs */}
          <div role="tablist" aria-label="Clinical experiences" style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
            {CLINICAL_EXPERIENCES.map((exp) => {
              const isActive = exp.id === activeId;
              return (
                <button
                  key={exp.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-controls={`panel-${exp.id}`}
                  onClick={() => setActiveId(exp.id)}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    padding: '1rem 1.25rem',
                    borderRadius: 'var(--radius-md)',
                    border: isActive ? '1px solid var(--accent-blue)' : '1px solid var(--border-subtle)',
                    backgroundColor: isActive ? 'var(--bg-surface)' : 'transparent',
                    boxShadow: isActive ? 'var(--shadow-sm)' : 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    transition: 'all 0.2s ease',
                    position: 'relative',
                    fontFamily: 'inherit',
                  }}
                >
                  {isActive && (
                    <div
                      style={{
                        position: 'absolute',
                        left: 0,
                        top: '20%',
                        bottom: '20%',
                        width: '3px',
                        backgroundColor: 'var(--accent-blue)',
                        borderRadius: '0 3px 3px 0',
                      }}
                      aria-hidden="true"
                    />
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', marginBottom: '0.25rem' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.7rem', fontWeight: 700, color: 'var(--accent-gold)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                      {exp.dates}
                    </span>
                    <span className={`badge ${exp.badge.includes('U.S.') ? 'badge-accepted' : 'badge-published'}`}>
                      {exp.badge}
                    </span>
                  </div>

                  <span style={{
                    fontFamily: 'var(--font-serif)',
                    fontSize: '1.05rem',
                    fontWeight: 600,
                    color: isActive ? 'var(--accent-blue)' : 'var(--text-primary)',
                    margin: '0.15rem 0',
                    lineHeight: 1.3,
                  }}>
                    {exp.role}
                  </span>

                  <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {exp.organization}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Detail Panel */}
          <div
            role="tabpanel"
            id={`panel-${selected.id}`}
            className="card"
            style={{ padding: 'clamp(1.5rem, 3vw, 2.5rem)' }}
          >
            {/* Header */}
            <div style={{ paddingBottom: 'var(--space-5)', borderBottom: '1px solid var(--border-subtle)', marginBottom: 'var(--space-5)' }}>
              <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', color: 'var(--accent-gold)', textTransform: 'uppercase' }}>
                {selected.type}
              </span>
              <h3 style={{ fontSize: 'clamp(1.3rem, 2.5vw, 1.65rem)', marginTop: '0.25rem', marginBottom: '0.5rem' }}>
                {selected.role}
              </h3>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Building2 size={15} color="var(--accent-blue)" /> {selected.organization}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <MapPin size={15} color="var(--accent-blue)" /> {selected.location}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <Calendar size={15} color="var(--accent-blue)" /> {selected.dates}
                </span>
              </div>
            </div>

            {/* Setting */}
            <p style={{ marginBottom: 'var(--space-5)', fontSize: '0.85rem', fontStyle: 'italic', color: 'var(--text-muted)' }}>
              <strong style={{ fontStyle: 'normal' }}>Setting:</strong> {selected.setting}
            </p>

            {/* Highlights */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.7rem' }}>
              {selected.highlights.map((item, idx) => {
                const isMeaningful = item.startsWith('Most Meaningful');
                return (
                  <li
                    key={idx}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.6rem',
                      fontSize: '0.875rem',
                      lineHeight: 1.65,
                      color: isMeaningful ? 'var(--text-primary)' : 'var(--text-secondary)',
                      backgroundColor: isMeaningful ? 'var(--accent-gold-light)' : 'transparent',
                      padding: isMeaningful ? '0.85rem 1rem' : '0',
                      borderRadius: isMeaningful ? 'var(--radius-sm)' : '0',
                      borderLeft: isMeaningful ? '3px solid var(--accent-gold)' : 'none',
                    }}
                  >
                    <ChevronRight
                      size={16}
                      style={{
                        color: isMeaningful ? 'var(--accent-gold)' : 'var(--accent-blue)',
                        flexShrink: 0,
                        marginTop: '0.2rem',
                      }}
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .clinical-layout {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
