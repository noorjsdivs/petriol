import React from "react";
import { BsBuilding } from "react-icons/bs";
import { GiOilPump } from "react-icons/gi";
import { RiCommunityLine } from "react-icons/ri";
import LearnMoreIcon from "../buttons/LearnMoreIcon";

const CoreServices = () => {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto flex flex-col">
        <div className="w-full h-auto flex flex-col justify-center items-center">
          <h1 className="text-[64px] font-bold">Core Services</h1>
          <p className="text-[16px] text-darkLight font-semibold">
            It is a long established fact that a reader
          </p>
        </div>
        <div className="flex gap-16 mt-20">
          <div className="w-1/3 bg-white shadow-lg hover:shadow-2xl relative py-24 px-10 border-b-[10px] border-b-yellow-500 hover:border-b-yellow-700 duration-300">
            <p className="coreServicesIcon">
              <BsBuilding size={35} />
            </p>
            <h3 className="text-[24px] font-bold">
              Modern natural oil and gas refineries
            </h3>
            <p className="text-[16px] mt-2">
              It is a long established fact that a reader will be distraced by
              the readable content.
            </p>
            <div className="absolute bottom-6 right-12">
              <LearnMoreIcon />
            </div>
          </div>
          <div className="w-1/3 bg-white shadow-lg hover:shadow-2xl relative py-24 px-10 border-b-[10px] border-b-yellow-500 hover:border-b-yellow-700 duration-300">
            <p className="coreServicesIcon">
              <GiOilPump size={35} />
            </p>
            <h3 className="text-[24px] font-bold">
              National fuel distribution and supply
            </h3>
            <p className="text-[16px] mt-2">
              It is a long established fact that a reader will be distraced by
              the readable content.
            </p>
            <div className="absolute bottom-6 right-12">
              <LearnMoreIcon />
            </div>
          </div>
          <div className="w-1/3 bg-white shadow-lg hover:shadow-2xl relative py-24 px-10 border-b-[10px] border-b-yellow-500 hover:border-b-yellow-700 duration-300">
            <p className="coreServicesIcon">
              <RiCommunityLine size={35} />
            </p>
            <h3 className="text-[24px] font-bold">
              Supply of national industries
            </h3>
            <p className="text-[16px] mt-2">
              It is a long established fact that a reader will be distraced by
              the readable content.
            </p>
            <div className="absolute bottom-6 right-12">
              <LearnMoreIcon />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;
