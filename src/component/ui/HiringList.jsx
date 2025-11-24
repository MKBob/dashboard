import React from "react";
import companyLogo from "../../assets/company.png";

const HiringList = () => {
  const items = [
    { positions: "10k Position’s", applied: "8.5k apply already" },
    { positions: "10k Position’s", applied: "8.5k apply already" },
    { positions: "10k Position’s", applied: "8.5k apply already" },
    { positions: "10k Position’s", applied: "8.5k apply already" },
  ];

  return (
    <div className="px-4 pb-6 bg-white  h-full overflow-y-auto shadow-2xl">
      <div className="flex justify-start items-center pt-6 gap-1.5 sticky top-0 pb-5 bg-white">
        <div className="flex justify-center items-center bg-green-500 h-4 w-4 rounded-full">
          <div className="bg-green-600 h-2 w-2 rounded-full" />
        </div>
        <h2 className="flex text-xl font-semibold">Open Haring</h2>
      </div>

      {items.map((item, idx) => (
        <div key={idx} className="flex justify-between items-center pb-5">
          <div className="flex items-center gap-2.5 text-gray-400 font-semibold">
            <div className=" w-9 h-9 rounded-full shadow-[-1px_10px_6px_0px_rgba(0,_0,_0,_0.1)]">
            <img className="w-full rounded-full " src={companyLogo} alt="" />
            </div>
            
            <div>
              <p className="text-black text-sm">{item.positions}</p>
              <span className="text-xs">{item.applied}</span>
            </div>
          </div>
          <button className="text-sm text-gray-400 border px-3.5 py-2 rounded-sm cursor-pointer">
            Add CV
          </button>
        </div>
      ))}
    </div>
  );
};

export default HiringList;
