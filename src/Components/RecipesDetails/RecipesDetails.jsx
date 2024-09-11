import React from 'react';
import { useRecipes } from '../../Context/RecipesContext';
import { X } from 'lucide-react';

const RecipesDetails = ({ mealId, onClose }) => {
  const { mealDetails } = useRecipes();

  if (!mealDetails) return null;

  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    if (mealDetails[`strIngredient${i}`]) {
      ingredients.push({
        ingredient: mealDetails[`strIngredient${i}`],
        measure: mealDetails[`strMeasure${i}`],
      });
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <img
            src={mealDetails.strMealThumb}
            alt={mealDetails.strMeal}
            className="w-full h-64 object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            {mealDetails.strMeal}
          </h2>
          <p className="text-gray-600 mb-6">
            {mealDetails.strCategory} | {mealDetails.strArea}
          </p>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Ingredients
          </h3>
          <ul className="grid grid-cols-2 gap-2 mb-6">
            {ingredients.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="w-4 h-4 bg-orange-500 rounded-full mr-2"></span>
                {item.ingredient} - {item.measure}
              </li>
            ))}
          </ul>

          <h3 className="text-2xl font-semibold text-gray-800 mb-3">
            Instructions
          </h3>
          <p className="text-gray-700 mb-6 whitespace-pre-line">
            {mealDetails.strInstructions}
          </p>

          {mealDetails.strYoutube && (
            <div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">
                Video Tutorial
              </h3>
              <a
                href={mealDetails.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition"
              >
                Watch on YouTube
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default RecipesDetails;
