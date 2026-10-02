import React, { useState } from 'react';
import { Mail, Send, MapPin, CheckCircle2, MessageSquare } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }
  };

  return (
    <section id="contact" aria-label="Contact">
      <div className="container">
        <div style={{ maxWidth: '720px', margin: '0 auto var(--space-8) auto', textAlign: 'center' }}>
          <p className="section-eyebrow" style={{ justifyContent: 'center' }}><Mail size={14} /> Professional Inquiries</p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>Get in Touch</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Open to residency program inquiries, research collaborations, and professional discussions.
          </p>
        </div>

        <div
          style={{
            maxWidth: '860px',
            margin: '0 auto',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: 'var(--space-6)',
            alignItems: 'start',
          }}
        >
          {/* Info Card */}
          <div className="card" style={{ padding: 'var(--space-6)' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: 'var(--space-4)' }}>
              Professional Background
            </h3>
            <p style={{ fontSize: '0.9rem', lineHeight: 1.65, marginBottom: 'var(--space-5)' }}>
              Ahmad Ali is actively applying to U.S. Internal Medicine Residency programs. For program inquiries or research collaboration, please use the contact form.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem' }}>
                <div style={{ backgroundColor: 'var(--accent-blue-light)', padding: '0.45rem', borderRadius: 'var(--radius-sm)', color: 'var(--accent-blue)', lineHeight: 0 }}>
                  <MapPin size={16} />
                </div>
                <div>
                  <strong>Home Base:</strong>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>SIMS Lahore & Muzaffargarh, Pakistan</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem', fontSize: '0.875rem' }}>
                <div style={{ backgroundColor: 'var(--accent-gold-light)', padding: '0.45rem', borderRadius: 'var(--radius-sm)', color: 'var(--accent-gold)', lineHeight: 0 }}>
                  <MessageSquare size={16} />
                </div>
                <div>
                  <strong>U.S. Experience:</strong>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.825rem' }}>Lehigh Valley Hospital (PA) & Forrest General (MS)</div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Card */}
          <div className="card" style={{ padding: 'var(--space-6)' }}>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: 'var(--space-6) var(--space-4)' }}>
                <CheckCircle2 size={40} color="var(--status-published-text)" style={{ marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.4rem' }}>Message Sent</h3>
                <p style={{ fontSize: '0.9rem', marginBottom: 'var(--space-5)' }}>
                  Thank you. Ahmad Ali will review your inquiry and respond promptly.
                </p>
                <button onClick={() => setSubmitted(false)} className="btn btn-secondary">
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-4)' }}>
                <div>
                  <label htmlFor="contact-name" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                    Your Name <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Dr. Jane Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="contact-email" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                    Email Address <span aria-hidden="true">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="jane.doe@institution.edu"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="contact-subject" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                    Subject
                  </label>
                  <input
                    id="contact-subject"
                    type="text"
                    placeholder="Residency Match / Research Inquiry"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="contact-message" style={{ display: 'block', fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.3rem' }}>
                    Message <span aria-hidden="true">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    required
                    placeholder="Write your message here..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.25rem' }}>
                  Send Message <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
