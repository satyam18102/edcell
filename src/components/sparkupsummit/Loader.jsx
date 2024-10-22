import React from "react";


export const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#151416]"> 
      <video
        className="w-full h-auto object-fill md:p-32"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="sparkupsummit/images/loader2/Loader02_updated.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};