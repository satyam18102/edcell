<<<<<<< HEAD
import React from "react";
import Lottie from "react-lottie";
import animationData from "../Animation - 1726065806626.json"; // Adjust path accordingly

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

=======
import React from "react";
import Lottie from "react-lottie";
import animationData from "../Animation - 1726065806626.json"; // Adjust path accordingly

const Loader = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-900">
      <Lottie options={defaultOptions} height={300} width={300} />
    </div>
  );
};

>>>>>>> d4eb2f5f8be1f83093055e46cb574a25d71e07d5
export default Loader;