import React from "react";
import {
  servicesImgOne,
  servicesImgTwo,
  servicesImgThree,
  servicesImgFour,
  learnMoreImg,
} from "../../assets/images/Assets";

const GalleryView = () => {
  return (
    <div className="max-w-screen-xl mx-auto flex flex-wrap gap-6 grow justify-center items-center mb-32">
      <picture className="overflow-hidden cursor-pointer">
        <img className="galleryImg" src={servicesImgOne} alt="servicesImgOne" />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img className="galleryImg" src={servicesImgTwo} alt="servicesImgTwo" />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img
          className="galleryImg"
          src={servicesImgThree}
          alt="servicesImgThree"
        />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img
          className="galleryImg"
          src={servicesImgFour}
          alt="servicesImgFour"
        />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img className="galleryImg" src={learnMoreImg} alt="learnMoreImg" />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img className="galleryImg" src={servicesImgOne} alt="servicesImgOne" />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img className="galleryImg" src={servicesImgTwo} alt="servicesImgTwo" />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img
          className="galleryImg"
          src={servicesImgThree}
          alt="servicesImgThree"
        />
      </picture>
      <picture className="overflow-hidden cursor-pointer">
        <img
          className="galleryImg"
          src={servicesImgFour}
          alt="servicesImgFour"
        />
      </picture>
    </div>
  );
};

export default GalleryView;
