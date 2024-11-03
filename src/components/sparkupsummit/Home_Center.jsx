import React, { useState, useEffect } from 'react';
import gunImage from "/sparkupsummit/images/home_center/shot2.png";
import gun1Image from "/sparkupsummit/images/home_center/shot1.png";
import maskImage from "/sparkupsummit/images/home_center/mask4.png";

const Card = () => {
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setRotation(scrollTop / 5); // Adjust the divisor to control rotation speed
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="bg-black max-h-screen  w-full flex flex-col justify-start items-center text-white p-2 mt-[-10px]">
      <img
        src={maskImage}
        alt="Mask"
        className="w-64 h-auto mt-[80px] md:mt-14   md:w-96 md:h-[500px] lg:h-[450px]  xl:h-[370px] object-contain mb-8"
      />

      {/* Container for Rotating Images and Text */}
      <div className="flex flex-row items-center justify-center space-x-[-86px]  md:mb-[-30px] mt-[-60px]  lg:space-x-[-130px]">
        {/* First Image Rotates in Opposite Direction, Starting at 45 Degrees */}
        <img
          src={gun1Image}
          alt="Gun1"
          className="w-48 h-auto sm:w-64 md:w-80 lg:w-96 xl:w-[280px] object-contain" // Increased sizes
          style={{ transform: `rotate(${5-rotation}deg)` }}
        />

        {/* Second Image Rotates in the Same Direction, Starting at 45 Degrees */}
        <img
          src={gunImage}
          alt="Gun"
          className="w-48 h-auto ml-[-20px] md:w-80 lg:w-96 xl:w-[280px] object-contain" // Increased sizes
           style={{ transform: `rotate(${rotation-5}deg)` }} // Rotating in the same direction from 45 degrees
        />
      </div>

      {/* Text below the images */}
      <div
        className="text-center font-anton text-4xl lg:text-6xl text-white my-1"
      >
        SPARK UP SUMMIT
      </div>
    </div>
  );
};

export default Card;
