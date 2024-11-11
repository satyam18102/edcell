import React, { useState, useEffect } from "react";
import gunImage from "/sparkupsummit/images/home_center/shot2.png";
import gun1Image from "/sparkupsummit/images/home_center/shot1.png";
import maskImage from "/sparkupsummit/images/home_center/mask4.png";

const Card = () => {
  const [rotation, setRotation] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      setRotation(scrollTop / 5);
    };

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Calculate translation based on mouse position within viewport
      const xMove = (e.clientX / innerWidth - 0.5) * 100; // Adjust multiplier for more effect
      const yMove = (e.clientY / innerHeight - 0.5) * 100;
      setTilt({ x: xMove, y: yMove });
    };

    const handleTouchMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Only prevent default when interacting with the mask
      const maskArea = document.getElementById("mask-image");
      if (maskArea && maskArea.contains(e.target)) {
        e.preventDefault();
      }
      const touch = e.touches[0];
      const xMove = (touch.clientX / innerWidth - 0.5) * 100; // Adjust multiplier for more effect
      const yMove = (touch.clientY / innerHeight - 0.5) * 100;
      setTilt({ x: xMove, y: yMove });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("touchmove", handleTouchMove, { passive: false });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  return (
    <div className="max-h-screen w-full flex flex-col justify-start items-center text-white p-2">
      {/* Mask image with mouse-follow effect */}
      <img
        id="mask-image"
        src={maskImage}
        alt="Mask"
        className="w-[700px] h-[450px] mt-[20px] md:h-[550px] lg:h-[680px] xl:h-[680px] mb-8 shadow-lg transition-transform duration-200 ease-out"
        style={{
          transform: `translate(${tilt.x}px, ${tilt.y}px)`,
          transition: "transform 0.1s ease-out",
        }}
      />

      {/* Container for Rotating Images and Text */}
      {/* <div className="flex flex-row items-center justify-center space-x-[-86px] md:mb-[-30px] mt-[-60px] lg:space-x-[-130px]">
        <img
          src={gun1Image}
          alt="Gun1"
          className="w-48 h-auto sm:w-64 md:w-80 lg:w-96 xl:w-[280px] object-contain"
          style={{ transform: `rotate(${5 - rotation}deg)` }}
        />

        <img
          src={gunImage}
          alt="Gun"
          className="w-48 h-auto ml-[-20px] md:w-80 lg:w-96 xl:w-[280px] object-contain"
          style={{ transform: `rotate(${rotation - 5}deg)` }}
        />
      </div> */}

      {/* Text below the images */}
      <div className="text-center font-anton mb-14 text-5xl lg:text-6xl bg-black text-white">
        <span
          style={{
            backgroundColor: "red",
            color: "black",
            padding: "0px 7px 0px 7px",
          }}
        >
          SPARKUP
        </span>{" "}
        SUMMIT
      </div>
    </div>
  );
};

export default Card;
