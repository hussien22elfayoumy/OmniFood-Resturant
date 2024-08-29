import React from 'react';
import logo1 from '../assets/img/logos/business-insider.png';
import logo2 from '../assets/img/logos/forbes.png';
import logo3 from '../assets/img/logos/techcrunch.png';
import logo4 from '../assets/img/logos/the-new-york-times.png';
import logo5 from '../assets/img/logos/usa-today.png';

const FeaturedIn = () => {
  const logos = [
    { src: logo1, alt: 'business-insider' },
    { src: logo2, alt: 'forbes' },
    { src: logo3, alt: 'techcrunch' },
    { src: logo4, alt: 'the-new-york-times' },
    { src: logo5, alt: 'usa-today' },
  ];

  return (
    <section className="py-8 sm:py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-sm sm:text-base md:text-lg uppercase tracking-wider font-medium text-center mb-6 sm:mb-8 text-[#888]">
          As featured in
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 items-center justify-items-center">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-6 sm:h-8 md:h-10 lg:h-12 w-auto filter grayscale opacity-50 hover:filter-none hover:opacity-100 hover:scale-110 transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
