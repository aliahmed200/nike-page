import React from "react";
import { CiTrash } from "react-icons/ci";
import Selecet from "./Selecet";
import { QTY, SIZES } from "../Constant";
export default function CartItem({ item: { product, qty, size } }) {
  return (
    <div className="hover:bg-[#DAFFA2] bg-gray-50">
      {/* title and description */}
      <div className="flex ">
        <img src={product.src} alt="shoes" className="h-24" />
        <div>
          <div className="font-bold pb-2">{product.title}</div>
          <div className="text-sm text-gray-400">{product.description}</div>
        </div>
        <div className="font-bold">{product.price + "$"}</div>
      </div>
      {/* qty */}
      <div className="flex justify-evenly">
        <div>
          <div className="font-bold">Size</div>
          <Selecet
            defaultValue={size}
            title="SIZES"
            options={SIZES}
            className={`w-16 p-1`}
          />
        </div>
        <div>
          <div className="font-bold">QTY</div>
          <Selecet
            defaultValue={qty}
            title="QTY"
            options={QTY}
            className={`w-16 p-1`}
          />
        </div>
        <button>
          <CiTrash size={25} className="text-black" />
        </button>
      </div>
    </div>
  );
}
