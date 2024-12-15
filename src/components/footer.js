import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1e1b2c] text-white relative">
      {/* Top border line */}
      <div className="border-t border-gray-600 w-full" />
      
      {/* Main footer content */}
      <div className="py-16 relative">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-center  bg-no-repeat opacity-60"
          style={{
            backgroundImage: "url('./assets/footer 1.svg')",
            
          }}
        />
        
        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Logo Column */}
            <div className="md:col-span-4 flex flex-col items-center md:items-start">
              <img 
                src="/assets/header1.svg"
                alt="Tamil Association Logo"
                className="h-32 w-32 mb-6"
              />
              <div className="flex space-x-4">
               <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                  <img src="./assets/facebook.svg" alt="Facebook" className="h-6 w-6" />
              </a>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    <img src="./assets/instagram.svg" alt="Instagram" className="h-6 w-6" />
                    </a>
                    <a href="#" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    <img src="./assets/twitter.svg" alt="Twitter" className="h-6 w-6" />
                    </a>

              </div>
            </div>

            {/* Information Column */}
            <div className="md:col-span-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/terms" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/privacy" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link to="/raiseticket" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    Support
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links Column */}
            <div className="md:col-span-4">
              <h3 className="text-lg font-semibold mb-4 text-gray-200">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/membership" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    Membership
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    Events
                  </Link>
                </li>
                <li>
                  <Link to="/tamil-school" className="text-gray-300 hover:text-orange-500 transition-colors duration-200">
                    Tamil School
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <hr className="mt-12 border-gray-600  h-6/12 mx-auto" />

          {/* Copyright */}
          <div className="mt-12 text-start">
            <p className="text-sm text-gray-400">© All rights reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;