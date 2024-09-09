import Header from './Components/Header';
import Hero from './Components/Hero';
import FeaturedIn from './Components/FeaturedIn';
import HowItWorks from './Components/HowItWorks';
import Meals from './Components/Meals';
import CallToAction from './Components/CallToAction';
import Footer from './Components/Footer';
import Pricing from './Components/Pricing';
import Testimonials from './Components/Testimonials';

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
        <CallToAction />
        <Footer />
      </main>
    </div>
  );
}

export default App;
