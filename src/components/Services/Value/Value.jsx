import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import Video from "../../Shared/VideoCombo/Video";
import ValueCard from "./ValueCard";

function Value() {
  const cardData = [
    "on target",
    "efficient",
    "full support",
    "gurantee",
    "safe and secure",
  ];
  return (
    <section className="bg-primaryDarkGray py-[120px]">
      <div className="container">
        {/* value title */}
        <SectionTitle
          title={"Develop Ideas Into Solutions for Your Business"}
          desc={
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
        {/* cards */}
        <div className="grid grid-cols-3 gap-4 py-16">
          {cardData.map((value, i) => (
            <ValueCard key={i} value={value} />
          ))}
        </div>
        {/* video */}
        <div className="h-[640px] bg-gray-400">
          <Video />
        </div>
        {/* countable value */}
        <div className="grid grid-cols-4 justify-between items-center mt-16">
          {/* single value */}
          <div className="text-center">
            <p className="text-white h1">200+</p>
            <p>Satisfied Clients</p>
          </div>
          {/* single value */}
          <div className="text-center">
            <p className="text-white h1">10+</p>
            <p>Years of experience</p>
          </div>
          {/* single value */}
          <div className="text-center">
            <p className="text-white  h1">10</p>
            <p>Office in USA</p>
          </div>
          {/* single value */}
          <div className="text-center">
            <p className="text-white h1">420+</p>
            <p>Project completed</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Value;
