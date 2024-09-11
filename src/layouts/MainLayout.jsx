import { Outlet } from 'react-router-dom';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

function MainLayout() {
  return (
    <div className="font-rubik text-[#555]">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default MainLayout;
