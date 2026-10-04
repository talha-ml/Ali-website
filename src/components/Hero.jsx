import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export default function Hero() {
  return (
    <section id="hero" tabIndex={-1} aria-label="Introduction" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          <div className="hero-copy">
            <p className="section-eyebrow">Physician · Researcher</p>
            <h1>Ahmad Ali<span className="hero-degree">M.B.,B.S.</span></h1>
            <p className="hero-motto">Evidence-driven medicine.<br /><span>Rooted in humility & service.</span></p>
            <p className="hero-intro">Internal Medicine residency applicant with clinical training in Pakistan, U.S. hospitalist observerships, and research spanning evidence synthesis and clinical epidemiology.</p>
            <div className="hero-actions">
              <a href="#clinical" className="btn btn-primary">Clinical experience <ArrowRight size={16} aria-hidden="true" /></a>
              <a href="#research" className="btn btn-secondary">Explore research <ArrowUpRight size={16} aria-hidden="true" /></a>
            </div>
            <p className="hero-credential">Services Institute of Medical Sciences, Lahore</p>
          </div>
          <figure className="hero-portrait">
            <picture><source type="image/webp" srcSet="/ahmad_ali_portrait-400.webp 400w, /ahmad_ali_portrait-800.webp 800w" sizes="(max-width: 640px) 80px, (max-width: 900px) 35vw, 360px" /><img src="/ahmad_ali_portrait.jpg" alt="Ahmad Ali in formal attire" width="800" height="1000" fetchPriority="high" loading="eager" /></picture>
            <figcaption><strong>Ahmad Ali</strong><span>Physician & Medical Researcher</span></figcaption>
          </figure>
        </div>
        <dl className="stat-grid">
          {PERSONAL_INFO.heroStats.map(stat => <div className="stat-item" key={stat.label}><dt>{stat.label}</dt><dd className="stat-value">{stat.value}</dd><dd className="stat-description">{stat.description}</dd></div>)}
        </dl>
      </div>
    </section>
  );
}
