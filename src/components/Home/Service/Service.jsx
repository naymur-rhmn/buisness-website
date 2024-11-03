import Buisness from "./Buisness";
import Planning from "./Planning";

function Service() {
  return (
    <section className="bg-primaryDarkGray py-[120px]">
      <Buisness />
      <div className="mt-[120px]">
        <Planning />
      </div>
    </section>
  );
}

export default Service;
