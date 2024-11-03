function SectionTitle({ title, desc, bg }) {
  return (
    <div className="grid grid-cols-2 gap-4">
      <h3
        className={`${bg == "light" ? "text-title" : "text-white"} h3 pr-[12%]`}
      >
        {title}
      </h3>
      <p
        className={`${bg == "light" ? "text-body" : "text-offwhite"} leading-8`}
      >
        {desc}
      </p>
    </div>
  );
}

export default SectionTitle;
