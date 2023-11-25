'use client'

import './page.css'
import Hero from '@/src/components/Hero/Hero';
import BrandingVideo from '@/src/components/BrandingVideo/BrandingVideo';
import Footer from '@/src/components/Footer/Footer';

export default function Home() {

  return (
    <div className="app">
      <Hero />
      <BrandingVideo />
      <Footer />
    </div>
  );
}