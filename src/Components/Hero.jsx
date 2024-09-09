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
    <section className="overflow-hidden bg-[#fdf2e9] py-12 md:py-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid lg:grid-cols-2 items-center gap-12 sm:gap-24">
        <div className="hero-text-box">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#333] mb-6 leading-tight">
            Healthy meals delivered daily
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed mb-8 text-[#555]">
            Enjoy personalized, nutritious meals 365 days a year. Reignite your
            passion for healthy eating with our smart food subscription.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#cta"
              className="text-lg sm:text-xl font-semibold bg-[#e67e22] text-white py-3 px-6 rounded-full hover:bg-[#cf711f] transition-all duration-300"
            >
              Get Started
            </a>
            <a
              href="#how"
              className="text-lg sm:text-xl font-semibold bg-white text-[#555] py-3 px-6 rounded-full hover:bg-[#fdf2e9] transition-all duration-300 shadow-md"
            >
              Learn More ↓
            </a>
          </div>
          <div className="delivered-meals mt-12 flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="delivered-imgs flex">
              {customers.map((customer, index) => (
                <img
                  key={index}
                  src={customer}
                  alt={`Customer ${index + 1}`}
                  className="h-10 w-10 rounded-full border-2 border-[#fdf2e9] -mr-2 last:mr-0 hover:border-[#e67e22] hover:z-10 hover:scale-110 transition-all duration-300"
                />
              ))}
            </div>
            <p className="text-base sm:text-lg font-semibold">
              <span className="text-lg sm:text-xl font-bold text-[#cf711f]">
                250,000+
              </span>{' '}
              meals delivered in the last year!
            </p>
          </div>
        </div>
        <div className="hero-img-box">
          <picture>
            <source srcSet={hero_webp} type="image/webp" />
            <source srcSet={hero} type="image/png" />
            <img
              src={hero}
              alt="Woman enjoying food with meals and bowls on table"
              className="w-full h-auto"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
