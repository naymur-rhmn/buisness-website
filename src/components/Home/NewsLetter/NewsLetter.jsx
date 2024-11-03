import PrimaryButton from "../../Shared/Buttons/PrimaryButton";

function NewsLetter() {
  return (
    <div className="bg-primaryDarkGray py-[120px]">
      <div className="container flex flex-col items-center justify-center">
        <h3 className="h3 text-white mb-10">Let us send you Offering</h3>
        <form className="flex gap-2 justify-center  w-2/3">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Your Email"
            className="rounded-full p-2 px-4 w-[55%] bg-secondarygray border-none outline-none focus:outline-slate-800"
          />
          <PrimaryButton type="submit" title={"Join Now"} />
        </form>
      </div>
    </div>
  );
}

export default NewsLetter;
