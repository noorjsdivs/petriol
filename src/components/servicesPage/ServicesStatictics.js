import React from "react";

const ServicesStatictics = () => {
  return (
    <div
      className="w-full h-[400px] mt-20"
      style={{
        background: "url(assets/bannerImg.png)",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full bg-darkLight2">
        <div className="max-w-screen-xl h-full mx-auto flex justify-between items-center text-white">
          <div>
            <h2 className="text-[46px] font-bold">120k+</h2>
            <p className="text-[16px] font-semibold">
              Member business <br />
              branch
            </p>
          </div>
          <div>
            <h2 className="text-[46px] font-bold">105+</h2>
            <p className="text-[16px] font-semibold">
              Financial company <br />
              support
            </p>
          </div>
          <div>
            <h2 className="text-[46px] font-bold">85B+</h2>
            <p className="text-[16px] font-semibold">
              Total mutual profit
              <br />
              /per-year
            </p>
          </div>
          <div>
            <h2 className="text-[46px] font-bold">75%</h2>
            <p className="text-[16px] font-semibold">
              Membership <br />
              Income profit
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesStatictics;
