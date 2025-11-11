import { useState } from 'react';
import Logo from "../assets/icons/logo.svg"

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-br from-blue-100 to-blue-50 shadow-sm border-b border-gray-200 px-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
             <img src={Logo} alt="logo" />
            </div>
          </div>

          {/* Center Section - Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-gray-800 font-medium transition-colors duration-200">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-800 font-medium transition-colors duration-200">
              Business
            </a>
            <a href="#" className="text-gray-700 hover:text-gray-800 font-medium transition-colors duration-200">
              Shop
            </a>
          </nav>

          {/* Right Section - Desktop User & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            {/* User Avatar/Initials (Desktop) */}
            <div className="hidden lg:flex items-center">
              <a href="#">
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition cursor-pointer">
              Get the App
            </button>
          </a>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden p-2 rounded-md text-gray-700 hover:text-gray-800 hover:bg-gray-100 transition-colors duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <a 
                href="#" 
                className="text-gray-700 hover:text-gray-800 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-gray-800 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Business
              </a>
              <a 
                href="#" 
                className="text-gray-700 hover:text-gray-800 font-medium py-2 px-4 hover:bg-gray-50 rounded-lg transition-colors duration-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Shop
              </a>
              
              {/* Mobile User Section */}
              <div className="border-t border-gray-200 pt-4 mt-2">
                <div className="flex items-center space-x-3 px-4 py-2">
                  <a href="#">
                <button className="bg-black text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 transition cursor-pointer">
              Get the App
            </button>
          </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Tablet Navigation (hidden on mobile and desktop) */}
        <div className="hidden md:flex lg:hidden border-t border-gray-200 py-3">
          <div className="flex justify-around w-full">
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium text-sm px-3 py-2">
              Products
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium text-sm px-3 py-2">
              Business
            </a>
            <a href="#" className="text-gray-700 hover:text-purple-600 font-medium text-sm px-3 py-2">
              Shop
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;