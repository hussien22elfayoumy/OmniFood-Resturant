import React from 'react';
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
    <section className="py-16 bg-gray-50" id="pricing">
      <div className="container mx-auto px-4">
        <span className="text-sm font-semibold text-orange-600 uppercase tracking-wide mb-2 block">
          Pricing
        </span>
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Eating well without breaking the bank
        </h2>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <header className="mb-6">
            <p className="text-xl font-semibold mb-2">Starter</p>
            <p className="text-4xl font-bold mb-2">
              <span className="text-2xl">$</span>399
            </p>
            <p className="text-sm text-gray-600">
              per month. That's just $13 per meal!
            </p>
          </header>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-sm">
              <IoCheckmarkOutline className="text-xl text-green-500 mr-2 flex-shrink-0" />
              <span>1 meal per day</span>
            </li>
            <li className="flex items-center text-sm">
              <IoCheckmarkOutline className="text-xl text-green-500 mr-2 flex-shrink-0" />
              <span>Order from 11am to 9pm</span>
            </li>
            <li className="flex items-center text-sm">
              <IoCheckmarkOutline className="text-xl text-green-500 mr-2 flex-shrink-0" />
              <span>Delivery is free</span>
            </li>
            <li className="flex items-center text-sm">
              <IoCloseOutline className="text-xl text-red-500 mr-2 flex-shrink-0" />
              <span className="text-gray-400">Access to latest recipes</span>
            </li>
          </ul>
          <div>
            <a
              href="#"
              className="block text-center bg-orange-500 text-white text-sm py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Start eating well
            </a>
          </div>
        </div>

        <div className="bg-orange-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
          <header className="mb-6">
            <p className="text-xl font-semibold mb-2">Complete</p>
            <p className="text-4xl font-bold mb-2">
              <span className="text-2xl">$</span>649
            </p>
            <p className="text-sm text-gray-600">
              per month. That's just $11 per meal!
            </p>
          </header>
          <ul className="space-y-3 mb-6">
            <li className="flex items-center text-sm">
              <IoCheckmarkOutline className="text-xl text-green-500 mr-2 flex-shrink-0" />
              <span>
                <strong>2 meals</strong> per day
              </span>
            </li>
            <li className="flex items-center text-sm">
              <IoCheckmarkOutline className="text-xl text-green-500 mr-2 flex-shrink-0" />
              <span>
                Order <strong>24/7</strong>
              </span>
            </li>
            <li className="flex items-center text-sm">
              <IoCheckmarkOutline className="text-xl text-green-500 mr-2 flex-shrink-0" />
              <span>Delivery is free</span>
            </li>
            <li className="flex items-center text-sm">
              <IoCheckmarkOutline className="text-xl text-green-500 mr-2 flex-shrink-0" />
              <span>Get access to latest recipes</span>
            </li>
          </ul>
          <div>
            <a
              href="#"
              className="block text-center bg-orange-500 text-white text-sm py-2 px-4 rounded-full hover:bg-orange-600 transition duration-300"
            >
              Start eating well
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 mb-8">
        <p className="text-center text-xs text-gray-600">
          Prices include all applicable taxes. You can cancel at any time. Both
          plans include the following:
        </p>
      </div>

      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6">
        {[
          {
            icon: IoInfiniteOutline,
            title: 'Never cook again!',
            description:
              'Our subscriptions cover 365 days per year, even including major holidays.',
          },
          {
            icon: IoNutritionOutline,
            title: 'Local and organic',
            description:
              'Our cooks only use local, fresh, and organic products to prepare your meals.',
          },
          {
            icon: IoLeafOutline,
            title: 'No waste',
            description:
              'All our partners only use reusable containers to package all your meals.',
          },
          {
            icon: IoPauseOutline,
            title: 'Pause anytime',
            description:
              'Going on vacation? Just pause your subscription, and we refund unused days.',
          },
        ].map((feature, index) => (
          <div key={index} className="text-center">
            <feature.icon className="text-3xl text-orange-500 mx-auto mb-2" />
            <p className="text-sm font-semibold mb-1">{feature.title}</p>
            <p className="text-xs text-gray-600">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
