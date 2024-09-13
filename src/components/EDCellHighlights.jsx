import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
  {
    id: 1,
    img: "/assets/images/ed_cell_highlights/card1.png",
  },
  { id: 2, img: "/assets/images/ed_cell_highlights/card2.png" },
  {
    id: 6,
    img: "/assets/images/ed_cell_highlights/card3.png",
  },
  { id: 3, img: "/assets/images/ed_cell_highlights/card4.png" },
  { id: 4, img: "/assets/images/ed_cell_highlights/card5.png" },
  { id: 5, img: "/assets/images/ed_cell_highlights/card6.png" },
];

const EDCellHighlights = () => {
  return (
    <div className="mx-auto px-4 lg:px-12 py-8 lg:py-16 bg-gray-900" id="edcellhighlights">
      <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-8 md:mb-12 text-center text-white">
        ED Cell Highlights
      </h2>
      <p className="text-sm md:text-base lg:text-xl text-gray-300 text-center mb-12">
        The ED Cell hosts activities throughout the year to promote
        entrepreneurship in the state of Odisha. Students and startup founders
        benefit from awareness camps, expert talks, entrepreneurship and faculty
        development programs, workshops, and annual fests. Competitions on
        business plans, idea generation, product prototypes, and proof of
        concept widen the exposure for incubatees and enrich their knowledge and
        networks.
      </p>
      <div className="flex justify-center w-full z-10 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl text-center">
          <InfiniteMovingCards
            items={musicSchoolTestimonials}
            direction="right"
            speed="normal"
            cardClassName="text-3xl lg:text-2xl h-32 lg:h-100"
          />
        </div>
      </div>
    </div>
  );
};

export default EDCellHighlights;
