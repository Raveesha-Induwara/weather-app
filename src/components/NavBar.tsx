import React from "react";
import SearchBox from "./SearchBox";
import { MdMyLocation, MdOutlineLocationOn, MdWbSunny } from "react-icons/md";

const NavBar = () => {
  return (
    <nav className="shadow-sm sticky top-0 left-0 z-50 bg-white">
      <div className="h-[80px] w-full flex items-center justify-between max-w-7xl px-3 mx-auto">
        <div className="flex items-center justify-center gap-2">
          <h2 className="text-gray-500 text-3xl">Weather</h2>
          <MdWbSunny className="text-3xl mt-1 text-yellow-300" />
        </div>

        <div className="flex items-center gap-3">
          <MdMyLocation className="text-2xl text-gray-400 hover:opacity-80 cursor-pointer" />
          <MdOutlineLocationOn className="text-3xl" />
          <p className="text-base font-medium text-slate-900/80">Sri Lanka</p>

          <div>
            <SearchBox value={""} onSubmit={undefined} onChange={undefined} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
