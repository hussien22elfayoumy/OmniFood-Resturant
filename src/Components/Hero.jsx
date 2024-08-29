import React from 'react';
import hero from '../assets/img/hero-min.png';
import hero_webp from '../assets/img/hero.webp';

import customer1 from '../assets/img/customers/customer-1.jpg';
import customer2 from '../assets/img/customers/customer-2.jpg';
import customer3 from '../assets/img/customers/customer-3.jpg';
import customer4 from '../assets/img/customers/customer-4.jpg';
import customer5 from '../assets/img/customers/customer-5.jpg';
import customer6 from '../assets/img/customers/customer-6.jpg';

const Hero = () => {
  const customers = [
    customer1,
    customer2,
    customer3,
    customer4,
    customer5,
    customer6,
  ];

  return (
    <section className="overflow-hidden bg-[#fdf2e9] py-[4.8rem] md:py-[9.6rem]">
      <div className="max-w-[130rem] mx-auto px-6 sm:px-8 grid md:grid-cols-2 items-center gap-12 sm:gap-24">
        <div className="hero-text-box">
          <h1 className="text-[4rem] sm:text-[5.2rem] font-bold text-[#333] mb-6 sm:mb-8 leading-[1.1]">
            A healthy meal delivered to your door, every single day
          </h1>
          <p className="text-[1.8rem] sm:text-[2rem] leading-[1.6] mb-8 sm:mb-12 text-[#555]">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="text-[1.8rem] sm:text-[2rem] font-semibold bg-[#e67e22] text-white py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-[#cf711f] transition-all duration-300"
            >
              Start eating well
            </a>
            <a
              href="#how"
              className="text-[1.8rem] sm:text-[2rem] font-semibold bg-white text-[#555] py-3 px-6 sm:py-4 sm:px-8 rounded-full hover:bg-[#fdf2e9] transition-all duration-300 shadow-md"
            >
              Learn more ↓
            </a>
          </div>
          <div className="delivered-meals mt-12 sm:mt-20  flex items-center gap-14">
            <div className="delivered-imgs flex">
              {customers.map((customer, index) => (
                <img
                  key={index}
                  src={customer}
                  alt={`Customer ${index + 1}`}
                  className="h-10 w-10 sm:h-12 sm:w-12 rounded-full border-[3px] border-[#fdf2e9] -mr-2 last:mr-0 hover:border-[#e67e22] hover:z-10 hover:scale-110 transition-all duration-300"
                />
              ))}
            </div>
            <p className="text-[1.6rem] sm:text-[1.8rem] font-semibold">
              <span className="text-[1.8rem] sm:text-[2rem] font-bold text-[#cf711f]">
                250,000+
              </span>{' '}
              meals delivered last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <picture>
            <source srcSet={hero_webp} type="image/webp" />
            <source srcSet={hero} type="image/png" />
            <img
              src={hero}
              alt="Woman enjoying food, meals in storage container, and food bowls on a table"
              className="w-full h-auto"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
