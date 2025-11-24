import React from "react";
import bgImage from "../../assets/card-background.png";
import ads from "../../assets/ads.png";
const AdsConatiner = () => {
  return (
    <div className="w-full flex justify-center items-center">
      <div
        className="flex justify-between items-center bg-cover bg-center bg-no-repeat rounded-2xl p-8 w-full"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div>
          <div className="pb-10">
            <h1 className="text-2xl text-white font-semibold">
              Kotlin Full Course
            </h1>
            <span className="text-sm text-gray-400 font-semibold">
              Our new course out now
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <button className="px-3 py-3 bg-white rounded-md cursor-pointer">
              Explore More
            </button>
            <button className="px-3 py-3 text-white border border-white rounded-md cursor-pointer">
              Get 25% Off
            </button>
          </div>
        </div>

        <div>
          <img src={ads} alt="" />
        </div>
      </div>
    </div>
  );
};

export default AdsConatiner;
