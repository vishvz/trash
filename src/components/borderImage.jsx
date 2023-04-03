import React from "react";
const BorderImage = ({ src }) => {
  return (
    <div className="">
      <img
        className="border border-yellow-300 shadow-md shadow-yellow-500 rounded-lg"
        src={src}
        alt="Available sites"
      />
    </div>
  );
};

export default BorderImage;
