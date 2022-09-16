import React from "react";
import Footer from "./components/Footers/Footer";
import Header from "./components/Headers/Header";
import TopHeader from "./components/Headers/TopHeader";
import Banner from "./components/home/Banner";
import BiggestSupplier from "./components/home/BiggestSupplier";
import Blog from "./components/home/Blog";
import ClientsLogo from "./components/home/ClientsLogo";
import LearnMore from "./components/home/LearnMore";
import Map from "./components/home/Map";
import Services from "./components/home/Services";

const Prime = () => {
  return (
    <div className="font-bodyFont">
      <TopHeader />
      <Header />
      <Banner />
      <BiggestSupplier />
      <Services />
      <LearnMore />
      <ClientsLogo />
      <Blog />
      <Map />
      <Footer />
    </div>
  );
};

export default Prime;
