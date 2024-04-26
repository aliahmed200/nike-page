import React from "react";
import Card from "./Card";

export default function NewArrivels({ items }) {
  return (
    <div className="mt-20">
      <div className="flex justify-center items-center bg-[url('./Assets/lines.png')] bg-no-repeat bg-center text-4xl font-extrabold dark:text-white">
        NEW ARRIVELS
      </div>
      <div className="mt-10 grid grid-cols-1 gap-20 md:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
