import React from "react";
import { GoChevronRight } from "react-icons/go";

const Blog = () => {
  return (
    <section className="w-full h-auto py-28 bg-lightGray mx-auto">
      <div className="max-w-screen-xl h-full mx-auto flex flex-col lg:flex-row px-0 lg:px-6 justify-between items-center gap-8">
        <div
          className="w-2/3 lg:w-1/3 h-auto text-white"
          style={{
            background: "url(assets/blogBgOne.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-darkLight flex flex-col justify-center px-20 py-20">
            <h1 className="text-[24px] font-bold mb-4">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h1>
            <button className="w-[142px] h-[51px] flex justify-center items-center cursor-pointer hover:bg-topHeader duration-300 bg-white/50 text-[16px] text-white font-semibold mt-4">
              Learn More
            </button>
          </div>
        </div>
        <div
          className="w-2/3 lg:w-1/3 h-auto text-white"
          style={{
            background: "url(assets/blogBgTwo.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-darkLight flex flex-col justify-center px-20 py-20">
            <h1 className="text-[24px] font-bold mb-4">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h1>
            <button className="w-[142px] h-[51px] flex justify-center items-center cursor-pointer hover:bg-topHeader duration-300 bg-white/50 text-[16px] text-white font-semibold mt-4">
              Learn More
            </button>
          </div>
        </div>
        <div
          className="w-2/3 lg:w-1/3 h-auto text-white"
          style={{
            background: "url(assets/blogBgThree.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="w-full h-full bg-darkLight flex flex-col justify-center px-20 py-20">
            <h1 className="text-[24px] font-bold mb-4">
              lorem ipsum dolor sit amet consectetur adipiscing elit sed do
              eiusmod.
            </h1>
            <button className="w-[142px] h-[51px] flex justify-center items-center cursor-pointer hover:bg-topHeader duration-300 bg-white/50 text-[16px] text-white font-semibold mt-4">
              Learn More
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto px-6 flex justify-center lg:justify-end font-bold text-[16px] uppercase mt-4">
        <h3 className="flex justify-end items-center">
          More from the blog{" "}
          <span>
            <GoChevronRight size={20} />
          </span>
        </h3>
      </div>
    </section>
  );
};

export default Blog;
