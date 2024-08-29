import React from 'react';
import img1 from '../assets/img/meals/meal-1.jpg';
import img2 from '../assets/img/meals/meal-2.jpg';

const MealCard = ({ image, tags, title, calories, nutriScore, rating }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-4 hover:shadow-xl">
      <img className="w-full h-48 object-cover" src={image} alt={title} />
      <div className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map(tag => (
            <span
              key={tag.text}
              className={`px-2 py-1 text-xs font-semibold uppercase rounded-full ${tag.color}`}
            >
              {tag.text}
            </span>
          ))}
        </div>
        <h3 className="text-xl md:text-2xl font-medium text-gray-800 mb-4 md:mb-6">
          {title}
        </h3>
        <ul className="flex flex-col gap-3 md:gap-4">
          <li className="flex items-center gap-2 md:gap-4 text-base md:text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
              />
            </svg>
            <span>
              <strong>{calories}</strong> calories
            </span>
          </li>
          <li className="flex items-center gap-2 md:gap-4 text-base md:text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
              />
            </svg>
            <span>
              NutriScore &reg; <strong>{nutriScore}</strong>
            </span>
          </li>
          <li className="flex items-center gap-2 md:gap-4 text-base md:text-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-orange-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
              />
            </svg>
            <span>
              <strong>{rating.score}</strong> rating ({rating.count})
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const DietList = () => {
  const diets = [
    'Vegetarian',
    'Vegan',
    'Pescatarian',
    'Gluten-free',
    'Lactose-free',
    'Keto',
    'Paleo',
    'Low FODMAP',
    'Kid-friendly',
  ];

  return (
    <div className="bg-gray-100 p-4 md:p-8 rounded-xl">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6">
        Works with any diet:
      </h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-4">
        {diets.map(diet => (
          <li key={diet} className="flex items-center gap-2 md:gap-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 md:h-6 md:w-6 text-green-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
            <span className="text-base md:text-lg">{diet}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Meals = () => {
  const meals = [
    {
      image: img1,
      tags: [{ text: 'Vegetarian', color: 'bg-green-400 text-green-800' }],
      title: 'Japanese Gyozas',
      calories: '650',
      nutriScore: '47',
      rating: { score: '4.9', count: '537' },
    },
    {
      image: img2,
      tags: [
        { text: 'Vegan', color: 'bg-green-300 text-green-800' },
        { text: 'Paleo', color: 'bg-yellow-300 text-yellow-800' },
      ],
      title: 'Avocado Salad',
      calories: '400',
      nutriScore: '92',
      rating: { score: '4.8', count: '441' },
    },
  ];

  return (
    <section className="py-12 md:py-24" id="meals">
      <div className="container mx-auto px-4 text-center mb-8 md:mb-16">
        <span className="text-orange-500 font-semibold mb-2 block">Meals</span>
        <h2 className="text-3xl md:text-4xl font-bold">
          Omnifood AI chooses from 5,000+ recipes
        </h2>
      </div>
      <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8 md:mb-16">
        {meals.map((meal, index) => (
          <MealCard key={index} {...meal} />
        ))}
        <DietList />
      </div>
      <div className="container mx-auto px-4 text-center">
        <a
          href="#"
          className="text-base md:text-lg text-orange-500 font-semibold hover:underline"
        >
          See all recipes &rarr;
        </a>
      </div>
    </section>
  );
};

export default Meals;
