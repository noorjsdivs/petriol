import React from "react";
import AboutUsButton from "../buttons/AboutUsButton";

const GalleryIntro = () => {
  return (
    <section>
      <div
        className="w-full h-[300px]"
        style={{
          background: "url(assets/servicesBgOne.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full bg-darkLight2 flex justify-center items-center">
          <h1 className="text-white text-[42px] font-bold">Gallery</h1>
        </div>
      </div>
      <div className="max-w-screen-xl py-20 mx-auto flex justify-start gap-20 items-center">
        <div className="w-1/4">
          <AboutUsButton />
        </div>
        <div className="w-3/4">
          <p className="text-[16px] font-medium text-[#6C6C6C] text-justify">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GalleryIntro;
