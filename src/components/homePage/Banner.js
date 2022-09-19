import React from "react";
import { motion } from "framer-motion";
import LearnMore from "../buttons/LearnMore";

const Banner = () => {
  return (
    <section
      className="w-full h-[700px]"
      style={{
        background: "url(assets/bannerImg.png)",
        backgroundSize: "cover",
        backgroundPosition: "left",
      }}
    >
      <div className="w-full h-[700px] bg-darkLight">
        <div className="max-w-screen-xl px-6 xl:px-0 h-full mx-auto flex flex-col justify-center items-center text-white">
          <motion.div
            initial={{ x: -500, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2.5 }}
          >
            <h1 className="text-[40px] md:text-[64px] font-bold mb-4 md:pr-0 xl:mr-96">
              We exist since 1975 on the oil and gas industry.
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 2.5 }}
            className="w-full"
          >
            <LearnMore />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
