function Navbar() {
  return (
    <header className="h-[80px] bg-gray-500">
      <div className="container h-full flex items-center justify-between">
        <div className="logo font-bold italic">
          DUMMY<span className="text-green-800">LOGO</span>
        </div>
        <div>
          <ul className="flex items-center gap-10">
            <li>
              <a className="hover:text-white" href="#">
                Home
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                About Us
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Services
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Blog
              </a>
            </li>
            <li>
              <a className="hover:text-white" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
