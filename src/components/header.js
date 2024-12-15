import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAboutDropdownOpen, setIsAboutDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const aboutDropdownItems = [
    { title: 'About Us', path: '/about' },
    { title: 'Our Team', path: '/team' },
  ];
  const menuItems = [
    { title: 'Home', path: '/' },
    {
      title: 'About',
      path: '/about',
      hasDropdown: true,
      dropdownItems: aboutDropdownItems
    },
    { title: 'Membership', path: '/membership' },
    { title: 'Events', path: '/events' },
    { title: 'Gallery', path: '/gallery' },
    { title: 'Blog', path: '/blog' },
    { title: 'Contact', path: '/contact' },
    { title: 'Login', path: '/login' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsAboutDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Handle dropdown item click
  const handleDropdownItemClick = () => {
    // Smooth transition for closing dropdown
    setIsAboutDropdownOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
          <img 
            src="/assets/header1.svg" 
            alt="Logo"
            className="h-20 w-20" 
          />    
</div>


          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group" ref={item.hasDropdown ? dropdownRef : null}>
                <div className="flex items-center">
                  <a
                    href={item.path}
                    className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium"
                  >
                    {item.title}
                    {item.hasDropdown && (
                      <ChevronDown className="ml-1 inline-block h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                    )}
                  </a>
                </div>
                
                {/* Desktop Dropdown */}
                {item.hasDropdown && (
                  <div 
                    className={`absolute z-10 w-48 py-2 mt-2 bg-white rounded-md shadow-xl
                      transition-all duration-200 ease-in-out transform
                      opacity-0 -translate-y-2 invisible
                      group-hover:opacity-100 group-hover:translate-y-0 group-hover:visible`}
                  >
                    {item.dropdownItems.map((dropdownItem) => (
                      <a
                        key={dropdownItem.title}
                        href={dropdownItem.path}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-150"
                        onClick={handleDropdownItemClick}
                      >
                        {dropdownItem.title}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-orange-500 focus:outline-none transition-colors duration-200"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="py-4">
            <div className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.title}>
                  {item.hasDropdown ? (
                    <div>
                      <button
                        onClick={() => setIsAboutDropdownOpen(!isAboutDropdownOpen)}
                        className="w-full flex items-center justify-between px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-150"
                      >
                        {item.title}
                        <ChevronDown 
                          className={`h-4 w-4 transform transition-transform duration-200 ${
                            isAboutDropdownOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      <div 
                        className={`transition-all duration-200 ease-in-out overflow-hidden ${
                          isAboutDropdownOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                        }`}
                      >
                        <div className="pl-6 space-y-1">
                          {item.dropdownItems.map((dropdownItem) => (
                            <a
                              key={dropdownItem.title}
                              href={dropdownItem.path}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-150"
                              onClick={handleDropdownItemClick}
                            >
                              {dropdownItem.title}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.path}
                      className="block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-500 transition-colors duration-150"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

