import React from "react";
import graduate from "../Assets/images/graduate.webp";
import svg from "../Assets/SVG/triangleAsymmetrical.svg";

const Banner = () => {
  return (
    <div>
      <div
        className="flex justify-between px-20"
        style={{ backgroundColor: "#1D1C51" }}
      >
        <div className="flex justify-center items-start flex-col">
          <h1 className="text-4xl font-bold text-white text-start my-5">
            Experience a learning
            <br /> platform that take you
            <br /> next level
          </h1>
          <button className="bg-white opacity-25 font-bold w-48 h-12 rounded-full">
            Explore Now
          </button>
        </div>
        <div>
          <img className="rounded-full" src={graduate} alt="" />
        </div>
      </div>
      <img src={svg} alt="" />
    </div>
  );
};

export default Banner;
