import React from "react";
import ParticlesComponent from "./Particles"; // Import the Particles component
import Home_Center from "./Home_Center";
import "./Home.css"; // Make sure to update your CSS

const Home = () => {
  return (
    <div className="bg-gradient-to-r from-red-500 to-black">
      <div id="home" className="home-container">
        <div
          className={window.innerWidth < 400 ? "flex-none" : "first-container"}
        >
          <ParticlesComponent id="particles" />
        </div>
        <div className="h-screen md:w-1/3 w-screen pt-6 responsive-bg">
          <Home_Center />
        </div>
        <div
          className={window.innerWidth < 400 ? "flex-none" : "first-container"}
        >
          <ParticlesComponent id="particles1" />
        </div>
      </div>
    </div>
  );
};

export default Home;
