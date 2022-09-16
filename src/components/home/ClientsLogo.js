import React from "react";
import {
  clientsLogoOne,
  clientsLogoTwo,
  clientsLogoThree,
  clientsLogoFour,
} from "../../assets/images/Assets";

const ClientsLogo = () => {
  return (
    <div className="w-full bg-white">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center py-20">
        <picture>
          <img src={clientsLogoOne} alt="" />
        </picture>
        <picture>
          <img src={clientsLogoTwo} alt="" />
        </picture>
        <picture>
          <img src={clientsLogoThree} alt="" />
        </picture>
        <picture>
          <img src={clientsLogoFour} alt="" />
        </picture>
      </div>
    </div>
  );
};

export default ClientsLogo;
