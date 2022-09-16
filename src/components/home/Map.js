import React from "react";
import { mapImg } from "../../assets/images/Assets";
import ContactButton from "../buttons/ContactButton";

const Map = () => {
  return (
    <section>
      <div className="w-full h-auto mx-auto">
        <picture>
          <img src={mapImg} alt="" />
        </picture>
      </div>
      <div className="w-full bg-redPrimary h-[145px] text-white">
        <div className="max-w-screen-xl h-full mx-auto flex justify-between items-center">
          <h1 className="text-[42px] font-bold">
            Want to join as member branch in your area?
          </h1>
          <ContactButton />
        </div>
      </div>
    </section>
  );
};

export default Map;
