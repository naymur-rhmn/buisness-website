function SecondaryButton({ title, bg }) {
  return (
    <button
      className={`h-[48px] px-5 rounded-full border border-white bg-transparent shadow-sm capitalize ${
        bg == "light" && "text-primaryDarkGray border-primaryDarkGray"
      }`}
    >
      {title}
    </button>
  );
}

export default SecondaryButton;
