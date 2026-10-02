import React, { useState } from 'react';
import { BookOpen, Search, ArrowRight, ChevronDown } from 'lucide-react';
import { RESEARCH_EXPERIENCE } from '../data/portfolioData';
import PublicationModal from './PublicationModal';

export default function ResearchHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPub, setSelectedPub] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const { affiliation, categories, publications } = RESEARCH_EXPERIENCE;

  const filteredPubs = publications.filter((pub) => {
    const matchesCategory = selectedCategory === 'all' || pub.category === selectedCategory;
    const q = searchQuery.toLowerCase();
    const matchesSearch = !q ||
      pub.title.toLowerCase().includes(q) ||
      pub.journal.toLowerCase().includes(q) ||
      pub.authors.toLowerCase().includes(q);
    return matchesCategory && matchesSearch;
  });

  const visiblePubs = showAll ? filteredPubs : filteredPubs.slice(0, 6);

  const getBadgeClass = (badge) => {
    switch (badge) {
      case 'published': return 'badge-published';
      case 'featured': return 'badge-featured';
      case 'poster': return 'badge-poster';
      case 'success': return 'badge-accepted';
      default: return 'badge-submitted';
    }
  };

  return (
    <section id="research" aria-label="Research and Publications" style={{ backgroundColor: 'var(--bg-surface-alt)' }}>
      <div className="container">
        <div style={{ maxWidth: '720px', marginBottom: 'var(--space-8)' }}>
          <p className="section-eyebrow"><BookOpen size={14} /> Scholarly Work</p>
          <h2 className="section-title">Research Driven by Questions That Matter</h2>
          <p className="section-subtitle">
            Systematic reviews, network meta-analyses, and clinical epidemiology across cardiology, oncology, hepatology, and nephrology.
          </p>
        </div>

        {/* Research Affiliation Context */}
        <div
          className="card"
          style={{
            marginBottom: 'var(--space-8)',
            borderLeft: '3px solid var(--accent-blue)',
            padding: 'var(--space-5) var(--space-6)',
          }}
        >
          <p style={{
            fontFamily: 'var(--font-sans)',
            fontSize: '0.72rem',
            fontWeight: 700,
            color: 'var(--accent-gold)',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            marginBottom: '0.3rem',
          }}>
            Research Affiliation
          </p>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '0.4rem' }}>
            {affiliation.role} — {affiliation.organization}
          </h3>
          <p style={{ fontSize: '0.9rem', lineHeight: 1.7 }}>
            {affiliation.description}
          </p>
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)', marginBottom: 'var(--space-6)' }}>
          <div style={{ position: 'relative', maxWidth: '480px', width: '100%' }}>
            <Search
              size={16}
              style={{ position: 'absolute', left: '0.85rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)' }}
              aria-hidden="true"
            />
            <input
              type="search"
              placeholder="Search by topic, journal, or author..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              aria-label="Search publications"
              style={{ paddingLeft: '2.5rem' }}
            />
          </div>

          <div role="group" aria-label="Filter by publication type" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count = cat.id === 'all' ? publications.length
                : publications.filter(p => p.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  onClick={() => { setSelectedCategory(cat.id); setShowAll(false); }}
                  aria-pressed={isActive}
                  style={{
                    padding: '0.4rem 0.9rem',
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    borderRadius: 'var(--radius-full)',
                    border: '1px solid',
                    borderColor: isActive ? 'var(--accent-blue)' : 'var(--border-subtle)',
                    backgroundColor: isActive ? 'var(--accent-blue)' : 'var(--bg-surface)',
                    color: isActive ? '#FFFFFF' : 'var(--text-secondary)',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>
        </div>

        {/* Publication Cards */}
        {filteredPubs.length === 0 ? (
          <div style={{ textAlign: 'center', padding: 'var(--space-10) 0', color: 'var(--text-muted)' }}>
            <p>No publications match your search criteria.</p>
          </div>
        ) : (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))',
              gap: 'var(--space-5)',
              marginBottom: 'var(--space-8)',
            }}
          >
            {visiblePubs.map((pub) => (
              <article
                key={pub.id}
                className="card"
                onClick={() => setSelectedPub(pub)}
                onKeyDown={(e) => { if (e.key === 'Enter') setSelectedPub(pub); }}
                tabIndex={0}
                role="button"
                aria-label={`View details: ${pub.title}`}
                style={{
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem', gap: '0.5rem' }}>
                    <span style={{ fontFamily: 'var(--font-sans)', fontSize: '0.68rem', fontWeight: 600, color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.04em' }}>
                      {pub.type}
                    </span>
                    <span className={`badge ${getBadgeClass(pub.statusBadge)}`}>
                      {pub.status}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.05rem', lineHeight: 1.45, marginBottom: '0.7rem', fontWeight: 600 }}>
                    {pub.title}
                  </h3>

                  <div style={{ fontFamily: 'var(--font-sans)', fontSize: '0.8rem', fontWeight: 600, color: 'var(--accent-blue)', marginBottom: '0.4rem' }}>
                    {pub.journal}
                  </div>

                  <p style={{
                    fontFamily: 'var(--font-sans)',
                    fontSize: '0.75rem',
                    color: 'var(--text-muted)',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    marginBottom: '0.85rem',
                    lineHeight: 1.5,
                  }}>
                    {pub.authors}
                  </p>
                </div>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--border-subtle)',
                  fontFamily: 'var(--font-sans)',
                  fontSize: '0.75rem',
                  color: 'var(--text-muted)',
                }}>
                  <span>{pub.date}</span>
                  <span style={{ color: 'var(--accent-blue)', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.2rem' }}>
                    Details <ArrowRight size={12} />
                  </span>
                </div>
              </article>
            ))}
          </div>
        )}

        {filteredPubs.length > 6 && (
          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setShowAll(!showAll)} className="btn btn-secondary">
              {showAll ? 'Show Featured' : `View All ${filteredPubs.length} Works`}
              <ChevronDown size={16} style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }} />
            </button>
          </div>
        )}
      </div>

      <PublicationModal pub={selectedPub} onClose={() => setSelectedPub(null)} />
    </section>
  );
}
