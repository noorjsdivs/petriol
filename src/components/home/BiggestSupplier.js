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
        <div>
          <picture>
            <img src={servicesImgOne} loading="lazy" alt="" />
          </picture>
        </div>
        <div>
          <picture>
            <img src={servicesImgTwo} loading="lazy" alt="" />
          </picture>
        </div>
        <div>
          <picture>
            <img src={servicesImgThree} loading="lazy" alt="" />
          </picture>
        </div>
        <div>
          <picture>
            <img src={servicesImgFour} loading="lazy" alt="" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default BiggestSupplier;
