import React from "react";
import ContactForm from "../components/contact/ContactForm";
import ContactIntro from "../components/contact/ContactIntro";
import ClientsLogo from "../components/homePage/ClientsLogo";
import Map from "../components/homePage/Map";

const Contact = () => {
  return (
    <div>
      <ContactIntro />
      <ContactForm />
      <ClientsLogo />
      <Map />
    </div>
  );
};

export default Contact;
