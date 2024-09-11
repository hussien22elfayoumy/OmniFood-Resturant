import axios from 'axios';
import React, { createContext, useState, useContext } from 'react';

const RecipesContext = createContext();

export const RecipesProvider = ({ children }) => {
  const [meals, setMeals] = useState([]);
  const [mealDetails, setMealDetails] = useState(null);
  const [loading, setLoading] = useState(false);

  const getMealsByName = async (searchTerm = '') => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      setMeals(response.data.meals || []);
    } catch (error) {
      console.error('Error fetching meals by name:', error);
      setMeals([]);
    } finally {
      setLoading(false);
    }
  };

  const getMealsDetailsById = async idMeal => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
      );
      setMealDetails(response.data.meals ? response.data.meals[0] : null);
    } catch (error) {
      console.error('Error fetching meal details:', error);
      setMealDetails(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RecipesContext.Provider
      value={{
        meals,
        mealDetails,
        loading,
        getMealsByName,
        getMealsDetailsById,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};

export const useRecipes = () => useContext(RecipesContext);
