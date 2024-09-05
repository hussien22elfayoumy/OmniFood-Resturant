import img1 from '../assets/img/app/app-screen-1.png';
import img2 from '../assets/img/app/app-screen-2.png';
import img3 from '../assets/img/app/app-screen-3.png';

const HowItWorks = () => {
  return (
    <section className='py-24' id='how'>
      <div className='container mx-auto text-center'>
        <span className='text-2xl font-medium text-orange-600  uppercase tracking-wider mb-6 spac inline-block'>
          How it works
        </span>
        <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-24'>
          Your daily dose of health in 3 simple steps
        </h2>
      </div>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-5 items-center'>
        {/* Step 1 */}
        <div className='max-w-[50rem]'>
          <p className=' md:text-8xl text-7xl font-semibold text-gray-300 mb-4'>
            01
          </p>
          <h3 className='lg:text-5xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8'>
            Tell us what you like (and what not):
          </h3>
          <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
            Never again waste time thinking about what to eat! Omnifood AI will
            create a 100% personalized weekly meal plan just for you. It makes
            sure you get all the nutrients and vitamins you need, no matter what
            diet you follow!
          </p>
        </div>
        <div className='relative flex items-center justify-center'>
          <img className='max-w-[35%] relative z-10' src={img1} alt='' />
          <div className='absolute w-[70%] pt-[70%] bg-orange-100 rounded-full z-[-2]'></div>
          <div className='absolute w-[50%] pt-[50%] bg-orange-300 rounded-full z-[-1]'></div>
        </div>

        {/*  Step 2  */}
        <div className='relative flex items-center justify-center'>
          <img className='max-w-[35%] relative z-10' src={img2} alt='' />
          <div className='absolute w-[70%] pt-[70%] bg-orange-100 rounded-full z-[-2]'></div>
          <div className='absolute w-[50%] pt-[50%] bg-orange-300 rounded-full z-[-1]'></div>
        </div>
        <div>
          <p className='text-7xl md:text-8xl font-semibold text-gray-300 mb-4'>
            02
          </p>
          <h3 className='lg:text-5xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8'>
            Approve your weekly meal plan:
          </h3>
          <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
            Once per week, approve the meal plan generated for you by Omnifood
            AI. You can change ingredients, swap entire meals, or even add your
            own recipes.
          </p>
        </div>

        {/* Step 3  */}
        <div>
          <p className='text-9xl md:text-8xl font-semibold text-gray-300 mb-4'>
            03
          </p>
          <h3 className='lg:text-5xl md:text-3xl font-bold text-gray-900 mb-6 md:mb-8'>
            Receive meals at convenient time:
          </h3>
          <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
            Best chefs in town will cook your selected meal every day, and we
            will deliver it to your door whenever works best for you. You can
            change delivery schedule and address daily.
          </p>
        </div>
        <div className='relative flex items-center justify-center'>
          <img className='max-w-[35%] relative z-10' src={img3} alt='' />
          <div className='absolute w-[70%] pt-[70%] bg-orange-100 rounded-full z-[-2]'></div>
          <div className='absolute w-[50%] pt-[50%] bg-orange-300 rounded-full z-[-1]'></div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
