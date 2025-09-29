"use client";

import { useState } from 'react';
import LandingPage from '@/components/landing/landing-page';
import { HomeContent } from '@/components/pages/home-content';

export default function Home() {
  const [showMusicApp, setShowMusicApp] = useState(false);

  if (showMusicApp) {
    return <HomeContent />;
  }

  return <LandingPage />;
}