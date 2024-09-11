import PropTypes from 'prop-types';
import img1 from '../../assets/img/app/app-screen-1.png';
import img2 from '../../assets/img/app/app-screen-2.png';
import img3 from '../../assets/img/app/app-screen-3.png';

const Step = ({ number, title, description, image, reverse }) => (
  <div
    className={`flex flex-col ${
      reverse ? 'md:flex-row-reverse' : 'md:flex-row'
    } items-center gap-8 mb-16`}
  >
    <div className="md:w-1/2">
      <p className="text-5xl sm:text-6xl font-semibold text-gray-200 mb-2">
        {number.toString().padStart(2, '0')}
      </p>
      <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
        {title}
      </h3>
      <p className="text-base text-gray-700 leading-relaxed">{description}</p>
    </div>
    <div className="md:w-1/2 relative flex items-center justify-center">
      <img className="w-1/3 relative z-10" src={image} alt="" />
      <div className="absolute w-2/3 pt-[66%] bg-orange-100 rounded-full z-[-2]"></div>
      <div className="absolute w-1/2 pt-[50%] bg-orange-200 rounded-full z-[-1]"></div>
    </div>
  </div>
);

Step.propTypes = {
  number: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  reverse: PropTypes.bool,
};

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: 'Tell us what you like (and what not)',
      description:
        'Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!',
      image: img1,
    },
    {
      number: 2,
      title: 'Approve your weekly meal plan',
      description:
        'Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.',
      image: img2,
    },
    {
      number: 3,
      title: 'Receive meals at convenient time',
      description:
        'Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily.',
      image: img3,
    },
  ];

  return (
    <section className="py-16 sm:py-20" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 sm:mb-16">
          <span className="text-lg sm:text-xl font-medium text-orange-500 uppercase tracking-wide mb-2 inline-block">
            How it works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Your daily dose of health in 3 simple steps
          </h2>
        </div>
        {steps.map((step, index) => (
          <Step key={index} {...step} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
