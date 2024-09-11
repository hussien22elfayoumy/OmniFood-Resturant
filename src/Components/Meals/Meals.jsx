import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import img1 from '../../assets/img/meals/meal-1.jpg';
import img2 from '../../assets/img/meals/meal-2.jpg';

const Icon = ({ name }) => {
  const icons = {
    flame:
      'M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z',
    scale:
      'M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3',
    star: 'M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z',
    check: 'M5 13l4 4L19 7',
  };

  Icon.propTypes = {
    name: PropTypes.string,
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 text-orange-500"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d={icons[name]}
      />
    </svg>
  );
};

const MealCard = ({ image, tags, title, calories, nutriScore, rating }) => (
  <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
    <img className="w-full h-48 object-cover" src={image} alt={title} />
    <div className="p-4">
      <div className="flex flex-wrap gap-2 mb-2">
        {tags.map(tag => (
          <span
            key={tag.text}
            className={`px-2 py-1 text-xs font-semibold uppercase rounded-full ${tag.color}`}
          >
            {tag.text}
          </span>
        ))}
      </div>
      <h3 className="text-xl font-medium text-gray-800 mb-4">{title}</h3>
      <ul className="space-y-2">
        {[
          { icon: 'flame', text: `${calories} calories` },
          { icon: 'scale', text: `NutriScore ® ${nutriScore}` },
          { icon: 'star', text: `${rating.score} rating (${rating.count})` },
        ].map((item, index) => (
          <li key={index} className="flex items-center gap-2 text-sm">
            <Icon name={item.icon} />
            <span>{item.text}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

MealCard.propTypes = {
  image: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  title: PropTypes.string.isRequired,
  calories: PropTypes.string.isRequired,
  nutriScore: PropTypes.string.isRequired,
  rating: PropTypes.shape({
    score: PropTypes.string.isRequired,
    count: PropTypes.string.isRequired,
  }).isRequired,
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
    <div className="bg-gray-100 p-4 rounded-xl">
      <h3 className="text-xl font-semibold mb-4">Works with any diet:</h3>
      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
        {diets.map(diet => (
          <li key={diet} className="flex items-center gap-2 text-sm">
            <Icon name="check" />
            <span>{diet}</span>
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
      nutriScore: '74',
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
    <section className="py-16" id="meals">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-orange-500 font-semibold mb-2 block">
            Meals
          </span>
          <h2 className="text-3xl font-bold">
            Omnifood AI chooses from 5,000+ recipes
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {meals.map((meal, index) => (
            <MealCard key={index} {...meal} />
          ))}
          <DietList />
        </div>
        <div className="text-center">
          <Link
            to="/recipes"
            className="text-base text-orange-500 font-semibold hover:underline"
          >
            See all recipes &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Meals;
