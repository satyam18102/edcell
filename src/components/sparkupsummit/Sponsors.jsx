import React from "react";
import { InfiniteMovingCards1 } from "./ui/infinite-moving-cards1";

const sponsorsData = [
  { id: 1, img: "/sparkupsummit/images/sponsors/sp1.png" },
  { id: 2, img: "/sparkupsummit/images/sponsors/sp2.jpeg" },
  { id: 3, img: "/sparkupsummit/images/sponsors/sp3.jpeg" },
  { id: 4, img: "/sparkupsummit/images/sponsors/sp4.jpeg" },
  { id: 5, img: "/sparkupsummit/images/sponsors/sp5.jpeg" },
  { id: 6, img: "/sparkupsummit/images/sponsors/sp6.jpeg" },
  { id: 7, img: "/sparkupsummit/images/sponsors/sp7.jpeg" },
  { id: 8, img: "/sparkupsummit/images/sponsors/sp8.jpeg" },
  { id: 9, img: "/sparkupsummit/images/sponsors/sp9.jpeg" },
  { id: 10, img: "/sparkupsummit/images/sponsors/sp10.jpeg" },
  { id: 11, img: "/sparkupsummit/images/sponsors/sp11.jpeg" },
  { id: 12, img: "/sparkupsummit/images/sponsors/sp12.jpeg" },
  { id: 13, img: "/sparkupsummit/images/sponsors/sp13.jpeg" },
  { id: 14, img: "/sparkupsummit/images/sponsors/sp14.jpeg" },
  { id: 15, img: "/sparkupsummit/images/sponsors/sp15.jpeg" },
];

const Sponsors = () => {
  return (
    <div className="mx-auto px-4 lg:px-12 py-8 lg:py-16">
      {/* <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-white">
        Our Sponsors
      </h2> */}
      <img
        className="mb-6 flex justify-center m-auto"
        src="/sparkupsummit/images/TEAM/1.png"
      />
      <div className="flex justify-center w-full z-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center">
          <InfiniteMovingCards1
            items={sponsorsData}
            direction="right"
            speed="normal"
            cardClassName="text-lg lg:text-2xl h-32 lg:h-100"
          />
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
