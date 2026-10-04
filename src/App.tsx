import React, { useState } from 'react';
import { OpeningCurtain } from './components/OpeningCurtain';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import { EventDetails } from './components/EventDetails';
import { StorySection } from './components/StorySection';
import { ScheduleTimeline } from './components/ScheduleTimeline';
import { LocationSection } from './components/LocationSection';
import { DressCodeSection } from './components/DressCodeSection';
import { PhotoGallery } from './components/PhotoGallery';
import { GiftRegistry } from './components/GiftRegistry';
import { RsvpSection } from './components/RsvpSection';
import { ClosingQuote } from './components/ClosingQuote';
import { Footer } from './components/Footer';

export default function App() {
  const [isInvitationOpen, setIsInvitationOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF5FB] via-[#FFF1F6] to-[#F7EEFB] text-[#2D1047] relative selection:bg-[#F472B6]/30 selection:text-[#2D1047] w-full overflow-x-hidden">
      {/* Welcome Screen Curtain */}
      <OpeningCurtain
        isOpen={isInvitationOpen}
        onOpen={() => setIsInvitationOpen(true)}
      />

      {/* Main Invitation Web Experience */}
      <div className={`transition-opacity duration-1000 w-full overflow-x-hidden ${isInvitationOpen ? 'opacity-100' : 'opacity-0'}`}>
        <Navbar />
        <main className="w-full overflow-x-hidden">
          <Hero />
          <Countdown />
          <EventDetails />
          <StorySection />
          <ScheduleTimeline />
          <LocationSection />
          <DressCodeSection />
          <PhotoGallery />
          <GiftRegistry />
          <RsvpSection />
          <ClosingQuote />
        </main>
        <Footer />
      </div>
    </div>
  );
}
