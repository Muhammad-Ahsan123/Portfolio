import React from "react";
// import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../contstants";

const Tech = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {technologies.map((technology) => (
        <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 " key={technology.name}>
          {/* <BallCanvas icon={technology.icon} /> */}
          <img src={technology.icon} alt="" />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
