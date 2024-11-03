import crazy from "../../../assets/logo/crazy.png";
import combinedshape from "../../../assets/logo/combinedShape.png";
function Partner() {
  return (
    <div className="container flex gap-4 items-center justify-between py-[120px]">
      <img className="max-h-12 w-auto" src={crazy} alt="partner logo" />
      <img className="max-h-12 w-auto" src={combinedshape} alt="partner logo" />
      <img className="max-h-12 w-auto" src={combinedshape} alt="partner logo" />
      <img className="max-h-12 w-auto" src={combinedshape} alt="partner logo" />
      <img className="max-h-12 w-auto" src={combinedshape} alt="partner logo" />
    </div>
  );
}

export default Partner;
