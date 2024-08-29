import React from 'react';
import img1 from '../assets/img/app/app-screen-1.png';
import img2 from '../assets/img/app/app-screen-2.png';
import img3 from '../assets/img/app/app-screen-3.png';

const Step = ({ number, title, description, image, isReversed }) => (
  <>
    <div
      className={`text-center md:text-left ${
        isReversed ? 'md:order-2' : 'md:order-1'
      }`}
    >
      <p className="text-7xl sm:text-8xl font-semibold text-gray-200 mb-4">
        {number}
      </p>
      <h3 className="text-xl sm:text-2xl font-semibold mb-4">{title}</h3>
      <p className="text-base sm:text-lg text-gray-600">{description}</p>
    </div>
    <div
      className={`relative flex items-center justify-center mt-8 md:mt-0 ${
        isReversed ? 'md:order-1' : 'md:order-2'
      }`}
    >
      <div className="absolute w-[60%] sm:w-[70%] aspect-square bg-orange-100 rounded-full z-0"></div>
      <div className="absolute w-[45%] sm:w-[50%] aspect-square bg-orange-200 rounded-full z-10"></div>
      <img
        className="w-[35%] sm:w-[35%] relative z-20"
        src={image}
        alt={`Step ${number}`}
      />
    </div>
  </>
);

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      title: 'Tell us what you like (and what not):',
      description:
        'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
      image: img1,
    },
    {
      number: '02',
      title: 'Approve your weekly meal plan:',
      description:
        'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
      image: img2,
    },
    {
      number: '03',
      title: 'Receive meals at convenient time:',
      description:
        'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily',
      image: img3,
    },
  ];

  return (
    <section className="container mx-auto py-16 sm:py-24" id="how">
      <div className=" mx-auto px-4">
        <span className="text-orange-500 font-semibold mb-2 block text-base sm:text-lg">
          How it works
        </span>
        <h2 className="text-3xl sm:text-4xl font-bold mb-12 sm:mb-16">
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className=" mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-16 items-center">
        {steps.map((step, index) => (
          <Step key={step.number} {...step} isReversed={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
