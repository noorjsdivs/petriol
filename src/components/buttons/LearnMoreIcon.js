import React from "react";
import { AiFillCaretRight } from "react-icons/ai";

const LearnMoreIcon = () => (
  <div className="text-redPrimary font-bold hover:text-darkBg duration-300 cursor-pointer">
    <p className="flex justify-center items-center">
      Learn More
      <span>
        <AiFillCaretRight size={20} />
      </span>
    </p>
  </div>
);

export default LearnMoreIcon;
