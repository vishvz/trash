import React from "react";
import BorderImage from "./borderImage";
import skyexch from "../images/skyexch.png";

const AvailableSites = () => {
  return (
    <div className="flex flex-col gap-5 justify-center items-center">
      <h1 className="text-yellow-400 text-3xl">Available Sites</h1>
      <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
        <BorderImage src={skyexch} />
      </div>
    </div>
  );
};

export default AvailableSites;
