/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroSlider } from './components/HeroSlider';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { ReservationForm } from './components/ReservationForm';
import { Location } from './components/Location';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-cream text-neutral-900 font-sans selection:bg-sage/30">
      <Navbar />
      <HeroSlider />
      
      <main>
        <Services />
        <Gallery />
        <ReservationForm />
        <Location />
      </main>
      
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

