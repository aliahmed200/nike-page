import React from "react";
import nike1 from "../Assets/n1-min.png";
import Selecet from "./Selecet";
import { QTY, SIZES } from "../Constant";
export default function Header() {
  return (
    <div className="flex flex-col lg:flex-row-reverse space-y-4 dark:text-white">
      {/* shoe image */}
      <div className="flex-1 lg:-mt-32 lg:ml-28">
        <div className=" h-full flex justify-center items-center bg-gradient-to-br from-[#F637CF] via-[#E3D876] to-[#4DD4C6]">
          <img src={nike1} alt="shoes" className="animate-float" />
        </div>
      </div>
      {/* shoe details */}
      <div className="flex-1 space-y-6 animate-transx">
        <div className="text-5xl font-black md:text-9xl">Nike Air Max 270</div>
        <div className="font-medium md:text-xl">
          {
            "The Nike Air Max 270 is A lifestyle shoe that's sure to turn heads with its vibrant color gradient"
          }
        </div>
        <div className="flex items-center space-x-3">
          <div className="text-3xl font-extrabold md:text-6xl ">100 $</div>
          <Selecet title={"QTY"} options={QTY} />
          <Selecet title={"SIZE"} options={SIZES} />
        </div>

        <div className="space-x-10">
          <button className="transition active:scale-75 h-14 w-44 bg-black text-white hover:bg-gray-900 active:bg-gray-700">
            Add To Bag
          </button>
          <a href="#" className="text-lg font-bold">
            View details
          </a>
        </div>
      </div>
    </div>
  );
}
