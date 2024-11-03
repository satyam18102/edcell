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
        <div className="text-white opacity-60 text-2xl md:ml-1 md:w-1/2 space-y-2 font-bold">
          <Link to="/sparkupsummit/Leads">
            <h2 className="text-white">
              L<span className="text-red-500">eads</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Content">
            <h2>
              Co<span className="text-red-500">ntent</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Creative">
            <h2>
              Cre<span className="text-red-500">ative</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Logistics">
            <h2>
              Logi<span className="text-red-500">stics</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Marketing">
            <h2>
              Marke<span className="text-red-500">ting</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/SocialMedia">
            <h2>
              Social<span className="text-red-500"> Media</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Sponsorship">
            <h2>
              Spons<span className="text-red-500">orship</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Production">
            <h2>
              Prod<span className="text-red-500">uction</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Graphics">
            <h2>
              Gra<span className="text-red-500">phics</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Finance">
            <h2>
              Fi<span className="text-red-500">nance</span>
            </h2>
          </Link>
          <Link to="/sparkupsummit/Web">
            <h2 className="text-white">
              W<span className="text-red-500">eb</span>
            </h2>
          </Link>
        </div>
      </div>
      <div classname="flex justify-center items-center p-2">
        <p classname="text-white font-anton text-xl">Click above words to explore Team</p>
      </div>
    </div>
  );
};

export default Members;
