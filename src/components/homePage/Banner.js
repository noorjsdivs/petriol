import React from "react";
import LearnMore from "../buttons/LearnMore";

const Banner = () => {
  return (
    <section
      className="w-full h-[700px]"
      style={{ background: "url(assets/bannerImg.png)" }}
    >
      <div className="w-full h-full bg-darkLight">
        <div className="max-w-screen-xl mx-auto h-full flex-col justify-center items-center py-52 text-white">
          <h1 className="w-2/3 text-[64px] font-bold mb-4">
            We exist since 1975 on the oil and gas industry.
          </h1>
          <LearnMore />
        </div>
      </div>
    </section>
  );
};

export default Banner;
