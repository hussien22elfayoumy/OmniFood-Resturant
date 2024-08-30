import React from 'react';
import img1 from '../assets/img/app/app-screen-1.png';
import img2 from '../assets/img/app/app-screen-2.png';
import img3 from '../assets/img/app/app-screen-3.png';

const HowItWorks = () => {
  return (
    <section className="py-12 md:py-24" id="how">
      <div className="container mx-auto px-4">
        <span className="text-xs md:text-sm font-semibold uppercase text-orange-700">
          How it works
        </span>
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mt-2 md:mt-4 mb-12 md:mb-24">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-16 gap-y-12 md:gap-y-24 items-center">
        {/* Step 1 */}
        <div className="space-y-4 md:space-y-6">
          <p className="text-4xl md:text-7xl font-semibold text-gray-200">01</p>
          <h3 className="text-xl md:text-3xl font-bold text-gray-900">
            Tell us what you like (and what not):
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute w-4/5 md:w-5/6 pb-4/5 md:pb-5/6 bg-orange-50 rounded-full -z-10"></div>
          <div className="absolute w-3/5 md:w-4/5 pb-3/5 md:pb-4/5 bg-orange-200 rounded-full -z-10"></div>
          <img
            className="max-w-full md:max-w-xs"
            src={img1}
            alt="App Screen 1"
          />
        </div>

        {/* Step 2 */}
        <div className="relative flex justify-center items-center order-last md:order-none">
          <div className="absolute w-4/5 md:w-5/6 pb-4/5 md:pb-5/6 bg-orange-50 rounded-full -z-10"></div>
          <div className="absolute w-3/5 md:w-4/5 pb-3/5 md:pb-4/5 bg-orange-200 rounded-full -z-10"></div>
          <img
            className="max-w-full md:max-w-xs"
            src={img2}
            alt="App Screen 2"
          />
        </div>
        <div className="space-y-4 md:space-y-6">
          <p className="text-4xl md:text-7xl font-semibold text-gray-200">02</p>
          <h3 className="text-xl md:text-3xl font-bold text-gray-900">
            Approve your weekly meal plan:
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>

        {/* Step 3 */}
        <div className="space-y-4 md:space-y-6">
          <p className="text-4xl md:text-7xl font-semibold text-gray-200">03</p>
          <h3 className="text-xl md:text-3xl font-bold text-gray-900">
            Receive meals at convenient time:
          </h3>
          <p className="text-base md:text-lg text-gray-700 leading-relaxed">
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily.
          </p>
        </div>
        <div className="relative flex justify-center items-center">
          <div className="absolute w-4/5 md:w-5/6 pb-4/5 md:pb-5/6 bg-orange-50 rounded-full -z-10"></div>
          <div className="absolute w-3/5 md:w-4/5 pb-3/5 md:pb-4/5 bg-orange-200 rounded-full -z-10"></div>
          <img
            className="max-w-full md:max-w-xs"
            src={img3}
            alt="App Screen 3"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
