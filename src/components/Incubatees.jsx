import React from "react";
import { items } from "../constants/index";

const Incubatees = () => {
  return (
    <div
      id="Incubatees"
      className="text-center flex align-middle justify-center flex-col m-auto px-4 lg:px-12 py-8 lg:py-16 bg-gray-900"
    >
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-white">
        Incubatees Showcase
      </h2>
      {items.map((item, index) => (
        <div
          key={index}
          className="mb-12 md:mb-16 lg:mb-20 rounded-lg overflow-hidden bg-gradient-to-r from-[#3b3080] to-[#0c023d] "
        >
          <div className="flex flex-col lg:flex-row items-center justify-between p-4 lg:p-8">
            <div className="text-left lg:w-3/4 mb-4 lg:mb-0">
              <h3 className="text-lg md:text-xl lg:text-3xl font-bold mb-4 text-white drop-shadow-md">
                {item.title}
              </h3>
              <p className="text-sm md:text-base lg:text-xl text-gray-300">
                {item.description}
              </p>
            </div>
            <div className="mt-2 lg:mt-0 lg:w-1/4 text-right">
              <a
                href={item.link}
                className="text-xs md:text-sm lg:text-lg font-bold text-white hover:text-[#00ccb1] transition"
                target="_blank"
                rel="noopener noreferrer"
              >
                KNOW MORE &gt;&gt;
              </a>
            </div>
          </div>
          {index < items.length && (
            <hr className="border-t border-[#00ccb1] mt-4 lg:mt-8" />
          )}
        </div>
      ))}
    </div>
  );
};

export default Incubatees;


