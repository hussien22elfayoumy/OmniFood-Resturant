import Hero from '../Components/Hero/Hero';
import FeaturedIn from '../Components/FeaturedIn/FeaturedIn';
import HowItWorks from '../Components/HowItWorks/HowItWorks';
import Meals from '../Components/Meals/Meals';
import Testimonials from '../Components/Testimonials/Testimonials';
import Pricing from '../Components/Pricing/Pricing';
import CallToAction from '../Components/CallToAction/CallToAction';

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
