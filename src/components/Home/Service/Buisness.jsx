import SecondaryButton from "../../Shared/Buttons/SecondaryButton";
import BuisnessCard from "./BuisnessCard";

function Buisness({ bg }) {
  const data = [
    {
      id: 1,
      title: "Financial Consulting",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 2,
      title: "Buisness Plan",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 3,
      title: "Human resources",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      id: 4,
      title: "strategy buisness",
      desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];
  return (
    <div className="container">
      <div className="grid grid-cols-2">
        <h2 className={`${bg == "light" ? "text-title" : "text-white"} h3`}>
          We help more than 200+ Clients to Grow their Business
        </h2>
        <div>
          <p className={`${bg == "light" && "text-body"} pt-2 leading-8 mb-8`}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
          <SecondaryButton bg={bg} title={"Learn More"} />
        </div>
      </div>
      {/* cards */}
      <div className="grid grid-cols-4 gap-4 mt-10">
        {data.map((item) => (
          <BuisnessCard bg={bg} key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default Buisness;
