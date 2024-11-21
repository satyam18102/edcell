import React from "react";
import "../Member.css"; // Import the CSS file

const members = [
  {
    name: "Ayush Singh",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/ayush2.jpg",
  },
  {
    name: "Piyush Praharaj",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/piush2.JPG",
  },
  {
    name: "Subham Pani",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/shubhampani.jpg",
  },
  {
    name: "Megha Patro",
    year: "2nd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/megha.jpg",
  },
  {
    name: "Puja Mahato",
    year: "3rd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/puja2.jpg",
  },
  {
<<<<<<< HEAD
    name: "Omkarnath ",
=======
    name: "Omkarnath",
>>>>>>> 94aac49b4b4b72a13418aa5225eccade0500c7b8
    year: "2nd year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/omkarnath.jpg",
  },
   {
    name: "Jasdeep Singh",
    year: "1st year",
    img: "/sparkupsummit/images/members/m7.jpeg",
    img2: "/sparkupsummit/images/members/jasdeep.jpg",
  },
  
];

const Content = () => {
  window.scrollTo(0,0)
  return (
    <div className="bg-black font-anton overflow-x-hidden lg:overflow-y-hidden">
      <h1
        className="text-center p-5 text-white text-7xl font-bold font-redressed lg:text-8xl"
        id="team-text"
      >
        Con<span className="text-red-500">tent</span>
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

export default Content;
