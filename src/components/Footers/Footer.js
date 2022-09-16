import React from "react";
import { certificateOne, certificateTwo } from "../../assets/images/Assets";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaRegMap } from "react-icons/fa";
import { footerLogo } from "../../assets/images/Assets";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <section>
      <div className="w-full bg-darkBg">
        {/* Footer Top */}
        <div className="max-w-screen-xl mx-auto py-24 text-white flex justify-start">
          <div className="w-2/5 flex flex-col h-full gap-8">
            <div>
              <img src={footerLogo} alt="logoImg" />
            </div>
            <div className="flex flex-col gap-2">
              <p className="flex items-center gap-2 text-[14px] font-normal">
                <span>
                  <MdOutlineMarkEmailUnread />
                </span>
                mail@yourcompany.com
              </p>
              <p className="flex items-center gap-2 text-[14px] font-normal">
                <span>
                  <FiPhoneCall />
                </span>
                +896 120 5889 (Toll free)
              </p>
              <p className="flex items-center gap-2 text-[14px] font-normal">
                <span>
                  <FaRegMap />
                </span>
                101 Baker Street, New York, USA, 12345
              </p>
            </div>
            <div className="flex gap-4">
              <span className="bg-redPrimary w-10 cur h-10 flex justify-center items-center rounded-full border-[1px] border-redPrimary hover:bg-darkBg cursor-pointer duration-300">
                <FaFacebookF size={22} className="text-white" />
              </span>
              <span className="bg-redPrimary w-10 cur h-10 flex justify-center items-center rounded-full border-[1px] border-redPrimary hover:bg-darkBg cursor-pointer duration-300">
                <FaTwitter size={22} className="text-white" />
              </span>
              <span className="bg-redPrimary w-10 cur h-10 flex justify-center items-center rounded-full border-[1px] border-redPrimary hover:bg-darkBg cursor-pointer duration-300">
                <FaLinkedinIn size={22} className="text-white" />
              </span>
              <span className="bg-redPrimary w-10 cur h-10 flex justify-center items-center rounded-full border-[1px] border-redPrimary hover:bg-darkBg cursor-pointer duration-300">
                <FaInstagram size={22} className="text-white" />
              </span>
            </div>
          </div>
          <div className="w-1/5">
            <h3 className="font-bold text-[16px] mb-6">Company</h3>
            <ul className="flex flex-col gap-4 text-[14px] font-normal">
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Gallery</li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3 className="font-bold text-[16px] mb-6">Others</h3>
            <ul className="flex flex-col gap-4 text-[14px] font-normal">
              <li>Blog</li>
              <li>Contact</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="w-1/5">
            <h3 className="font-bold text-[16px] mb-6">Certificate</h3>
            <div className="flex gap-2">
              <picture>
                <img src={certificateOne} alt="certificateOne" />
              </picture>
              <picture>
                <img src={certificateTwo} alt="certificateOne" />
              </picture>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-[#282828] h-[90px]">
        <div className="max-w-screen-xl h-full mx-auto flex justify-start items-center">
          <p className="text-[#6C6C6C] text-[16px] font-medium">
            © Copyright 2022 by AltDesain Studio – All right reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
