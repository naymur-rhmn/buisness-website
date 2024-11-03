import { RiArrowRightSLine } from "@remixicon/react";
import React from "react";

function Cta() {
  return (
    <section className="bg-primaryDarkGray py-[120px]">
      <div className="container">
        <div className="flex items-center justify-center flex-col text-center">
          <h3 className="h3 text-white">
            Try Your Experience <br /> Working With Us
          </h3>
          <button className="h-[48px] bg-primaryBlue px-4 rounded-full shadow mt-6 flex items-center">
            Get in Touch <RiArrowRightSLine />
          </button>
        </div>
      </div>
    </section>
  );
}

export default Cta;
