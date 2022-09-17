import React from "react";

const LearnMore = () => {
  return (
    <section className="w-full bg-lightGray h-auto py-20">
      <div className="max-w-screen-xl h-[400px] mx-auto flex flex-col bg-yellow-400 lg:flex-row items-center lg:h-[360px]">
        <div className="w-full h-1/2 lg:h-full lg:w-2/5 bg-redPrimary flex justify-center items-center">
          <h2 className="text-white text-[36px] font-bold p-6 lg:p-24">
            Learn more about our company
          </h2>
        </div>
        <div
          className="w-full h-1/2 lg:h-full lg:w-3/5 flex justify-center items-center"
          style={{
            background: "url(assets/learnMore.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <button className="w-[142px] h-[51px] flex justify-center items-center text-redPrimary text-[16px] font-semibold cursor-pointer hover:bg-topHeader duration-300 bg-white">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
