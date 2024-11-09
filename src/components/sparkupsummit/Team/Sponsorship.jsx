import React from "react";
import "../Member.css"; // Import the CSS file

const members = [
  {
    name: "Piush Praharaj",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/piush2.JPG",
  },
  {
    name: "Shaswat Tripathi",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/saswatcrop.JPG",
  },
  {
    name: "Shubham Kumar",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/shubham.jpg",
  },
 
];

const Sponsorship = () => {
  window.scrollTo(0,0)
  return (
    <div className="bg-black font-anton overflow-x-hidden">
      <h1
        className="text-center p-5 text-white text-7xl font-bold font-redressed lg:text-8xl"
        id="team-text"
      >
        Sponsor<span className="text-red-500">ship</span>
      </h1>{" "}
      <div className="grid-container">
        {members.map((member, index) => (
          <div className="flip-card" key={index}>
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={member.img} alt={member.name} />
              </div>
              <div className="flip-card-back">
                <img src={member.img2} />
                <h2>{member.name}</h2>
                <h3>{member.year}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sponsorship;
