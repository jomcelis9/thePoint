import { Link } from "react-router-dom";
import { useState } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="border-thePointRed">
      <nav className="fixed w-full top-0 right-0 z-50 bg-white shadow-md">
        <div className="flex justify-between items-center py-4 px-4">

          <Link to="/">
            <img
              src="/src/images/Logo.png" 
              alt="Logo"
              className="h-20 w-auto object-contain" 
            />
          </Link>

          {/* Hamburger Button for Mobile */}
          <div className="sm:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none"
              aria-expanded={isOpen ? "true" : "false"}
              aria-label="Toggle navigation"
            >
              {/* Hamburger Icon */}
              <svg
                className={`${isOpen ? "hidden" : "block"} w-6 h-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>

              {/* Close Icon */}
              <svg
                className={`${isOpen ? "block" : "hidden"} w-6 h-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Desktop Navigation */}
          <div className={`hidden sm:flex flex-row items-center gap-14 ml-auto`}>
            <Link
              to="/"
              className="inline-block font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
            >
              Home
            </Link>
            <a
              href="#about"
              className="inline-block font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
            >
              About Us
            </a>
            <Link
              to="/contact"
              className="inline-block font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
            >
              Contact
            </Link>
            <Link
              to="/booking"
              className="inline-block font-bold text-gray-600 hover:text-gray-400 focus:outline-none"
            >
              Book
            </Link>

            <Link to={"/login"}>
              <button
                type="button"
                className="inline-block bg-gradient-to-r from-thePointRed to-thePointPink text-white font-bold rounded-full text-sm px-4 py-2 shadow-md hover:-translate-y-1 transform transition duration-300 ease-in-out"
              >
                Login
              </button>
            </Link>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`sm:hidden ${isOpen ? "block" : "hidden"} bg-white shadow-md`}>
          <div className="flex flex-col items-center py-4">
            <Link
              to="/"
              className="block font-bold text-gray-600 hover:text-gray-400 py-2"
              onClick={() => setIsOpen(false)} 
            >
              Home
            </Link>
            <a
              href="#about"
              className="block font-bold text-gray-600 hover:text-gray-400 py-2"
              onClick={() => setIsOpen(false)} 
            >
              About Us
            </a>
            <Link
              to="/contact"
              className="block font-bold text-gray-600 hover:text-gray-400 py-2"
              onClick={() => setIsOpen(false)} 
            >
              Contact
            </Link>
            <Link
              to="/booking"
              className="block font-bold text-gray-600 hover:text-gray-400 py-2"
              onClick={() => setIsOpen(false)} 
            >
              Book
            </Link>

            <Link to={"/login"}>
              <button
                type="button"
                className="bg-gradient-to-r from-thePointRed to-thePointPink text-white font-bold rounded-full text-sm px-4 py-2 shadow-md hover:-translate-y-1 transform transition duration-300 ease-in-out"
                onClick={() => setIsOpen(false)} 
              >
                Login
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
