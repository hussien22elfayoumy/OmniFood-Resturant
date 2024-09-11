import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AllRecipes from './pages/AllRecipes';
import { RecipesProvider } from './Context/RecipesContext';

const router = createBrowserRouter([
  {
    path: '',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'recipes',
        element: <AllRecipes />,
      },
    ],
  },
]);

function App() {
  return (
    <RecipesProvider>
      <RouterProvider router={router} />
    </RecipesProvider>
  );
}

export default App;
