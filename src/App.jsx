import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import ClinicalExperience from './components/ClinicalExperience';
import ResearchHub from './components/ResearchHub';
import CommunityLeadership from './components/CommunityLeadership';
import LeadershipSports from './components/LeadershipSports';
import BeyondMedicine from './components/BeyondMedicine';
import JourneyTimeline from './components/JourneyTimeline';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { MotionProvider } from './components/MotionPreference';
import { useMotionPreference } from './utils/motion';

export default function App() {
  return <MotionProvider><Portfolio /></MotionProvider>;
}

function Portfolio() {
  const { reduced } = useMotionPreference();
  useEffect(() => {
    if (reduced || !('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('has-entered'); observer.unobserve(entry.target); }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('main > section:not(#hero) > .container > :first-child, #about blockquote, #about .card, #community article, #leadership .card, #beyond .card, #journey ol > li, .contact-layout > *, .site-footer > .container').forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, [reduced]);
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <Navbar />
      <main id="main-content" tabIndex={-1} style={{ flex: 1 }}>
        <Hero />
        <About />
        <ClinicalExperience />
        <ResearchHub />
        <CommunityLeadership />
        <LeadershipSports />
        <BeyondMedicine />
        <JourneyTimeline />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
