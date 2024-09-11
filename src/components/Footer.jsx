import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer id="footer" className="h-10">
      <div className="bg-[#100a2e] text-white py-4 sm:py-6 px-4 sm:px-8 lg:px-12">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section - Logo and Address */}
          <div className="text-center lg:text-left mb-4 lg:mb-8">
            <img
              src="/assets/images/logo-5.png"
              alt="Logo"
              className="mx-auto lg:mx-0 mb-2 w-[4rem] sm:w-16 lg:w-20"
            />
            <address className="not-italic leading-6 mb-4 text-sm lg:text-lg font-semibold">
              Silicon University, <br />
              Silicon Hills, Patia, <br />
              Bhubaneswar- 751024 <br />
              Odisha, India.
            </address>
          </div>

          {/* Center Section - Contact Details and Social Media */}
          <div className="text-center mb-4 lg:mb-0">
            <p className="mb-2 text-sm lg:text-lg font-semibold">
              Phone: 9937289499 / 7381499499
            </p>
            <p className="mb-4 text-sm lg:text-lg font-semibold">
              Email: info@silicon.ac.in
            </p>
            <div className="flex justify-center space-x-4 sm:space-x-6 text-sm lg:text-lg">
              <a href="#" className="hover:text-gray-300">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaYoutube />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaLinkedinIn />
              </a>
              <a href="#" className="hover:text-gray-300">
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Right Section - Copyright and Additional Info */}
          <div className="text-center lg:text-right">
            <p className="mb-1 text-sm lg:text-lg font-semibold">
              Formerly known as
            </p>
            <p className="font-bold mb-2 text-sm lg:text-lg">
              Silicon Institute of Technology
            </p>
            <p className="text-xs lg:text-lg font-semibold mt-2">
              &copy; All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
