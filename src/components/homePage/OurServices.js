import React from "react";
import LearnMore from "../buttons/LearnMore";

const OurServices = () => {
  return (
    <div className="mt-6">
      <div className="flex flex-col lg:flex-row justify-center items-center flex-wrap gap-6 lg:gap-0">
        <div className="w-3/4 lg:w-2/4  py-16 flex flex-col justify-center items-start lg:items-center">
          <h3 className="font-bold text-[46px] md:text-[64px]">Our Services</h3>
          <p className="font-medium text-base w-full lg:w-[405px]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div
          className="w-3/4 lg:w-2/4  h-[410px] text-white"
          style={{
            background: "url(assets/servicesBgOne.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-darkLight flex flex-col justify-center px-8">
            <h1 className="text-[36px] font-bold mb-4">
              Modern natural oil and gas refineries.
            </h1>
            <LearnMore />
          </div>
        </div>
        <div
          className="w-3/4 lg:w-2/4  h-[410px] text-white"
          style={{
            background: "url(assets/servicesBgTwo.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-darkLight flex flex-col justify-center px-8">
            <h1 className="text-[36px] font-bold mb-4">
              Supply of national industries.
            </h1>
            <LearnMore />
          </div>
        </div>
        <div
          className="w-3/4 lg:w-2/4  h-[410px] text-white"
          style={{
            background: "url(assets/servicesBgThree.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-darkLight  flex flex-col justify-center px-8">
            <h1 className="text-[36px] font-bold mb-4">
              National fuel distribution and supply.
            </h1>
            <LearnMore />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
