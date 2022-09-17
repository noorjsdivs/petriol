import { useEffect, useState } from "react";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdClose } from "react-icons/md";
import { Link } from "react-router-dom";
import { logoImg } from "../../assets/images/Assets";
import { headerLinks } from "../../constants";
import ContactButton from "../buttons/ContactButton";

const Header = () => {
  const [toggle, setToggle] = useState(false);
  // ================ Header feeding color style start here ================
  const [navSize, setnavSize] = useState("90px");
  const [navColor, setnavColor] = useState("#F40404");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#F96868") : setnavColor("#F40404");
    window.scrollY > 10 ? setnavSize("90px") : setnavSize("90px");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, [navColor]);
  // ================ Header feeding color style close here ================

  return (
    <nav
      style={{
        backgroundColor: navColor,
        height: navSize,
        transition: "all 1s",
      }}
      className="bg-redPrimary w-full z-50 top-0 sticky"
    >
      <div className="max-w-screen-xl h-[90px] mx-auto flex justify-between items-center text-white">
        <div className="flex w-1/2 justify-start pl-4 lg:pl-0">
          <Link to="/">
            <img className="w-[192px] h-[44px] " src={logoImg} alt="logoImg" />
          </Link>
        </div>
        <div className="hidden lg:flex justify-end items-center gap-10 md:pr-6 xl:pr-0">
          <ul className="flex gap-8 font-semibold text-[18px]">
            {headerLinks.map((header) => (
              <li className="hover:text-darkBg duration-300" key={header.id}>
                <Link to={header.link}> {header.title} </Link>
              </li>
            ))}
          </ul>
          <Link to="/contact">
            <ContactButton />
          </Link>
        </div>
        <div
          onClick={() => setToggle((prev) => !prev)}
          className="sm:hidden flex flex-1 justify-end items-center cursor-pointer"
        >
          {toggle ? <MdClose size={40} /> : <AiOutlineMenuUnfold size={40} />}

          <div
            className={`${
              toggle ? "flex" : "hidden"
            } p-6 bg-redPrimary absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar flex flex-col`}
          >
            <ul className="list-none flex flex-col justify-end items-center flex-1">
              {headerLinks.map((header) => (
                <li
                  key={header.id}
                  className={` uppercase text-white hover:text-darkLight2 font-semibold cursor-pointer border-b-lightGray border-b-[1px] text-[16px] mb-3  hover:border-b-[1px] hover:border-b-darkLight2 duration-300 w-full text-center`}
                >
                  <Link to={header.link}>{header.title}</Link>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <ContactButton />
            </Link>
          </div>
        </div>
        {/* <div
          onClick={() => setNavbar(!navbar)}
          className="lg:hidden text-white px-4 cursor-pointer"
        >
          {navbar ? <MdClose size={40} /> : <AiOutlineMenuUnfold size={40} />}
        </div>
        {navbar && (
          <div className="p-6 bg-redPrimary absolute top-20 right-0 my-2 min-w-[140px] rounded-xl sidebar">
            <ul className="flex-col gap-8 font-semibold text-[18px]">
              {headerLinks.map((header) => (
                <li
                  className="font-poppins uppercase text-white font-semibold cursor-pointer text-[16px] mb-4 hover:text-darkLight2 hover:border-b-[1px] border-lightGray duration-300 w-full text-center"
                  key={header.id}
                >
                  <Link to={header.link}> {header.title} </Link>
                </li>
              ))}
            </ul>
            <Link to="/contact">
              <ContactButton />
            </Link>
          </div>
        )} */}
      </div>
    </nav>
  );
};

export default Header;
