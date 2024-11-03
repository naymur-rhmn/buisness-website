import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Buisness from "../../Home/Service/Buisness";
import Partner from "../../Home/Partner/Partner";
import OurProcess from "../OurProcess/OurProcess";

function OurService() {
  return (
    <section className="bg-secondaryLightGray py-[120px]">
      <div className="container">
        <Buisness bg={"light"} />
        <Partner />
        <OurProcess />
      </div>
    </section>
  );
}

export default OurService;
