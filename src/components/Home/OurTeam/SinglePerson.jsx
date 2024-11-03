import {
  RiFacebookLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMessage2Line,
  RiPhoneLine,
} from "@remixicon/react";

function SinglePerson({ data }) {
  return (
    <div className="bg-gradient-to-b from-slate-400 to-slate-800 h-[500px] group relative overflow-hidden">
      <div className="p-4 absolute -bottom-28 w-full group-hover:bottom-0 transition-all ease-linear">
        {/* name */}
        <div className="flex gap-4 items-center justify-center mb-2">
          <p className="h5 text-white">{data.name}</p>
          <span className="uppercase">{data.degignation}</span>
        </div>
        {/* contact info */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-3">
          {/* email */}
          <div>
            <a
              className="flex items-center gap-1 hover:text-white"
              href="mailto:email@gmail.com"
            >
              <RiMessage2Line size={22} color="white" />
              dummy@mail.com
            </a>
          </div>
          {/* telephone */}
          <div>
            <a
              className="tracking-wider flex items-center  gap-1 hover:text-white"
              href="tel:+"
            >
              <RiPhoneLine size={22} color="white" />
              05248796544
            </a>
          </div>
        </div>
        {/* social links */}
        <div className="flex justify-center gap-3 items-center flex-wrap">
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <RiLinkedinLine size={22} color="white" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <RiInstagramLine size={22} color="white" />
          </a>
          <a href="http://" target="_blank" rel="noopener noreferrer">
            <RiFacebookLine size={22} color="white" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default SinglePerson;
