import { RiCheckLine } from "@remixicon/react";

function ValueCard({ value }) {
  return (
    <div className="bg-secondarygray p-4 flex items-center gap-3">
      <p className="bg-primaryBlue p-0.5 rounded-full text-white">
        <RiCheckLine className="" size={22} color="white" />
      </p>

      <span className="capitalize h6 text-white">{value}</span>
    </div>
  );
}

export default ValueCard;
