import { useState } from "react";
import { carvingArray } from "../../interfaces";
import { useCarvingContext } from "../../providers/carvings.provider";
import { CartItemHolder } from "../CartItemsHolder/CartItemsHolder";

export const CartModal = () => {
  const { cartItems } = useCarvingContext();
  const [subtotal, setSubtotal] = useState<string>("0");

  const findSubtotal = () => {
    const findSum = cartItems.map((carving: carvingArray) => {
      let total = 0;
      carving.price !== null ? (total = total + carving.price) : null;
      return total;
    });
    console.log(findSum);
    // setSubtotal(findSum[0].toFixed(2));
  };
  console.log("render");
  findSubtotal();
  return (
    <div className="cart-wrapper">
      <CartItemHolder />
      <div className="subtotal-wrapper">
        <h4>Subtotal</h4>
        <p>{subtotal}</p>
      </div>
      <div className="buttons">Checkout</div>
      <div className="buttons">Back</div>
    </div>
  );
};
