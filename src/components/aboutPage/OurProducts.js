import React from "react";
import { GiCheckMark } from "react-icons/gi";
import { BsPlay } from "react-icons/bs";
import { servicesImgFour } from "../../assets/images/Assets";

const OurProducts = () => {
  return (
    <section>
      <div className="w-full h-auto py-20 mt-10">
        <div className="max-w-screen-xl mx-auto flex flex-wrap justify-between">
          <div className="w-1/2 relative">
            <picture>
              <img src={servicesImgFour} alt="servicesImgFour" />
            </picture>
            <div className="playButton">
              <BsPlay size={50} />
            </div>
          </div>
          <div className="w-1/2 flex flex-col justify-center items-center gap-8">
            <div className="w-3/2">
              <h2 className="text-[36px] font-bold w-1/2 leading-tight">
                Why choose our products?
              </h2>
              <p className="text-[16px] font-normal w-2/3 mt-4">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem ipsum is that it has a more-or-less
                normal distribution.
              </p>
            </div>
            <div className="flex w-full">
              <ul className="flex flex-col justify-start gap-4 text-[16px] font-bold">
                <li className="flex justify-start items-center gap-4">
                  <span className="GiCheckMarkStyle">
                    <GiCheckMark />
                  </span>
                  Eco-friendly products
                </li>
                <li className="flex justify-start items-center gap-4">
                  <span className="GiCheckMarkStyle">
                    <GiCheckMark />
                  </span>
                  Clinically tested and tested for fuel types
                </li>
                <li className="flex justify-start items-center gap-4">
                  <span className="GiCheckMarkStyle">
                    <GiCheckMark />
                  </span>
                  Safe for large or small-scale production
                </li>
                <li className="flex justify-start items-center gap-4">
                  <span className="GiCheckMarkStyle">
                    <GiCheckMark />
                  </span>
                  International ISO Certified
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurProducts;
