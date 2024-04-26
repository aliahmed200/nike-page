import React from "react";

export default function Card({ item }) {
  return (
    <div
      className={`${item.className} max-w-lg cursor-pointer transform transition hover:scale-105`}
    >
      <div className="p-8">
        <div className="text-2xl fnot-bold">{item.title} </div>
        <div className="text-xl underline underline-offset-4 mt-10">
          SHOP NOW +
        </div>
      </div>
      <img
        src={item.src}
        className="absolute top-5 left-[40%] h-40 w-56"
        alt="shoes"
      />
    </div>
  );
}
