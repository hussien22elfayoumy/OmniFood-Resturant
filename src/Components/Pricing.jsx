import {
  IoCheckmarkOutline,
  IoCloseOutline,
  IoInfiniteOutline,
  IoNutritionOutline,
  IoLeafOutline,
  IoPauseOutline,
} from 'react-icons/io5';

const Pricing = () => {
  return (
    <section className='py-24' id='pricing'>
      <div className='container mx-auto px-4'>
        <span className='text-sm font-medium text-orange-600 uppercase tracking-wide mb-4 block'>
          Pricing
        </span>
        <h2 className='text-4xl font-bold text-gray-900 mb-24'>
          Eating well without breaking the bank
        </h2>
      </div>

      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-16'>
        <div className='bg-white p-8 rounded-lg shadow-md'>
          <header className='mb-8'>
            <p className='text-2xl font-semibold mb-4'>Starter</p>
            <p className='text-5xl font-bold mb-4'>
              <span className='text-3xl'>$</span>399
            </p>
            <p className='text-gray-500'>
              per month. That is just $13 per meal!
            </p>
          </header>
          <ul className='space-y-4 mb-8'>
            <li className='flex items-center'>
              <IoCheckmarkOutline className='text-2xl text-orange-500 mr-4' />
              <span>1 meal per day</span>
            </li>
            <li className='flex items-center'>
              <IoCheckmarkOutline className='text-2xl text-orange-500 mr-4' />
              <span>Order from 11am to 9pm</span>
            </li>
            <li className='flex items-center'>
              <IoCheckmarkOutline className='text-2xl text-orange-500 mr-4' />
              <span>Delivery is free</span>
            </li>
            <li className='flex items-center'>
              <IoCloseOutline className='text-2xl text-orange-500 mr-4' />
              <span></span>
            </li>
          </ul>
          <div>
            <a
              href='#'
              className='block text-center bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300'
            >
              Start eating well
            </a>
          </div>
        </div>

        <div className='bg-orange-50 p-8 rounded-lg shadow-md'>
          <header className='mb-8'>
            <p className='text-2xl font-semibold mb-4'>Complete</p>
            <p className='text-5xl font-bold mb-4'>
              <span className='text-3xl'>$</span>649
            </p>
            <p className='text-gray-500'>
              per month. That is just $11 per meal!
            </p>
          </header>
          <ul className='space-y-4 mb-8'>
            <li className='flex items-center'>
              <IoCheckmarkOutline className='text-2xl text-orange-500 mr-4' />
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className='flex items-center'>
              <IoCheckmarkOutline className='text-2xl text-orange-500 mr-4' />
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className='flex items-center'>
              <IoCheckmarkOutline className='text-2xl text-orange-500 mr-4' />
              <span>Delivery is free</span>
            </li>
            <li className='flex items-center'>
              <IoCheckmarkOutline className='text-2xl text-orange-500 mr-4' />
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div>
            <a
              href='#'
              className='block text-center bg-orange-500 text-white py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300'
            >
              Start eating well
            </a>
          </div>
        </div>
      </div>

      <div className='container mx-auto px-4 mb-16'>
        <p className='text-center text-sm text-gray-500'>
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </p>
      </div>

      <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
        <div className='text-center'>
          <IoInfiniteOutline className='text-5xl text-orange-500 mx-auto mb-4' />
          <p className='font-semibold mb-2'>Never cook again!</p>
          <p className='text-gray-500'>
            Our subscriptions cover 365 days per year, even including major
            holidays.
          </p>
        </div>

        <div className='text-center'>
          <IoNutritionOutline className='text-5xl text-orange-500 mx-auto mb-4' />
          <p className='font-semibold mb-2'>Local and organic</p>
          <p className='text-gray-500'>
            Our cooks only use local, fresh, and organic products to prepare
            your meals.
          </p>
        </div>

        <div className='text-center'>
          <IoLeafOutline className='text-5xl text-orange-500 mx-auto mb-4' />
          <p className='font-semibold mb-2'>No waste</p>
          <p className='text-gray-500'>
            All our partners only use reusable containers to package all your
            meals.
          </p>
        </div>

        <div className='text-center'>
          <IoPauseOutline className='text-5xl text-orange-500 mx-auto mb-4' />
          <p className='font-semibold mb-2'>Pause anytime</p>
          <p className='text-gray-500'>
            Going on vacation? Just pause your subscription, and we refund
            unused days.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
