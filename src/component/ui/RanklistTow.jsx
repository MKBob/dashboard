import React from "react";
import userPicture from "../../assets/user.png";

const RanklistTow = () => {
  const items = [
    { positions: "10k Position’s", applied: "8.5k apply already" },
    { positions: "10k Position’s", applied: "8.5k apply already" },
    { positions: "10k Position’s", applied: "8.5k apply already" },
    { positions: "10k Position’s", applied: "8.5k apply already" },
  ];

  return (
    <div>
      <div className="flex justify-start items-center pt-6 gap-1.5 sticky top-0 pb-5 bg-white">
        <div className="flex justify-center items-center bg-green-500 h-4 w-4 rounded-full">
          <div className="bg-green-600 h-2 w-2 rounded-full" />
        </div>
        <h2 className="flex text-xl font-semibold">Open Haring</h2>
      </div>

      {items.map((item, idx) => (
        <div key={idx} className="flex justify-between items-center pb-5">
          <div className="flex items-center gap-2.5 text-gray-400 font-semibold">
            <img src={userPicture} alt="" />
            <div>
              <p className="text-black">{item.positions}</p>
              <span>{item.applied}</span>
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

export default RanklistTow;
