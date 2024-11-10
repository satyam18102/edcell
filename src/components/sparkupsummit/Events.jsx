import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Event.css"; // Import the custom CSS for your button styles

// Swipe component
const Events = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4, // Default for larger screens
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768, // Mobile devices (you can adjust this value)
        settings: {
          slidesToShow: 1, // Show one slide on mobile
          slidesToScroll: 1,
        },
      },
    ],
  };

  const data = [
    {
      posterUrl: "/sparkupsummit/images/events_photo/1.png",
      url: "/sparkupsummit/events/ideathon.html",
    },
    {
      posterUrl: "/sparkupsummit/images/events_photo/3.png",
      url: "/sparkupsummit/events/build-a-thon.html",
    },
    {
      posterUrl: "/sparkupsummit/images/events_photo/6.png",
      url: "sparkupsummit/events/ad_mad_show.html",
    },
    {
      posterUrl: "/sparkupsummit/images/events_photo/2.png",
      url: "/sparkupsummit/events/panel_discussion.html",
    },
    {
      posterUrl: "/sparkupsummit/images/events_photo/4.png",
      url: "/sparkupsummit/events/start_up_pitch.html",
    },
    {
      posterUrl: "/sparkupsummit/images/events_photo/5.png",
      url: "/sparkupsummit/events/case_study.html",
    },
    {
      posterUrl: "/sparkupsummit/images/events_photo/7.png",
      url: "/sparkupsummit/events/bidding_war.html",
    },
  ];

  return (
    <>
      <img
        className="mb-6 flex justify-center m-auto"
        src="/sparkupsummit/images/TEAM/2.png"
      />      
    <div className="w-full m-auto" id="events">
      <div className="mt-20 flex flex-wrap gap-5 justify-center">
{/*         <Slider {...settings}> */}
          {data.map((d, index) => (
            <div key={index} className="bg-black w-[290px] h-auto text-black rounded-xl border-2 border-white">
              <div className="w-70  flex justify-center items-center rounded-t-xl">
                <img src={d.posterUrl} alt={`Event ${index + 1}`} className="h-70 w-70 rounded-xl" />
              </div>
              <div className="flex flex-col items-center justify-center gap-4 p-4">
                <a
                  href={d.url}
                  className="explore-buttonn" // Applying your custom button class
                  target="_blank" // Opens link in a new tab
                  rel="noopener noreferrer" // Adds security when opening in a new tab
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
{/*         </Slider> */}
      </div>
    </div>
    </>
  );
};

export default Events;
