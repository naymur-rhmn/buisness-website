import SecondaryButton from "../../Shared/Buttons/SecondaryButton";
import SinglePerson from "./SinglePerson";

function OurTeam() {
  const teams = [
    {
      id: 1,
      name: "shomon araf",
      degignation: "ceo",
      email: "",
      phone: "",
      social: { fb: "", ln: "", tw: "" },
    },
    {
      id: 1,
      name: "Arman khan",
      degignation: "ceo",
      email: "",
      phone: "",
      social: { fb: "", ln: "", tw: "" },
    },
    {
      id: 1,
      name: "James hoq",
      degignation: "ceo",
      email: "",
      phone: "",
      social: { fb: "", ln: "", tw: "" },
    },
  ];
  return (
    <div className="pb-[120px] container">
      <div className="mb-10 flex justify-between items-center">
        <h2 className="h3 text-primaryDarkGray">Meet Our Teams</h2>
        <SecondaryButton title={"see all"} />
      </div>
      {/* team member */}
      <div className="grid grid-cols-3 gap-4">
        {teams.map((singleData) => (
          <SinglePerson key={singleData.id} data={singleData} />
        ))}
      </div>
    </div>
  );
}

export default OurTeam;
