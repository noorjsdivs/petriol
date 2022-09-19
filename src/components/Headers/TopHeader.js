import React from "react";
import { motion } from "framer-motion";
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
        <motion.div
          initial={{ x: -500, scale: 0.6, opacity: 0 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex-col items-start md:items-center pl-4 md:pl-0 flex md:flex-row w-1/2 justify-start text-[12px]"
        >
          <p className="flex justify-center gap-2 items-center md:border-r-[2px] md:border-r-gray-400 px-0 md:px-2">
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
        </motion.div>
        <motion.div
          initial={{ x: 500, scale: 0.6, opacity: 0 }}
          animate={{ x: 0, scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex gap-3 px-4 xl:px-0"
        >
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
        </motion.div>
      </div>
    </div>
  );
};

export default TopHeader;
