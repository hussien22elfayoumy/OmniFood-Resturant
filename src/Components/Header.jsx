import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/img/omnifood-logo.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`flex items-center justify-between bg-[#fdf2e9] h-[8.6rem] px-12 ${
        isSticky
          ? 'fixed top-0 w-full z-50 h-20 bg-white bg-opacity-97 shadow-md'
          : ''
      }`}
    >
      <div className='container mx-auto px-4 h-full flex items-center justify-between'>
        <a href='#'>
          <img src={logo} alt='Omnifood logo' className='h-8' />
        </a>

        <nav className={`main-nav ${isNavOpen ? 'block' : 'hidden'} md:block`}>
          <ul className='flex flex-col md:flex-row items-center gap-12'>
            <li>
              <a
                className='text-[1.8rem] font-medium text-[#333] hover:text-[#cf711f] transition-all duration-300'
                href='#how'
              >
                How it works
              </a>
            </li>
            <li>
              <a
                className='text-[1.8rem] font-medium text-[#333] hover:text-[#cf711f] transition-all duration-300'
                href='#meals'
              >
                Meals
              </a>
            </li>
            <li>
              <a
                className='text-[1.8rem] font-medium text-[#333] hover:text-[#cf711f] transition-all duration-300'
                href='#testimonials'
              >
                Testimonials
              </a>
            </li>
            <li>
              <a
                className='text-[1.8rem] font-medium text-[#333] hover:text-[#cf711f] transition-all duration-300'
                href='#pricing'
              >
                Pricing
              </a>
            </li>
            <li>
              <a
                className='text-[1.8rem] font-medium bg-[#e67e22] text-white py-3 px-6 rounded-full hover:bg-[#cf711f] transition-all duration-300'
                href='#cta'
              >
                Try for free
              </a>
            </li>
          </ul>
        </nav>

        <button
          className='md:hidden border-none bg-transparent cursor-pointer'
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          {isNavOpen ? <X size={48} /> : <Menu size={48} />}
        </button>
      </div>
    </header>
  );
};

export default Header;
