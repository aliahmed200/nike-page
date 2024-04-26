import React from "react";
import CartItem from "./CartItem";

export default function Cart({ Cart_Items }) {
  return (
    <>
      <h2 className="mb-5 text-4xl font-bold">Cart</h2>
      <ul className="space-y-5">
        {Cart_Items.map((cartitem) => {
          return (
            <li key={cartitem.product.id}>
              <CartItem item={cartitem} />
            </li>
          );
        })}
        <li></li>
      </ul>
    </>
  );
}
