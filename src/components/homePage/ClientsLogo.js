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
      <div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center px-6 lg:px-0 py-20">
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
