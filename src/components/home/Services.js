import React from "react";
import LearnMore from "../buttons/LearnMore";

const Services = () => {
  return (
    <section className="mt-6">
      <div className="flex flex-wrap">
        <div className="w-2/4 flex flex-col justify-center items-end">
          <h3 className="font-bold text-[64px] mr-36">Our Services</h3>
          <p className="font-medium text-base w-[405px] mr-36">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>
        <div
          className="w-2/4 h-[410px] text-white"
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
          className="w-2/4 h-[410px] text-white"
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
          className="w-2/4 h-[410px] text-white"
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
    </section>
  );
};

export default Services;
