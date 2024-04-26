import { SiNike } from "react-icons/si";
import { TbShoppingBag } from "react-icons/tb";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
const values = ["Home", "About", "Services", "Pricing", "Contac"];
export default function ({ onClickBtn }) {
  const [isMobileMenuShow, setisMobileMenuShow] = useState(false);
  return (
    <nav className="z-10 relative flex flex-wrap lg:flex-row lg:items-center lg:justify-between items-center justify-between">
      {/* Nike-logo */}
      <a className="animate-transy">
        <SiNike size={68} className="dark:text-white" />
      </a>
      {/* burger-icon */}
      <button
        onClick={() => {
          setisMobileMenuShow(!isMobileMenuShow);
        }}
        className="lg:hidden dark:text-white hover:bg-gray-300 focus:ring-2 focus:ring-gray-200 p-2 rounded-lg"
      >
        <RxHamburgerMenu size={25} />
      </button>
      {/* Menu-List */}
      <div
        className={`${
          isMobileMenuShow ? "" : "hidden"
        } w-full lg:block lg:w-auto`}
      >
        <ul className="lg:space-x-8 flex flex-col lg:flex-row bg-gray-50 lg:bg-transparent text-lg rounded-lg p-4">
          {values.map((value, index) => {
            return (
              <li
                className={`lg:hover:text-blue-500 cursor-pointer px-3 py-2 rounded-lg dark:lg:text-white ${
                  index === 0
                    ? "bg-blue-500 text-white lg:bg-transparent lg:text-blue-500"
                    : "hover:bg-gray-100"
                } ${
                  index === 3 || index === 4
                    ? "lg:text-white lg:hover:bg-transparent"
                    : ""
                }`}
                key={value}
              >
                {value}
              </li>
            );
          })}
        </ul>
      </div>
      {/* cart-icon */}
      <div
        onClick={onClickBtn}
        className="fixed cursor-pointer bottom-4 left-4 lg:mr-8 lg:static"
      >
        <div className="h-12 w-12 flex items-center justify-center rounded-full bg-white-200 shadow-md dark:text-white">
          <TbShoppingBag size={25} />
        </div>
      </div>
    </nav>
  );
}
