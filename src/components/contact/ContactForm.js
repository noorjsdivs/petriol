import React from "react";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegMap } from "react-icons/fa";
import { AiFillCaretDown } from "react-icons/ai";

const ContactForm = () => {
  return (
    <section className="max-w-screen-xl mx-auto h-auto flex gap-10 py-20 mb-10">
      <div className="w-1/3 bg-lightGray h-auto px-10 py-20 border-b-[4px] border-b-redPrimary hover:shadow-2xl duration-300">
        <div>
          <h3 className="text-[32px] font-bold">
            Contact us to get more information
          </h3>
          <span className="w-1/4 h-2 bg-redPrimary inline-block"></span>
        </div>
        <div className="flex flex-col gap-2 mt-10">
          <p className="flex items-center gap-2 text-[16px] font-semibold w-4/5">
            <span>
              <MdOutlineMarkEmailUnread size={20} />
            </span>
            mail@yourcompany.com
          </p>
          <p className="flex items-center gap-2 text-[16px] font-semibold w-4/5">
            <span>
              <FiPhoneCall size={20} />
            </span>
            +896 120 5889 (Toll free)
          </p>
          <p className="flex items-center gap-2 text-[16px] font-semibold w-4/5">
            <span className="-mt-4">
              <FaRegMap size={20} />
            </span>
            101 Baker Street, New York, USA, 12345
          </p>
        </div>
      </div>
      <div className="w-2/3 h-auto bg-white flex flex-col justify-between relative">
        <div className="flex justify-between gap-16">
          <input
            className="bg-lightGray w-1/2 py-3 font-semibold px-4 placeholder:text-darkLight"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="bg-lightGray w-1/2 py-3 font-semibold px-4 placeholder:text-darkLight"
            type="text"
            placeholder="Your Phone"
          />
        </div>
        <div className="flex justify-between gap-16 relative">
          <input
            className="bg-lightGray w-1/2 py-3 font-semibold px-4 placeholder:text-darkLight"
            type="text"
            placeholder="Your Email"
          />
          <input
            className="bg-lightGray w-1/2 py-3 font-semibold px-4 placeholder:text-darkLight"
            type="text"
            placeholder="Message Categories"
          />
          <span className="absolute right-6 top-3 w-6 h-6 bg-gray-400 flex justify-center items-center cursor-pointer hover:text-white hover:bg-black duration-300">
            <AiFillCaretDown />
          </span>
        </div>
        <div className="flex">
          <textarea
            className="w-full bg-lightGray py-3 font-semibold px-4 placeholder:text-darkLight resize-none"
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Your Messages"
          ></textarea>
        </div>
        <button className="absolute w-[142px] h-[51px] flex justify-center items-center cursor-pointer hover:bg-topHeader duration-300 bg-redPrimary border-redPrimary border-[1px] text-white text-[18px] font-bold -bottom-20">
          Send
        </button>
      </div>
    </section>
  );
};

export default ContactForm;
