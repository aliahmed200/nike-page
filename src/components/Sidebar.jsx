import React from "react";

export default function Sidebar({ children, isOpen, onClickClose }) {
  return (
    <div>
      <div
        className={`overflow-y-auto fixed top-0 right-0 z-50 w-full md:w-[50%] lg:w-[35%] h-full bg-white transition duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={onClickClose}
          className="absolute right-4 top-4 p-2 text-black font-bold"
        >
          X
        </button>
        <div>{children}</div>
      </div>
      {isOpen && (
        <div
          onClick={onClickClose}
          className="fixed bg-black opacity-50 top-0 left-0 h-full w-full"
        ></div>
      )}
    </div>
  );
}
