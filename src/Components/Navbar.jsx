import React, { useState } from "react";
import { Link } from "react-router"; 
import Logo from "./Logo";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header >
      <div className="container mx-auto flex justify-between items-center py-4">
       <Logo />

        {/* Hamburger button (mobile) */}
        <button
          className="lg:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <nav
          className={`flex-col lg:flex-row lg:flex lg:items-center lg:space-x-6 space-y-2 lg:space-y-0 absolute lg:static bg-white w-full left-0 lg:w-auto lg:bg-transparent transition-all duration-300 ${
            isOpen ? "top-16 flex transition-all  duration-150 ease-in-out " : "top-[-500px] hidden transition-all"
          }`}
          aria-label="Main Navigation"
        >
          <Link to="/about-us" className="block px-4 py-2 hover:text-green-600">
            About us
          </Link>
          <Link to="/service" className="block px-4 py-2 hover:text-green-600">
            Services
          </Link>
          <Link to="/use-cases" className="block px-4 py-2 hover:text-green-600">
            Use Cases
          </Link>
          <Link to="/pricing" className="block px-4 py-2 hover:text-green-600">
            Pricing
          </Link>
          <Link to="/blog" className="block px-4 py-2 hover:text-green-600">
            Blog
          </Link>
          <button className="p-2 border-2 rounded-2xl cursor-pointer mt-2 lg:mt-0 hover:bg-[#191A23] hover:text-white transition-all duration-700">
            Request a quote
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
