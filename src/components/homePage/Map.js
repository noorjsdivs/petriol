import React from "react";
import { mapImg } from "../../assets/images/Assets";

const Map = () => {
  return (
    <section>
      <div className="w-full h-auto mx-auto">
        <picture>
          <img src={mapImg} alt="" />
        </picture>
      </div>
    </section>
  );
};

export default Map;
