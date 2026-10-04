import { useState } from 'react';
import { Mail, ArrowUpRight, Copy } from 'lucide-react';
import { PUBLIC_CONTACT_EMAIL } from '../data/portfolioData';
import { buildContactDraft, buildMailto, isContactEmail } from '../utils/contact';

const configuredEmail = import.meta.env.VITE_CONTACT_EMAIL?.trim() || PUBLIC_CONTACT_EMAIL;
const contactEmail = isContactEmail(configuredEmail) ? configuredEmail : '';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');
  const [manualDraft, setManualDraft] = useState('');

  const copyDraft = async (draft = buildContactDraft(formData)) => {
    try {
      await navigator.clipboard.writeText(draft);
      setStatus(contactEmail ? `Draft copied. Nothing has been sent. Paste it into your email app and send it to ${contactEmail}.` : 'Draft copied. Nothing has been sent. Add Ahmad Ali’s confirmed professional email address before sending.');
      setManualDraft('');
    } catch {
      setManualDraft(draft);
      setStatus('Automatic copying is unavailable. Select and copy the draft below. Nothing has been sent.');
    }
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (contactEmail) {
      window.location.href = buildMailto(contactEmail, formData);
      setStatus('Your email app was requested. Review and send the draft there. This website has not sent a message. If no app opens, copy your draft below.');
    } else {
      await copyDraft();
    }
  };
  const updateField = (id, value) => {
    setFormData({ ...formData, [id]: value });
    setStatus('');
    setManualDraft('');
  };

  return (
    <section id="contact" tabIndex={-1} aria-labelledby="contact-title">
      <div className="container">
        <div className="section-heading">
          <p className="section-eyebrow"><Mail size={14} aria-hidden="true" /> Professional Inquiries</p>
          <h2 id="contact-title" className="section-title">A conversation starts here.</h2>
          <p className="section-subtitle">Open to residency program inquiries, research collaborations, and professional discussions.</p>
        </div>
        <div className="contact-layout">
          <div className="contact-intro">
            <h3>Get in touch</h3>
            <p>Ahmad Ali is applying to U.S. Internal Medicine Residency programs, with clinical experience in Pakistan and U.S. hospitalist observerships.</p>
            <dl className="contact-facts">
              <div><dt>Based in</dt><dd>Lahore & Muzaffargarh, Pakistan</dd></div>
              <div><dt>For</dt><dd>Residency inquiries · Research collaboration · Professional discussion</dd></div>
            </dl>
            {contactEmail && <a className="contact-email" href={`mailto:${contactEmail}`}>{contactEmail} <ArrowUpRight size={16} aria-hidden="true" /></a>}
            <p id="contact-help" className="contact-note">{contactEmail
              ? 'This form prepares a draft in your email app. You review and send it yourself.'
              : 'A public contact email is not available yet. You can prepare and copy a draft; this website cannot deliver it.'}</p>
            <p className="contact-note">For professional inquiries only. Please do not include patient information or confidential records.</p>
          </div>
          <form onSubmit={handleSubmit} className="contact-form" aria-describedby="contact-help">
            {[
              { id: 'name', label: 'Your name', type: 'text', autoComplete: 'name', required: true },
              { id: 'email', label: 'Your email', type: 'email', autoComplete: 'email', required: true },
              { id: 'subject', label: 'Subject', type: 'text' },
            ].map(({ id, label, ...props }) => (
              <div key={id}>
                <label htmlFor={`contact-${id}`}>{label}{props.required && <span aria-hidden="true"> *</span>}</label>
                <input id={`contact-${id}`} name={id} {...props} maxLength={id === 'subject' ? 160 : 254} value={formData[id]} onChange={e => updateField(id, e.target.value)} />
              </div>
            ))}
            <div>
              <label htmlFor="contact-message">Message <span aria-hidden="true">*</span></label>
              <textarea id="contact-message" name="message" rows={5} required maxLength={2000} placeholder="Tell me about your inquiry…" value={formData.message} onChange={e => updateField('message', e.target.value)} />
            </div>
            <div className="contact-actions">
              <button type="submit" className="btn btn-primary">{contactEmail ? 'Open email draft' : 'Copy inquiry draft'} {contactEmail ? <ArrowUpRight size={16} /> : <Copy size={16} />}</button>
              {contactEmail && <button type="button" className="btn btn-secondary" onClick={() => copyDraft()}>Copy draft</button>}
            </div>
            <p role="status" aria-live="polite" className="form-status">{status}</p>
            {manualDraft && <div><label htmlFor="manual-draft">Draft to copy</label><textarea id="manual-draft" readOnly rows={7} value={manualDraft} onFocus={e => e.target.select()} /></div>}
          </form>
        </div>
      </div>
    </section>
  );
}
