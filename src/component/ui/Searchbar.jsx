import React from "react";
import { MagnifyingGlass, Faders } from "phosphor-react";

const Searchbar = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="flex items-center gap-3 w-full max-w-2xl">
        <div className="relative w-full">
          <MagnifyingGlass
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={20}
          />

          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-12 pr-3 py-3 rounded-lg border border-gray-300
                       focus:border-blue-500 focus:ring-1 focus:ring-blue-400
                       outline-none text-base bg-white"
          />
        </div>
<div className="rounded-2xl bg-black p-3">
<Faders size={30} className="text-white" />

</div>
      </div>
    </div>
  );
};

export default Searchbar;
