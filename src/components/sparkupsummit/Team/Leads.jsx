import React from "react";
import "../Member.css"; // Import the CSS file

const members = [
  {
    name: "Shaswat Tripathi",
    year: "Organizer",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/saswatcrop.JPG",
  },
  {
    name: "Shubham Srivastav",
    year: "Co-Organizer",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/shubham.jpg",
  },
  {
    name: "Ayush Singh",
    year: "Content Team",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/ayush2.jpg",
  },
  {
    name: "Priyanshi Dubey",
    year: "PR & Marketing",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/priyanshi2.JPG",
  },
  {
    name: "Piush Praharaj",
    year: "Sponsorship",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/piush2.JPG",
  },
  {
    name: "Puja Mahato",
    year: "Social Media",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/puja2.jpg",
  },
  {
    name: "Gomesh Aggrawal",
    year: "Graphics",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/gomesh.jpg",
  },
  {
    name: "Anmol Singh",
    year: "Logistics",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/anmol.JPG",
  },
   {
    name: "M.Flora",
    year: "Creative & Technical",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/flora.jpg",
  },
   {
    name: "Harish Bandia",
    year: "Production",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/agasty.JPG",
  },
   {
    name: "Ayushman Shaw",
    year: "Web",
    img: "assets/images/members/m7.jpeg",
    img2: "assets/images/members/agasty.JPG",
  },
  // Add more members here if needed
];

const Leads = () => {
  window.scrollTo(0,0)
  return (
    <div className="bg-black font-anton overflow-x-hidden">
      {/* <h1 className="text-white text-center">WEB TEAM</h1> */}
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

export default Leads;
