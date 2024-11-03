import { RiArrowRightSLine } from "@remixicon/react";

function BuisnessCard({ data, bg }) {
  return (
    <div className={` p-6 ${bg == "light" ? "bg-white" : "bg-secondarygray"}`}>
      <div className="flex justify-between items-center mb-6">
        <h6
          className={`h6 capitalize ${
            bg == "light" ? "text-title" : "text-white"
          }`}
        >
          {data.title}
        </h6>
        <RiArrowRightSLine
          color={`${bg == "light" ? "text-title" : "white"}`}
        />
      </div>
      <p className={`${bg == "light" && "text-body"}`}>{data.desc}</p>
    </div>
  );
}

export default BuisnessCard;
