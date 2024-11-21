import React from "react";
import "../Member.css"; // Import the CSS file

const members = [
  {
    name: "Piush Praharaj",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/piush.jpg",
  },
  {
    name: "Shaswat Tripathi",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/saswatcrop.JPG",
  },
  {
    name: "Shubham Srivastav",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/shubham.jpg",
  },
  {
    name: "Shubham Pani",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/shubhampani.jpg",
  },
  {
    name: "M.Flora",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/flora.jpg",
  },
  {
    name: "Priyanshi Dubey",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/priyanshi2.JPG",
  },
  {
    name: "Aditi Dubey",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/aditi.jpg",
  },
  {
    name: "Ritu Priya",
    year: "2nd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/ritupriya.jpg",
  },
  {
    name: "Megha patro",
    year: "2nd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/megha.jpg",
  },
  {
    name: "Jaydeep Dash",
    year: "2nd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/jaydeep.jpg",
  },
  {
    name: "Omkarnath",
    year: "2nd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/omkarnath.jpg",
  },
 
];

const Sponsorship = () => {
  window.scrollTo(0,0)
  return (
    <div className="bg-black font-anton overflow-x-hidden">
      <h1
        className="text-center p-5 text-white text-6xl md:text-7xl font-bold font-redressed lg:text-8xl"
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
