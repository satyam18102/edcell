import "./Footer.css";
import React from "react";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div id="contact">
      <div className="bg-[#100a2e] z-40 text-white py-4 sm:py-6 px-4 sm:px-8 lg:px-12 footer bg-[#7b070be7] bg-blend-darken bg-cover">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* Left Section - Logo and Address */}
          <div className="text-center lg:text-left mb-4 lg:mb-8">
            <img
              src="/sparkupsummit/images/logo-5.png"
              alt="Logo"
              className="mx-auto lg:mx-0 mb-2 w-[4rem] sm:w-16 lg:w-20"
            />
            <address className="not-italic leading-6 mb-4 text-sm lg:text-lg ">
              Silicon University, <br />
              Silicon Hills, Patia, <br />
              Bhubaneswar- 751024 <br />
              Odisha, India.
            </address>
          </div>

          {/* Center Section - Contact Details and Social Media */}
          <div className="text-center mb-4 lg:mb-0">
            <p className="mb-4 text-2xl lg:text-3xl ">Follow Us</p>
            <div className="flex justify-center space-x-8 text-2xl lg:text-2xl">
              <a
                href="https://www.facebook.com/edcell.silicon?mibextid=qi2Omg&rdid=KykV0M2JNhYzdfjM&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2Fm1xFfobBGSQdj7z1%2F%3Fmibextid%3Dqi2Omg"
                className="hover:text-gray-300"
              >
                <FaFacebookF />
              </a>
              <a
                href="https://www.linkedin.com/company/entrepreneurshipdevelopmentcellsitbbsr/"
                className="hover:text-gray-300"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/sit.edcell?igsh=cmpzcWdnOWc5ZWYz"
                className="hover:text-gray-300"
              >
                <FaInstagram />
              </a>
            </div>
            <br />
            <div className="text-center flex justify-center align-middle mt-3">
              Page Visits: &nbsp;
              <img
                className="w-28 rounded-xl"
                src="https://hitwebcounter.com/counter/counter.php?page=17191340&style=0009&nbdigits=5&type=page&initCount=100"
                title="Counter Widget"
                Alt="Visit counter For Websites"
                border="0"
              />
            </div>
          </div>

          {/* Right Section - Copyright and Additional Info */}
          <div className="text-center lg:text-left mt-8">
            <p className="mb-2 text-2xl lg:text-3xl ">Contact Us</p>
            <p className="mb-2 text-sm lg:text-lg ">
              Phone: +91 9861140921 | +91 9826745888
            </p>
            <p className="mb-4 text-sm lg:text-lg ">
              Email: edcell@silicon.ac.in
            </p>
          </div>
        </div>
        <br />
{/*         <div
          style={{ fontFamily: "serif" }}
          className="text-center font-bold text-[#f6c572]"
        >
          Coded under the mask by <br />
          <a
            target="blank"
            href="https://www.linkedin.com/in/rahul-kumar-singh-367b14256"
          >
            <span className="text-white underline">Rahul</span>{" "}
          </a>
          &nbsp;&nbsp;
          <a
            target="blank"
            href="https://www.linkedin.com/in/piyush-kumar-90b2a02aa?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <span className="text-white underline"> Piyush</span>{" "}
          </a>
          &nbsp;&nbsp;
          <a
            target="blank"
            href="https://www.linkedin.com/in/ayushmanshaw?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
          >
            <span className="text-white underline"> Ayushman</span>{" "}
          </a>
          &nbsp;&nbsp;
          <a
            target="blank"
            href="https://www.linkedin.com/in/lavkush-solanki-3577a4254"
          >
            <span className="text-white underline"> Lavkush</span>{" "}
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <a
            target="blank"
            href="https://www.linkedin.com/in/satyam-sinha-a12748268"
          >
            <span className="text-white underline">Satyam</span>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Footer;
