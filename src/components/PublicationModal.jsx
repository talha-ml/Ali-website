import React, { useState, useEffect, useRef } from 'react';
import { X, ExternalLink, Copy, Check, BookOpen, User, Calendar } from 'lucide-react';

export default function PublicationModal({ pub, onClose }) {
  const [copied, setCopied] = useState(false);
  const closeRef = useRef(null);

  // Trap focus and handle Escape
  useEffect(() => {
    if (!pub) return;

    const handleKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';

    // Focus close button on open
    if (closeRef.current) closeRef.current.focus();

    return () => {
      document.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [pub, onClose]);

  if (!pub) return null;

  const fullCitation = `${pub.authors}. ${pub.title}. ${pub.journal}. ${pub.date}. Status: ${pub.status}.`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullCitation);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older browsers
      const el = document.createElement('textarea');
      el.value = fullCitation;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

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
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="pub-modal-title"
    >
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          ref={closeRef}
          onClick={onClose}
          aria-label="Close publication details"
          style={{
            position: 'absolute',
            top: '1rem',
            right: '1rem',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: 'var(--text-muted)',
            padding: '0.35rem',
            lineHeight: 0,
            borderRadius: 'var(--radius-sm)',
            transition: 'color 0.15s ease',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--text-primary)')}
          onMouseLeave={(e) => (e.currentTarget.style.color = 'var(--text-muted)')}
        >
          <X size={20} />
        </button>

        {/* Badge */}
        <div style={{ marginBottom: '0.85rem' }}>
          <span className={`badge ${getBadgeClass(pub.statusBadge)}`}>
            {pub.status}
          </span>
        </div>

        {/* Title */}
        <h2
          id="pub-modal-title"
          style={{
            fontFamily: 'var(--font-serif)',
            fontSize: 'clamp(1.15rem, 2.5vw, 1.35rem)',
            lineHeight: 1.4,
            marginBottom: 'var(--space-5)',
            color: 'var(--text-primary)',
            fontWeight: 600,
          }}
        >
          {pub.title}
        </h2>

        {/* Details */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: 'var(--space-6)', fontSize: '0.875rem' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <BookOpen size={16} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
            <div>
              <strong>Journal / Conference:</strong>
              <div style={{ color: 'var(--text-secondary)' }}>{pub.journal}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
            <User size={16} color="var(--accent-blue)" style={{ flexShrink: 0, marginTop: '0.2rem' }} aria-hidden="true" />
            <div>
              <strong>Authors:</strong>
              <div style={{ color: 'var(--text-secondary)', lineHeight: 1.55 }}>{pub.authors}</div>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <Calendar size={16} color="var(--accent-blue)" style={{ flexShrink: 0 }} aria-hidden="true" />
            <div>
              <strong>Date:</strong> <span style={{ color: 'var(--text-secondary)' }}>{pub.date}</span>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          paddingTop: 'var(--space-4)',
          borderTop: '1px solid var(--border-subtle)',
        }}>
          <button onClick={handleCopy} className="btn btn-primary" style={{ padding: '0.55rem 1.1rem', fontSize: '0.825rem' }}>
            {copied ? <Check size={14} /> : <Copy size={14} />}
            {copied ? 'Copied!' : 'Copy Citation'}
          </button>

          {pub.url && (
            <a
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary"
              style={{ padding: '0.55rem 1.1rem', fontSize: '0.825rem' }}
            >
              View Abstract <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
