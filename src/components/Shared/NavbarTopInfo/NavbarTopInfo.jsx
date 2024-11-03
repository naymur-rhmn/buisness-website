import {
  RiTimeLine,
  RiMapPinLine,
  RiPhoneLine,
  RiTwitterFill,
  RiFacebookFill,
  RiYoutubeFill,
  RiLinkedinFill,
} from "@remixicon/react";
function NavbarTopInfo() {
  return (
    <div className="h-[50px] bg-gray-500">
      <div className="container h-full flex justify-between items-center">
        {/* information */}
        <div className="flex gap-4">
          <p className="flex gap-1 items-center text-sm">
            <RiTimeLine size={18} color="white" className="" /> Monday - Friday
            9 AM - 5 PM
          </p>
          <p className="flex gap-1 items-center text-sm">
            <RiMapPinLine size={18} color="white" className="" /> 2491 Daffodil
            Lane, LA
          </p>
          <p className="flex gap-1 items-center text-sm">
            <RiPhoneLine size={18} color="white" className="" /> (+1) 923 2341
            22
          </p>
        </div>
        {/* social links */}
        <ul className="flex items-center gap-2 justify-between">
          <li className="bg-slate-400 p-1 flex justify-center items-center rounded-full hover:bg-primaryBlue cursor-pointer transition-all">
            <RiFacebookFill size={16} className="text-offwhite" />
          </li>
          <li className="bg-slate-400 p-1 flex justify-center items-center rounded-full hover:bg-primaryBlue cursor-pointer transition-all">
            <RiTwitterFill size={16} className="text-offwhite" />
          </li>
          <li className="bg-slate-400 p-1 flex justify-center items-center rounded-full hover:bg-primaryBlue cursor-pointer transition-all">
            <RiLinkedinFill size={16} className="text-offwhite" />
          </li>
          <li className="bg-slate-400 p-1 flex justify-center items-center rounded-full hover:bg-primaryBlue cursor-pointer transition-all">
            <RiYoutubeFill size={16} className="text-offwhite" />
          </li>
        </ul>
      </div>
    </div>
  );
}

export default NavbarTopInfo;
