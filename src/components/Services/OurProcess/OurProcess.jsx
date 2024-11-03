import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ProcessCard from "./ProcessCard";

function OurProcess() {
  return (
    <div>
      <SectionTitle
        bg={"light"}
        title={"Get Started with Our Process"}
        desc={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500 s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      />
      {/* process cards */}
      <div className="grid grid-cols-3 gap-4 mt-10">
        <ProcessCard
          data={{
            id: 1,
            title: "Planning",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut totam consequuntur tenetur similique, magni velit cum reprehenderit nobis illum.",
          }}
        />
        <ProcessCard
          data={{
            id: 2,
            title: "Brainstorming",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut totam consequuntur tenetur similique, magni velit cum reprehenderit nobis illum.",
          }}
        />
        <ProcessCard
          data={{
            id: 3,
            title: "targeting",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut totam consequuntur tenetur similique, magni velit cum reprehenderit nobis illum.",
          }}
        />
      </div>
    </div>
  );
}

export default OurProcess;
