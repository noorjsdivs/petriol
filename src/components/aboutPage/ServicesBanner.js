import React from "react";
import {
  servicesImgOne,
  servicesImgTwo,
  servicesImgThree,
  servicesImgFour,
} from "../../assets/images/Assets";

const ServicesBanner = () => {
  return (
    <div className="flex justify-between gap-5 mt-16 mb-4">
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
  );
};

export default ServicesBanner;
