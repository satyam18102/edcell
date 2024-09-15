
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const getNavbarBgClass = () => {
    if (isMenuOpen) {
      return "bg-black bg-opacity-50 backdrop-blur-md";
    } else if (isScrolled) {
      return "bg-black bg-opacity-50 backdrop-blur-md shadow-lg";
    } else {
      return "bg-transparent";
    }
  };

  return (
    <nav
      className={`fixed w-full z-30 top-0 transition-colors ${getNavbarBgClass()}`}
    >
      <div className="w-full mx-auto px-4">
        <div className="flex items-center gap-3 h-24">
          <div className="flex items-center">
            <img
              src="/assets/images/logo.png"
              alt="Logo"
              className="h-16 md:h-20 w-auto"
            />
            <h2 className="text-white text-xl lg:text-3xl lg:ml-2 ml-1 font-bold">
              Entrepreneurship<br></br> Development Cell
            </h2>
            
          </div>

          <div className="hidden md:flex mx-auto space-x-6">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 text-xl cursor-pointer"
              activeClass="text-gray-400" // Add this line
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="event"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 text-xl cursor-pointer"
              activeClass="text-gray-400" // Add this line
            >
              Events
            </ScrollLink>
            <Link
              to="members"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 text-xl cursor-pointer"
              activeClass="text-gray-400" // Add this line
            >
              Members
            </Link>
            <ScrollLink
              to="Incubatees"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 text-xl cursor-pointer"
              activeClass="text-gray-400" // Add this line
            >
              Incubatees
            </ScrollLink>
            <ScrollLink
              to="edcellhighlights"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 text-xl cursor-pointer"
              activeClass="text-gray-400" // Add this line
            >
              About
            </ScrollLink>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              className="text-white hover:text-gray-300 text-xl cursor-pointer"
              activeClass="text-gray-400" // Add this line
            >
              Gallery
            </Link>
          </div>
          <div className="md:hidden ml-12">
            <button
              type="button"
              className="text-white hover:text-gray-300 focus:outline-none"
              aria-label="Toggle navigation"
              onClick={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            >
              <svg
                className="h-10 w-10"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden h-full bg-gray-900 bg-opacity-70 backdrop-blur-md">
          <div className="px-4 pt-4 pb-6 space-y-4 text-center">
            <ScrollLink
              to="home"
              smooth={true}
              duration={500}
              className="block text-white hover:text-gray-300 text-lg cursor-pointer"
              activeClass="text-gray-400" // Add this line
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </ScrollLink>
            <ScrollLink
              to="event"
              smooth={true}
              duration={500}
              className="block text-white hover:text-gray-300 text-lg cursor-pointer"
              activeClass="text-gray-400" // Add this line
              onClick={() => setIsMenuOpen(false)}
            >
              Event
            </ScrollLink>
            <Link
              to="members"
              smooth={true}
              duration={500}
              className="block text-white hover:text-gray-300 text-lg cursor-pointer"
              activeClass="text-gray-400" // Add this line
              onClick={() => setIsMenuOpen(false)}
            >
              Member
            </Link>
            <ScrollLink
              to="Incubatees"
              smooth={true}
              duration={500}
              className="block text-white hover:text-gray-300 text-lg cursor-pointer"
              activeClass="text-gray-400" // Add this line
              onClick={() => setIsMenuOpen(false)}
            >
              Incubatees
            </ScrollLink>
            <ScrollLink
              to="edcellhighlights"
              smooth={true}
              duration={500}
              className="block text-white hover:text-gray-300 text-lg cursor-pointer"
              activeClass="text-gray-400" // Add this line
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </ScrollLink>
            <Link
              to="gallery"
              smooth={true}
              duration={500}
              className="block text-white hover:text-gray-300 text-lg cursor-pointer"
              activeClass="text-gray-400" // Add this line
              onClick={() => setIsMenuOpen(false)}
            >
              Gallery
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
5
