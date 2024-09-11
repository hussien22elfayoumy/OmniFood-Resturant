import { Link } from 'react-router-dom';
import logo from '../../assets/img/omnifood-logo.png';
import {
  IoLogoInstagram,
  IoLogoFacebook,
  IoLogoTwitter,
} from 'react-icons/io5';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-orange-300">
      <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {/* Logo and Social Links */}
        <div className="col-span-2 md:col-span-3 lg:col-span-1 flex flex-col">
          <Link to="/" className="mb-4">
            <img src={logo} alt="Omnifood logo" className="h-8" />
          </Link>
          <div className="flex gap-4 mb-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <IoLogoInstagram size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <IoLogoFacebook size={20} />
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <IoLogoTwitter size={20} />
            </a>
          </div>
          <p className="text-xs text-gray-500 mt-auto">
            Copyright &copy; {new Date().getFullYear()} by Omnifood, Inc. All
            rights reserved.
          </p>
        </div>

        {/* Contact Us */}
        <div className="col-span-2 md:col-span-1">
          <p className="text-sm font-medium mb-2">Contact us</p>
          <address className="not-italic text-xs leading-relaxed text-gray-500">
            <p className="mb-2">
              623 Harrison St., 2nd Floor, San Francisco, CA 94107
            </p>
            <p>
              <a className="hover:text-gray-700" href="tel:415-201-6370">
                415-201-6370
              </a>
              <br />
              <a
                className="hover:text-gray-700"
                href="mailto:hello@omnifood.com"
              >
                hello@omnifood.com
              </a>
            </p>
          </address>
        </div>

        {/* Account Section */}
        <nav>
          <p className="text-sm font-medium mb-2">Account</p>
          <ul className="text-xs space-y-1">
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                Create account
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                Sign in
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                iOS app
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                Android app
              </a>
            </li>
          </ul>
        </nav>

        {/* Company Section */}
        <nav>
          <p className="text-sm font-medium mb-2">Company</p>
          <ul className="text-xs space-y-1">
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                About Omnifood
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                For Business
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                Cooking partners
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                Careers
              </a>
            </li>
          </ul>
        </nav>

        {/* Resources Section */}
        <nav>
          <p className="text-sm font-medium mb-2">Resources</p>
          <ul className="text-xs space-y-1">
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                Recipe directory
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
                Help center
              </a>
            </li>
            <li>
              <a className="text-gray-500 hover:text-gray-700" href="#">
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
