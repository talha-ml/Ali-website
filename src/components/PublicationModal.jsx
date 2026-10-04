import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Copy, Check } from 'lucide-react';
import { publicationLabel, publicationStatus, badgeClass } from '../utils/publications';
import { useMotionPreference } from '../utils/motion';

export default function PublicationModal({ pub, onClose, triggerRef }) {
  const [copyStatus, setCopyStatus] = useState('');
  const [closing, setClosing] = useState(false);
  const { reduced } = useMotionPreference();
  const dialogRef = useRef(null);
  const closeRef = useRef(null);
  const citationRef = useRef(null);
  const fullCitation = `${pub.authors}. ${pub.title}. ${pub.journal}. ${pub.date}. Status: ${publicationStatus(pub)}.${pub.url ? ` ${pub.url}` : ''}`;
  const requestClose = () => { if (reduced) onClose(); else setClosing(true); };

  useEffect(() => {
    if (!closing) return;
    // A bounded fallback also closes when an animation is cancelled by a preference change.
    const timer = window.setTimeout(onClose, reduced ? 0 : 220);
    return () => window.clearTimeout(timer);
  }, [closing, reduced, onClose]);

  useEffect(() => {
    const dialog = dialogRef.current;
    const trigger = triggerRef.current;
    const overflow = document.body.style.overflow;
    dialog.showModal();
    closeRef.current.focus({ preventScroll: true });
    document.body.style.overflow = 'hidden';
    return () => {
      dialog.close();
      document.body.style.overflow = overflow;
      if (trigger?.isConnected) trigger.focus({ preventScroll: true });
    };
  }, [triggerRef]);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(fullCitation);
      setCopyStatus('Citation copied.');
    } catch {
      setCopyStatus('Automatic copying is unavailable. Select and copy the citation below.');
      citationRef.current.focus();
      citationRef.current.select();
    }
  };

  return createPortal(
    <dialog ref={dialogRef} className={`publication-dialog${closing ? ' is-closing' : ''}`} aria-labelledby="pub-modal-title" onAnimationEnd={event => {
      if (closing && event.target === event.currentTarget) onClose();
    }} onKeyDown={event => {
      if (event.key !== 'Tab') return;
      const controls = [...event.currentTarget.querySelectorAll('button, a[href], textarea')].filter(element => !element.disabled);
      const first = controls[0];
      const last = controls.at(-1);
      if (event.shiftKey && (document.activeElement === first || document.activeElement === event.currentTarget)) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }} onCancel={e => { e.preventDefault(); requestClose(); }} onClick={e => {
      if (e.target !== e.currentTarget) return;
      const rect = e.currentTarget.getBoundingClientRect();
      if (e.clientX < rect.left || e.clientX > rect.right || e.clientY < rect.top || e.clientY > rect.bottom) requestClose();
    }}>
      <div className="dialog-topline"><span className="output-type">{publicationLabel(pub)}</span><button ref={closeRef} className="icon-button" onClick={requestClose} aria-label="Close publication details"><X size={22} /></button></div>
      <span className={`badge ${badgeClass(pub)}`}>{publicationStatus(pub)}</span>
      {pub.status.includes("Most Meaningful") && <p className="metadata">Most meaningful scholarly work</p>}
      <h2 id="pub-modal-title">{pub.title}</h2>
      <dl className="publication-details">
        <div><dt>Journal / Conference</dt><dd>{pub.journal}</dd></div>
        <div><dt>Authors</dt><dd>{pub.authors}</dd></div>
        <div><dt>Date</dt><dd>{pub.date}</dd></div>
      </dl>
      <label htmlFor="publication-citation" className="citation-label">Citation</label>
      <textarea ref={citationRef} id="publication-citation" className="citation-text" readOnly value={fullCitation} rows={4} />
      <div className="dialog-actions">
        <button className="btn btn-primary" onClick={handleCopy}>{copyStatus === 'Citation copied.' ? <Check size={16} /> : <Copy size={16} />} Copy citation</button>
        {pub.url && <a className="btn btn-secondary" href={pub.url} target="_blank" rel="noopener noreferrer">View source <ExternalLink size={16} /><span className="sr-only"> (opens in a new tab)</span></a>}
      </div>
      <p role="status" aria-live="polite" className="form-status">{copyStatus}</p>
    </dialog>, document.body
  );
}
