import { useState, useEffect, useRef } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
const links = [
  { name: 'About', id: 'about' }, { name: 'Experience', id: 'clinical' },
  { name: 'Research', id: 'research' }, { name: 'Community', id: 'community' },
  { name: 'Beyond Medicine', id: 'beyond' }, { name: 'Contact', id: 'contact' },
  { name: 'Career timeline', id: 'journey' },
];
export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef(null);
  const toggleRef = useRef(null);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      setIsScrolled(window.scrollY > 24);
      const sections = [...document.querySelectorAll('main > section')];
      const current = sections.filter(section => section.getBoundingClientRect().top <= 160).at(-1);
      setActive(current?.id === 'leadership' ? 'community' : current?.id || 'hero');
    };
    const scroll = () => { if (!frame) frame = requestAnimationFrame(update); };
    const resize = () => { if (window.innerWidth >= 1100) setMobileMenuOpen(false); scroll(); };
    scroll();
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(frame); window.removeEventListener('scroll', scroll); window.removeEventListener('resize', resize); };
  }, []);
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const key = e => { if (e.key === 'Escape') { setMobileMenuOpen(false); toggleRef.current.focus(); } };
    const outside = e => { if (!headerRef.current.contains(e.target)) setMobileMenuOpen(false); };
    document.addEventListener('keydown', key);
    document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', key); document.removeEventListener('pointerdown', outside); };
  }, [mobileMenuOpen]);
  const navigationLinks = () => links.map(link => (
    <a key={link.id} href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined} className={link.id === 'journey' ? 'nav-timeline' : ''} onClick={() => {
      setMobileMenuOpen(false);
      document.getElementById(link.id)?.focus({ preventScroll: true });
    }}>{link.name}{link.id === 'journey' && <ArrowUpRight size={14} aria-hidden="true" />}</a>
  ));
  return (
    <header ref={headerRef} className={`site-header ${isScrolled || mobileMenuOpen ? 'is-scrolled' : ''}`} onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setMobileMenuOpen(false); }}>
      <div className="container nav-bar">
        <a className="brand" href="#hero"><span>AHMAD ALI</span><small>Physician · Researcher</small></a>
        <nav className="desktop-nav" aria-label="Main navigation">{navigationLinks()}</nav>
        <button ref={toggleRef} className="mobile-toggle icon-button" aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-controls="mobile-navigation" aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </div>
      <nav id="mobile-navigation" className={`mobile-nav ${mobileMenuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!mobileMenuOpen} inert={!mobileMenuOpen}>{navigationLinks()}</nav>
    </header>
  );
}
