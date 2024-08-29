import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedIn from './components/FeaturedIn';
import HowItWorks from './components/HowItWorks';
import Meals from './components/Meals';
// import Testimonials from './components/Testimonials';
// import Pricing from './components/Pricing';
// import CTA from './components/CTA';
// import Footer from './components/Footer';

function App() {
  return (
    <div className="font-rubik text-[#555]">
      <Header />
      <main>
        <Hero />
        <FeaturedIn />
        <HowItWorks />
        <Meals />
        {/* <Testimonials />
        <Pricing />
        <CTA /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
