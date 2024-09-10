import logo1 from '../assets/img/logos/business-insider.png';
import logo2 from '../assets/img/logos/forbes.png';
import logo3 from '../assets/img/logos/techcrunch.png';
import logo4 from '../assets/img/logos/the-new-york-times.png';
import logo5 from '../assets/img/logos/usa-today.png';

const FeaturedIn = () => {
  const logos = [
    { src: logo1, alt: 'Business Insider' },
    { src: logo2, alt: 'Forbes' },
    { src: logo3, alt: 'TechCrunch' },
    { src: logo4, alt: 'The New York Times' },
    { src: logo5, alt: 'USA Today' },
  ];

  return (
    <section className='py-6 sm:py-8 bg-white'>
      <div className='container mx-auto px-4'>
        <h2 className='text-xs sm:text-sm uppercase tracking-wide font-medium text-center mb-4 sm:mb-6 text-gray-500'>
          As featured in
        </h2>
        <div className='flex flex-wrap justify-center items-center gap-4 sm:gap-6'>
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className='h-5 sm:h-6 md:h-8 w-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-300'
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
