import React from "react";
import { logoImg } from "../../assets/images/Assets";
import { headerLinks } from "../../constants";
import ContactButton from "../buttons/ContactButton";

const Header = () => {
  return (
    <div className="bg-redPrimary w-full">
      <div className="max-w-screen-xl h-[90px] mx-auto flex justify-between items-center text-white">
        <div className="flex w-1/2 justify-start">
          <img className="w-[192px] h-[44px]" src={logoImg} alt="" />
        </div>
        <div className="flex justify-end items-center gap-8">
          <ul className="flex gap-8 font-semibold text-[16px]">
            {headerLinks.map((header) => (
              <li key={header.id}>{header.title}</li>
            ))}
          </ul>
          <ContactButton />
        </div>
      </div>
    </div>
  );
};

export default Header;
