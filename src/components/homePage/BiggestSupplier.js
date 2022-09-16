import React from "react";
import {
  servicesImgOne,
  servicesImgTwo,
  servicesImgThree,
  servicesImgFour,
} from "../../assets/images/Assets";

const BiggestSupplier = () => {
  return (
    <section className="w-full mx-auto">
      <div className="max-w-screen-xl py-20 mx-auto flex justify-start gap-20 items-center">
        <div className="w-1/4">
          <h2 className="text-[48px] font-bold">
            The biggest supplier on the country
          </h2>
        </div>
        <div className="w-2/4">
          <p className="text-[16px] font-medium text-[#6C6C6C]">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution.
          </p>
        </div>
      </div>
      <div className="flex justify-between gap-5">
        <div className="overflow-hidden">
          <picture>
            <img
              className="w-full h-full hover:scale-125   duration-500 cursor-pointer"
              src={servicesImgOne}
              loading="lazy"
              alt="servicesImgOne"
            />
          </picture>
        </div>
        <div className="overflow-hidden">
          <picture>
            <img
              className="w-full h-full hover:scale-125 duration-500 cursor-pointer"
              src={servicesImgTwo}
              loading="lazy"
              alt="servicesImgTwo"
            />
          </picture>
        </div>
        <div className="overflow-hidden">
          <picture>
            <img
              className="w-full h-full hover:scale-125 duration-500 cursor-pointer"
              src={servicesImgThree}
              loading="lazy"
              alt="servicesImgThree"
            />
          </picture>
        </div>
        <div className="overflow-hidden">
          <picture>
            <img
              className="w-full h-full hover:scale-125 duration-500 cursor-pointer"
              src={servicesImgFour}
              loading="lazy"
              alt="servicesImgFour"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default BiggestSupplier;