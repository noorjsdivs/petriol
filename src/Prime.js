import React from "react";
import Header from "./components/Headers/Header";
import TopHeader from "./components/Headers/TopHeader";
import Banner from "./components/home/Banner";
import BiggestSupplier from "./components/home/BiggestSupplier";
import Services from "./components/home/Services";

const Prime = () => {
  return (
    <div className="font-bodyFont">
      <TopHeader />
      <Header />
      <Banner />
      <BiggestSupplier />
      <Services />
    </div>
  );
};

export default Prime;
