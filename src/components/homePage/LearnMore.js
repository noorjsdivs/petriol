import React from "react";
import { learnMoreImg } from "../../assets/images/Assets";

const LearnMore = () => {
  return (
    <div className="w-full flex justify-center items-center bg-lightGray h-[630px]">
      <div className="max-w-screen-xl mx-auto flex items-center h-[360px]">
        <div className="w-2/5 h-full bg-redPrimary">
          <h2 className="text-white text-[36px] font-bold p-24">
            Learn more about our company
          </h2>
        </div>
        <div className="w-3/5 relative">
          <picture>
            <img
              className="w-full h-[360px] object-cover"
              src={learnMoreImg}
              alt="learnMoreImg"
            />
          </picture>
          <button className="w-[142px] h-[51px] flex justify-center items-center text-redPrimary text-[16px] font-semibold cursor-pointer hover:bg-topHeader duration-300 bg-white absolute top-1/2 left-72">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;
