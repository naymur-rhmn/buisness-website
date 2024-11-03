function ProcessCard({ data }) {
  return (
    <div className="bg-gradient-to-b from-slate-300 to-slate-700 h-[560px]">
      <div className="p-5 flex justify-between flex-col h-full">
        <span className="h-10 w-10 rounded-full bg-primaryBlue text-white flex items-center justify-center">
          {data.id}
        </span>
        <div>
          <h4 className="h4 text-white capitalize">{data.title}</h4>
          <p>{data.desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ProcessCard;
