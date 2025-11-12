import { useState } from "react";
import Logo from "../assets/icons/logo.svg";
import NigeriaFlag from "../assets/icons/flag.png";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="w-full"
      style={{
        background:
          "linear-gradient(90deg, #E8FCFF 0%, #FCF8F0 48%, #E6EBFE 71%, #D9E8FF 100%)",
      }}
    >
      <div className="max-w-7xl mx-auto px-10 md:px-15 ">
        <div className="flex items-center justify-between h-16">
          {/* Left: Logo + Nav */}
          <div className="flex items-center gap-8">
            {/* Logo */}
            <div className="shrink-0">
              <img src={Logo} alt="CredPal" className="h-6 sm:h-7" />
            </div>

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 pl-5">
              <a
                href="#"
                className="text-md text-gray-700 hover:text-gray-900 hover:underline font-medium transition"
              >
                Products
              </a>
              <a
                href="#"
                className="text-md text-gray-700 hover:text-gray-900 hover:underline  font-medium transition"
              >
                Business
              </a>
              <a
                href="#"
                className="text-md text-gray-700 hover:text-gray-900 hover:underline  font-medium transition"
              >
                Shop
              </a>
            </nav>
          </div>

          {/* Right: language + CTA + mobile toggle */}
          <div className="flex items-center gap-4">
            {/* Language selector */}
            <div className="hidden sm:flex items-center gap-2 cursor-pointer select-none">
              <img
                src={NigeriaFlag}
                alt="NG"
                className="w-5 h-5 rounded-full"
              />
              <svg
                className="w-3 h-3 text-gray-700"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M6 8l4 4 4-4"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* CTA */}
            <div className="hidden md:block">
              <a
                href="#"
                className="inline-flex items-center px-4 py-2 rounded-full bg-black text-white text-sm font-semibold shadow-sm hover:bg-gray-800 transition"
              >
                Get the App
              </a>
            </div>

            {/* Hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="ml-1 inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 md:hidden"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle navigation"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-2 pb-4">
            <div className="flex flex-col gap-2">
              <a
                href="#"
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
              >
                Products
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
              >
                Business
              </a>
              <a
                href="#"
                className="px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
              >
                Shop
              </a>
              <a
                href="#"
                className="mt-2 px-3 py-2 text-sm bg-black text-white rounded-full inline-block text-center"
              >
                Get the App
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
