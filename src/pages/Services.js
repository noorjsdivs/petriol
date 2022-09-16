import React from "react";
import CoreServices from "../components/aboutPage/CoreServices";
import OurProducts from "../components/aboutPage/OurProducts";
import Blog from "../components/homePage/Blog";
import ServicesStatictics from "../components/servicesPage/ServicesStatictics";

const Services = () => {
  return (
    <div>
      <OurProducts />
      <CoreServices />
      <ServicesStatictics />
      <Blog />
    </div>
  );
};

export default Services;
