import React from "react";
const ContactIntro = () => {
  return (
    <section>
      <div
        className="w-full h-[300px]"
        style={{
          background: "url(assets/servicesBgOne.png)",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div className="w-full h-full bg-darkLight2 flex justify-center items-center">
          <h1 className="text-white text-[42px] font-bold">Contact</h1>
        </div>
      </div>
    </section>
  );
};

export default ContactIntro;
