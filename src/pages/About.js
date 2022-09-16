import React from "react";
import AboutUs from "../components/aboutPage/AboutUs";
import CoreServices from "../components/aboutPage/CoreServices";
import OurProducts from "../components/aboutPage/OurProducts";
import ServicesBanner from "../components/aboutPage/ServicesBanner";

const About = () => {
  return (
    <div>
      <AboutUs />
      <OurProducts />
      <CoreServices />
      <ServicesBanner />
    </div>
  );
};

export default About;
