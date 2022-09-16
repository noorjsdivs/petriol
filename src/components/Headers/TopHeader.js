import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const TopHeader = () => {
  return (
    <div className="bg-topHeader w-full">
      <div className="max-w-screen-xl h-[40px] mx-auto flex justify-between items-center text-white">
        <div className="flex w-1/2 justify-start text-[12px]  ">
          <p className="flex justify-center gap-2 items-center border-r-[2px] border-r-gray-400 px-0 md:px-2">
            <span>
              <MdOutlineMarkEmailUnread size={18} />
            </span>
            mail@yourcompany.com
          </p>
          <p className="flex justify-center gap-2 items-center px-0 md:px-2">
            <span>
              <FiPhoneCall size={18} />
            </span>
            +896 120 5889 (Toll free)
          </p>
        </div>
        <div className="flex gap-3">
          <FaFacebookF
            className="text-lightGray hover:text-white duration-300 cursor-pointer hover:scale-110"
            size={18}
          />
          <FaTwitter
            className="text-lightGray hover:text-white duration-300 cursor-pointer hover:scale-110"
            size={18}
          />
          <FaLinkedinIn
            className="text-lightGray hover:text-white duration-300 cursor-pointer hover:scale-110"
            size={18}
          />
          <FaInstagram
            className="text-lightGray hover:text-white duration-300 cursor-pointer hover:scale-110"
            size={18}
          />
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
