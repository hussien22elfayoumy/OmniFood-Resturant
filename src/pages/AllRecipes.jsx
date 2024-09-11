import React, { useEffect, useState } from 'react';
import { useRecipes } from '../Context/RecipesContext';
import RecipesDetails from '../Components/RecipesDetails/RecipesDetails';

function AllRecipes() {
  const { meals, loading, getMealsByName, getMealsDetailsById } = useRecipes();
  const [selectedMealId, setSelectedMealId] = useState(null);

  useEffect(() => {
    getMealsByName();
  }, []);

  const handleMealClick = idMeal => {
    getMealsDetailsById(idMeal);
    setSelectedMealId(idMeal);
  };

  const handleCloseDetails = () => {
    setSelectedMealId(null);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-orange-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-orange-500"></div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-orange-50 to-white min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-2 text-center">
          Discover Our Healthy Meals
        </h1>
        <p className="text-xl text-gray-600 mb-12 text-center">
          Nourish your body with our delicious and nutritious options
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {meals.map(meal => (
            <div
              key={meal.idMeal}
              onClick={() => handleMealClick(meal.idMeal)}
              className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
            >
              <div className="relative h-64">
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity hover:bg-opacity-10"></div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                  {meal.strMeal}
                </h2>
                <p className="text-sm text-gray-600 mb-4">
                  Delicious and nutritious
                </p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-orange-600 transition">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedMealId && (
        <RecipesDetails mealId={selectedMealId} onClose={handleCloseDetails} />
      )}
    </div>
  );
}

export default AllRecipes;
