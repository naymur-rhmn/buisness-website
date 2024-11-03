import PlayButton from "../../Shared/Buttons/PlayButton";
import PrimaryButton from "../../Shared/Buttons/PrimaryButton";

function Hero() {
  return (
    <div className="h-[calc(100vh-130px)] bg-gray-400">
      <div className="container h-full flex flex-col justify-center">
        <div className="grid grid-cols-12 text-white">
          <div className="lg:col-span-9 md:col-span-11  col-span-12 pr-4 sm:pr-0">
            <h1 className="h2 mb-6 text-white">
              Start Empowering Your Business with Efficient Increments.
            </h1>
            <p className="md:w-2/3">
              We help you to grow your business and offer some of the best
              services provided so that your business can grow in the future
            </p>
          </div>
        </div>
        <div className="flex justify-between items-center mt-10">
          <PrimaryButton title={"get started"} />
          <div className="flex items-center gap-3">
            <p>Play Video</p>
            <PlayButton />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
