import React from "react";

import Banner from "./components/homePage/Banner";
import BiggestSupplier from "./components/homePage/BiggestSupplier";
import Blog from "./components/homePage/Blog";
import ClientsLogo from "./components/homePage/ClientsLogo";
import LearnMore from "./components/homePage/LearnMore";
import Map from "./components/homePage/Map";
import OurServices from "./components/homePage/OurServices";

const Prime = () => {
  return (
    <div className="font-bodyFont">
      <Banner />
      <BiggestSupplier />
      <OurServices />
      <LearnMore />
      <ClientsLogo />
      <Blog />
      <Map />
    </div>
  );
};

export default Prime;
