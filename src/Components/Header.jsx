import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import logo from '../assets/img/omnifood-logo.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsSticky(window.scrollY > 0);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNav = () => setIsNavOpen(!isNavOpen);

  return (
    <header
      className={`bg-[#fdf2e9] py-4 px-4 sm:px-6 ${
        isSticky
          ? 'fixed top-0 left-0 right-0 z-50 bg-white bg-opacity-97 shadow-md'
          : ''
      }`}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="#">
            <img src={logo} alt="Omnifood logo" className="h-6 sm:h-7" />
          </a>

          <button
            className="lg:hidden border-none bg-transparent cursor-pointer"
            onClick={toggleNav}
            aria-label="Toggle navigation"
          >
            {isNavOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <nav className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {['How it works', 'Meals', 'Testimonials', 'Pricing'].map(
                item => (
                  <li key={item}>
                    <a
                      className="text-lg font-medium text-[#333] hover:text-[#cf711f] transition-all duration-300"
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li>
                <a
                  className="text-lg font-medium bg-[#e67e22] text-white py-2 px-4 rounded-full hover:bg-[#cf711f] transition-all duration-300"
                  href="#cta"
                >
                  Try for free
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {isNavOpen && (
          <nav className="mt-4 lg:hidden">
            <ul className="flex flex-col items-center gap-4">
              {['How it works', 'Meals', 'Testimonials', 'Pricing'].map(
                item => (
                  <li key={item}>
                    <a
                      className="text-base font-medium text-[#333] hover:text-[#cf711f] transition-all duration-300"
                      href={`#${item.toLowerCase().replace(' ', '-')}`}
                      onClick={() => setIsNavOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li>
                <a
                  className="text-base font-medium bg-[#e67e22] text-white py-2 px-4 rounded-full hover:bg-[#cf711f] transition-all duration-300"
                  href="#cta"
                  onClick={() => setIsNavOpen(false)}
                >
                  Try for free
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
