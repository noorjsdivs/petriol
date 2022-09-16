import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logoImg } from "../../assets/images/Assets";
import { headerLinks } from "../../constants";
import ContactButton from "../buttons/ContactButton";

const Header = () => {
  const [navSize, setnavSize] = useState("10rem");
  const [navColor, setnavColor] = useState("transparent");
  const listenScrollEvent = () => {
    window.scrollY > 10 ? setnavColor("#F96868") : setnavColor("#F40404");
    window.scrollY > 10 ? setnavSize("90px") : setnavSize("90px");
  };
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => {
      window.removeEventListener("scroll", listenScrollEvent);
    };
  }, []);
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
        <div className="flex w-1/2 justify-start">
          <Link to="/">
            <img className="w-[192px] h-[44px]" src={logoImg} alt="logoImg" />
          </Link>
        </div>
        <div className="flex justify-end items-center gap-10">
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
      </div>
    </nav>
  );
};

export default Header;
