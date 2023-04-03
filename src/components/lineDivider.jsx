import React from "react";
import linedivider from "../images/linedivider.png";

const LineDivider = () => {
  return (
    <img
      className="md:hidden w-full"
      style={{ mixBlendMode: "exclusion" }}
      src={linedivider}
      alt="logo"
    />
  );
};

export default LineDivider;
