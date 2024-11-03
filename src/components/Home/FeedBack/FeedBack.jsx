import FeedBackCard from "./FeedBackCard";

function FeedBack() {
  const data = [
    {
      id: 1,
      name: "Maho Yana",
      profession: "architecture",
      review:
        "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.",
    },
    {
      id: 2,
      name: "bob marley",
      profession: "Designer",
      review:
        "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.",
    },
    {
      id: 3,
      name: "Yana lipo",
      profession: "Buisnessman",
      review:
        "My busy schedule leaves little, if any, time for blogging and social media. The Lorem Ipsum Company has been a huge part of helping me grow my business through organic search and content marketing.",
    },
  ];
  return (
    <div className="container pb-[120px]">
      <div className=" grid grid-cols-2 gap-32">
        <h2 className="h3 text-primaryDarkGray">
          Our Happy Client Sent Us a Happy Feedback and We love Them
        </h2>
        <p className="leading-8 pt-4 text-body">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>
      </div>
      <div className="mt-10 grid grid-cols-3 gap-4">
        {data.map((item) => (
          <FeedBackCard key={item.id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default FeedBack;
