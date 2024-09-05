import logo from '../assets/img/omnifood-logo.png';

const Footer = () => {
  return (
    <footer className='py-32 border-t border-orange-500'>
      <div className='container mx-auto px-8 grid grid-cols-5 gap-x-16'>
        <div className='col-span-1 flex flex-col'>
          <a href='#' className='mb-8'>
            <img src={logo} alt='Omnifood logo' className='h-8' />
          </a>
          <ul className='flex gap-6 mb-auto'>
            <li>
              <a
                href='#'
                className='text-2xl text-gray-600 hover:text-gray-700'
              >
                <ion-icon name='logo-instagram'></ion-icon>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-2xl text-gray-600 hover:text-gray-700'
              >
                <ion-icon name='logo-facebook'></ion-icon>
              </a>
            </li>
            <li>
              <a
                href='#'
                className='text-2xl text-gray-600 hover:text-gray-700'
              >
                <ion-icon name='logo-twitter'></ion-icon>
              </a>
            </li>
          </ul>
          <p className='text-sm text-gray-500 mt-auto'>
            Copyright &copy; <span className='year'>2027</span> by Omnifood,
            Inc. All rights reserved.
          </p>
        </div>
        <div className='col-span-1'>
          <p className='text-lg font-medium mb-10'>Contact us</p>
          <address className='not-italic text-base leading-relaxed'>
            <p className='mb-6'>
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a
                className='text-gray-500 hover:text-gray-700'
                href='tel:415-201-6370'
              >
                415-201-6370
              </a>
              <br />
              <a
                className='text-gray-500 hover:text-gray-700'
                href='mailto:hello@omnifood.com'
              >
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>
        <nav className='col-span-1'>
          <p className='text-lg font-medium mb-10'>Account</p>
          <ul className='flex flex-col gap-6'>
            <li>
              <a className='text-gray-500 hover:text-gray-700' href='#'>
                Create account
              </a>
            </li>
            <li>
              <a className='text-gray-500 hover:text-gray-700' href='#'>
                Sign in
              </a>
            </li>
            <li>
              <a className='text-gray-500 hover:text-gray-700' href='#'>
                iOS app
              </a>
            </li>
            <li>
              <a className='text-gray-500 hover:text-gray-700' href='#'>
                Android app
              </a>
            </li>
          </ul>
        </nav>
        <nav className='col-span-1'>
          <p className='text-lg font-medium mb-10'>Company</p>
          <ul className='flex flex-col gap-6'>
            <li>
              <a className='text-gray-500 hover:text-gray-700' href='#'>
                About Omnifood
              </a>
            </li>
            <li>
              <a className='text-gray-500 hover:text-gray-700' href='#'>
                For Business
              </a>
            </li>
            <li>
              <a className='text-gray-500 hover:text-gray-700' href='#'>
                Cooking partners
              </a>
            </li>
            <li>
              <a className='text-gray-500 hover:text-gray-700' href='#'>
                Careers
              </a>
            </li>
          </ul>
        </nav>
        <nav className='col-span-1'>
          <p className='text-lg font-medium mb-10'>Resources</p>
          <ul className='flex flex-col gap-6'>
            <li>
              <a className='text-gray-500 hover:text-gray-700' href='#'>
                Recipe directory
              </a>
            </li>
            <li>
              <a className='text-gray-500 hover:text-gray-700' href='#'>
                Help center
              </a>
            </li>
            <li>
              <a className='text-gray-500 hover:text-gray-700' href='#'>
                Privacy & terms
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
