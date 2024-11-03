function FeedBackCard({ data }) {
  return (
    <div className="p-6 bg-white hover:shadow-2xl">
      {/* card header */}
      <div className="flex items-center gap-4">
        <img
          className="h-[56px] w-[56px] bg-secondarygray rounded-full"
          src=""
          alt=""
        />
        <div>
          <h6 className="h6 text-primaryDarkGray">{data.name}</h6>
          <p className="text-[#808080]">{data.profession}</p>
        </div>
      </div>
      {/* card body */}
      <p className="text-[#808080] mt-[18px]">{data.review}</p>
    </div>
  );
}

export default FeedBackCard;
