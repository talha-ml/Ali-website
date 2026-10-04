import { useState, useRef, useCallback } from 'react';
import { Search, ArrowUpRight, ChevronDown, X } from 'lucide-react';
import { RESEARCH_EXPERIENCE } from '../data/portfolioData';
import { publicationLabel, publicationStatus, badgeClass, filterPublications } from '../utils/publications';
import PublicationModal from './PublicationModal';

export default function ResearchHub() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [selectedPub, setSelectedPub] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const triggerRef = useRef(null);
  const resultsRef = useRef(null);
  const searchRef = useRef(null);
  const closeModal = useCallback(() => setSelectedPub(null), []);
  const { affiliation, categories, publications } = RESEARCH_EXPERIENCE;
  const query = searchQuery.trim().toLowerCase();
  const filteredPubs = filterPublications(publications, { category: selectedCategory, status: selectedStatus, query });
  const visiblePubs = showAll ? filteredPubs : filteredPubs.slice(0, 6);
  const resetFilters = () => { setSearchQuery(''); setSelectedCategory('all'); setSelectedStatus('all'); setShowAll(false); searchRef.current?.focus(); };

  return (
    <section id="research" tabIndex={-1} aria-labelledby="research-title" className="research-section">
      <div className="container">
        <div className="research-heading">
          <div className="section-heading">
            <p className="section-eyebrow">Research & Scholarship</p>
            <h2 id="research-title" className="section-title">Questions that matter.<br /><span className="serif-accent">Evidence that informs.</span></h2>
            <p className="section-subtitle">Systematic reviews, meta-analyses, and clinical epidemiology across cardiology, oncology, hepatology, and nephrology.</p>
          </div>
          <p className="research-count"><strong>{publications.length}</strong><span>listed scholarly outputs</span></p>
        </div>
        <details className="research-affiliation">
          <summary><span>Research affiliation</span><strong>{affiliation.organization}</strong><ChevronDown size={18} aria-hidden="true" /></summary>
          <div><p className="metadata">{affiliation.role} · {affiliation.dates}</p><p>{affiliation.description}</p></div>
        </details>
        <p className="research-note">Articles and manuscripts, conference abstracts, and posters are listed separately. Related outputs may describe the same study; submission and acceptance do not mean publication.</p>
        <div className="research-tools">
          <div className="research-search-row"><div className="research-search">
            <Search size={18} aria-hidden="true" />
            <input ref={searchRef} type="search" aria-label="Search scholarly outputs" aria-controls="research-results" placeholder="Search topic, journal, author…" value={searchQuery} onChange={e => { setSearchQuery(e.target.value); setShowAll(false); }} />
            {searchQuery && <button className="icon-button" aria-label="Clear search" onClick={() => { setSearchQuery(''); setShowAll(false); searchRef.current?.focus(); }}><X size={16} /></button>}
          </div><div className="research-status-filter"><label htmlFor="research-status">Status</label><select id="research-status" value={selectedStatus} aria-controls="research-results" onChange={e => { setSelectedStatus(e.target.value); setShowAll(false); }}><option value="all">All statuses</option><option value="published">Published</option><option value="accepted">Accepted / in press</option><option value="submitted">Submitted</option><option value="pending">Presentation pending</option></select></div></div>
          <div className="research-filters" role="group" aria-label="Filter by output type">
            {categories.map(cat => <button key={cat.id} className="filter-button" aria-pressed={selectedCategory === cat.id} onClick={() => { setSelectedCategory(cat.id); setShowAll(false); }}>{cat.id === 'all' ? 'All outputs' : cat.label} <span>{cat.id === 'all' ? publications.length : publications.filter(p => p.category === cat.id).length}</span></button>)}
          </div>
        </div>
        <p className="results-status" role="status" aria-live="polite" aria-atomic="true">{filteredPubs.length === 0 ? 'No scholarly outputs match your search.' : `Showing ${visiblePubs.length} of ${filteredPubs.length} ${filteredPubs.length === 1 ? 'output' : 'outputs'}`}</p>
        <div id="research-results" ref={resultsRef} tabIndex={-1} aria-label="Research results" className="research-results" key={`${selectedCategory}-${selectedStatus}-${query}`}>
          {visiblePubs.map((pub, index) => (
            <article key={pub.id} className="publication-row" style={{ '--entry-delay': `${Math.min(index, 4) * 35}ms` }}>
              <div className="publication-meta"><span className="output-type">{publicationLabel(pub)}</span><span className={`badge ${badgeClass(pub)}`}>{publicationStatus(pub)}</span><span className="metadata">{pub.date}</span></div>
              <div className="publication-main"><h3>{pub.title}</h3><p className="publication-journal">{pub.journal}</p></div>
              <button className="publication-open" aria-label={`View details: ${pub.title}`} aria-haspopup="dialog" onClick={e => { triggerRef.current = e.currentTarget; setSelectedPub(pub); }}>Details <ArrowUpRight size={17} aria-hidden="true" /></button>
            </article>
          ))}
        </div>
        {!filteredPubs.length && <button className="btn btn-secondary" onClick={resetFilters}>Reset search & filters</button>}
        {filteredPubs.length > 6 && <div className="research-more"><button className="btn btn-secondary" aria-controls="research-results" aria-expanded={showAll} onClick={() => { if (showAll) resultsRef.current?.focus(); setShowAll(!showAll); }}>{showAll ? 'Show fewer outputs' : `View all ${filteredPubs.length} outputs`} <ChevronDown size={16} className={showAll ? 'rotate-icon' : ''} aria-hidden="true" /></button></div>}
      </div>
      {selectedPub && <PublicationModal pub={selectedPub} onClose={closeModal} triggerRef={triggerRef} />}
    </section>
  );
}
