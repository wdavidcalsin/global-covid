import React from "react";
import { BsSunFill } from "react-icons/bs";
import { SiTwitter } from "react-icons/si";

const Navbar = () => {
  return (
    <div className="w-full  flex justify-between py-5 px-10 items-center text-white">
      <div className="text-3xl">
        <BsSunFill className="text-yellow-500" />
      </div>
      <div>
        <a
          href="#"
          className="flex items-center gap-5 z-20 border border-solid border-white py-2 px-7 rounded-full text-lg relative transition delay-75 shadow-[2px_3px] shadow-white  hover:shadow-none"
        >
          <span>Share it</span>
          <SiTwitter className="text-sky-600" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
