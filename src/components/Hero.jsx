import React from "react";
import { BackgroundBeamsWithCollision } from "./ui/background-beams-with-collision";
import { FlipWords } from "./ui/flip-words";

export function Hero() {
  const words = ["better", "new", "innovative", "modern"];

  return (
    <div id="home">
      <BackgroundBeamsWithCollision>
        <div className="flex flex-col items-center justify-center h-screen px-4">
          <h2 className="text-5xl md:text-4xl lg:text-7xl font-bold text-center text-black dark:text-white font-sans tracking-tight">
            Entrepreneurship{" "}
            <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
              {/* bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 */}
              <div
                className="absolute left-0 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-[#3b82f6] to-[#9333ea]

 [text-shadow:0_0_rgba(0,0,0,0.1)]"
              >
                <span className="">Development Cell</span>
              </div>
              {/* bg-gradient-to-r from-purple-500 via-violet-500 to-pink-500 */}
              <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-[#3b82f6] to-[#9333ea] py-4">
                <span className="">Development Cell</span>
              </div>
            </div>
          </h2>
          <div className="text-2xl md:text-4xl lg:text-5xl font-normal text-neutral-600 dark:text-neutral-400 mt-6">
            Think
            <FlipWords words={words} />
          </div>
          <div className="flex flex-col text-center absolute bottom-20 h-18 w-screen">
            <div className="">
              <h1 className="text-white text-3xl">In Association with</h1>
            </div>
            <br />
            <div className="flex justify-center align-middle space-x-10 lg:space-x-14 md:space-x-10 sm:space-x-10 ">
              <img
                src="\assets\images\iiclogo.jpg"
                className="lg:w-auto sm:w-1/3 w-1/3 md:w-auto"
                alt=""
              />
              <img
                src="\assets\images\switchtechlogo.png"
                className="lg:w-auto sm:w-1/3 w-1/3 md:w-auto"
                alt=""
              />
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </div>
  );
}
