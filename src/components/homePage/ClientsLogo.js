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
        <picture className="overflow-hidden">
          <img
            className="clientLogoHover"
            src={clientsLogoOne}
            alt="clientsLogoOne"
          />
        </picture>
        <picture className="overflow-hidden">
          <img
            className="clientLogoHover"
            src={clientsLogoTwo}
            alt="clientsLogoTwo"
          />
        </picture>
        <picture className="overflow-hidden">
          <img
            className="clientLogoHover"
            src={clientsLogoThree}
            alt="clientsLogoThree"
          />
        </picture>
        <picture className="overflow-hidden">
          <img
            className="clientLogoHover"
            src={clientsLogoFour}
            alt="clientsLogoFour"
          />
        </picture>
      </div>
    </div>
  );
};

export default ClientsLogo;
