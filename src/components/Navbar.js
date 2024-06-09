import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-800 text-white z-50">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <a href="/" className="text-xl font-bold under">RAVI KUMAR</a>

        {/* Navigation Links (Desktop) */}
        <ul className="hidden md:flex space-x-4">
          <li>
            
            <a href="#skills" className="hover:text-gray-400">Skills</a>
          </li>
          <li>
            <a href="#projects" className="hover:text-gray-400">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-gray-400">Contact</a>
          </li>
        </ul>
        {/* Menu Button (Mobile) */}
        <button
          className="md:hidden focus:outline-none"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                d="M6 18L18 6M6 6l12 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            ) : (
              <>
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <ul className="md:hidden bg-gray-800 absolute top-full left-0 w-full py-4">
          <li>
            <a
              href="#skills"
              className="block text-white px-4 py-2 hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Skills
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="block text-white px-4 py-2 hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="block text-white px-4 py-2 hover:bg-gray-700"
              onClick={toggleMenu}
            >
              Contact
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
