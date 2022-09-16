import React from "react";
import { learnMoreImg } from "../../assets/images/Assets";

const AboutUs = () => {
  return (
    <section className="w-full flex flex-col gap-16 justify-center items-center pt-20">
      <div className="max-w-screen-xl mx-auto flex flex-col gap-10 items-center ">
        <div className="w-full h-auto flex flex-col justify-start">
          <h1 className="text-[64px] font-bold">About Us</h1>
          <p className="text-[16px] font-normal w-[520px] mt-4">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.
          </p>
        </div>

        <div className="w-full flex items-center h-[360px]">
          <div className="w-2/5 h-full bg-redPrimary flex justify-center items-center">
            <h2 className="text-white text-[36px] font-bold w-1/2">
              We exist since 1975 on the oil and gas industry
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
