import React from "react";
import { Link } from "react-router-dom";

const Members = () => {
  return (
    <div
      id="team"
      className="w-full h-full flex flex-col items-center justify-center bg-cover bg-black bg-center"
    >
      <img
        className="flex justify-center m-auto"
        src="/sparkupsummit/images/TEAM/3.png"
      />
      <div className="relative flex items-center justify-center">
        <img
          src="/sparkupsummit/images/mask.jpg"
          alt="Mask"
          className="max-w-[300px] h-[550px] ml-[-30px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px] xl:max-w-[700px] max-h-[40%] object-contain"
        />
        <div className="text-white opacity-60 text-2xl md:ml-1 md:w-1/2 space-y-2 font-bold mt-4">
          <Link to="/sparkupsummit/Leads">
            <h2 className="text-white tracking-[2px]">
              L<span className="text-red-500">eads</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Mentor">
            <h2 className="text-white tracking-[2px]">
              M<span className="text-red-500">entor</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Content">
            <h2 className="text-white tracking-[2px]">
              Co<span className="text-red-500">ntent</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Creative">
            <h2 className="text-white tracking-[2px]">
              Cre<span className="text-red-500">ative</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Logistics">
            <h2 className="text-white tracking-[2px]">
              Logi<span className="text-red-500">stics</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Marketing">
            <h2 className="text-white tracking-[2px]">
              Marke<span className="text-red-500">ting</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/SocialMedia">
            <h2 className="text-white tracking-[2px]">
              Social<span className="text-red-500"> Media</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Sponsorship">
            <h2 className="text-white tracking-[2px]">
              Spons<span className="text-red-500">orship</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Production">
            <h2 className="text-white tracking-[2px]">
              Prod<span className="text-red-500">uction</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Graphics">
            <h2 className="text-white tracking-[2px]">
              Gra<span className="text-red-500">phics</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Finance">
            <h2 className="text-white tracking-[2px]">
              Fi<span className="text-red-500">nance</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Web">
            <h2 className="text-white  tracking-[2px]">
              W<span className="text-red-500">eb</span>
            </h2>
          </Link>
        </div>
      </div>
      <div className="flex justify-center items-center  bg-transparent flex-wrap p-1 rounded-md  shadow-red-400 shadow-sm border-red-300 border-x-2 border-y-2 mb-3">
        <h3  className="font-anton text-white text-xl">Click above words to explore Team</h3>
      </div>
    </div>
  );
};

export default Members;
