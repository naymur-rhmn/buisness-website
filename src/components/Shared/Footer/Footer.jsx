function Footer() {
  return (
    <footer className="bg-primaryDarkGray pt-[80px] pb-10">
      <div className="container">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-5 pr-24">
            <div className="mb-4 text-3xl">logo</div>
            <p className="leading-7">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              nisi reprehenderit facilis cum pariatur impedit magnam repellat
              veniam, hic dolorum libero, in quaerat.
            </p>
          </div>
          <div className="col-span-7 grid grid-cols-3">
            <div>
              <h6 className="h6 text-white mb-4">Services</h6>
              <ul className="flex gap-4 flex-col">
                <li>Financial Consulting</li>
                <li>Human Resource</li>
                <li>Business Plan</li>
                <li>Strategy Business</li>
              </ul>
            </div>
            <div>
              <h6 className="h6 text-white mb-4">Company</h6>{" "}
              <ul className="flex gap-4 flex-col">
                <li>About Us</li>
                <li>Our Service</li>
                <li>Contact Us</li>
              </ul>
            </div>
            <div>
              <h6 className="h6 text-white mb-4">Support</h6>{" "}
              <ul className="flex gap-4 flex-col">
                <li>Code of Conduct</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-6  ">
          <div className="col-span-5">@2024 All rights reserved.</div>
          {/* <div className="col-span-7">
            <ul className="flex gap-6">
              <li>Privacy Policy</li>
              <li>Terms and Condition</li>
            </ul>
          </div> */}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
