import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';

import MainLayout from './layouts/MainLayout';
import HomePage from './pages/HomePage';
import AllRecipes from './pages/AllRecipes';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route path='/' element={<HomePage />} />
      <Route path='/recipes' element={<AllRecipes />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
