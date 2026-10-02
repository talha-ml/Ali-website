import React from 'react';
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

export default function App() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{ flex: 1 }}>
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
