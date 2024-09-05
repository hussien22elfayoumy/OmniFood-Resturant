import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedIn from './components/FeaturedIn';
import HowItWorks from './components/HowItWorks';
import Meals from './components/Meals';
import Testimonials from './components/Testimonials';
import CTA from './Components/CTA';
import Footer from './Components/Footer';
import Pricing from './Components/Pricing';

function App() {
  return (
    <div className="font-rubik text-[#555]">
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        <Testimonials />
        <Pricing />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}

export default App;
