import Hero from '../Components/Hero';
import FeaturedIn from '../Components/FeaturedIn';
import HowItWorks from '../Components/HowItWorks';
import Meals from '../Components/Meals';
import Testimonials from '../Components/Testimonials';
import Pricing from '../Components/Pricing';
import CallToAction from '../Components/CallToAction';

function HomePage() {
  return (
    <main>
      <Hero />
      <FeaturedIn />
      <HowItWorks />
      <Meals />
      <Testimonials />
      <Pricing />
      <CallToAction />
    </main>
  );
}

export default HomePage;
