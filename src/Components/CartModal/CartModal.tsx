import { useEffect, useState } from "react";
import { carvingArray } from "../../interfaces";
import { useCarvingContext } from "../../providers/carvings.provider";
import { CartItemHolder } from "../CartItemsHolder/CartItemsHolder";

export const CartModal = () => {
  const { cartItems } = useCarvingContext();
  const [subtotal, setSubtotal] = useState<number | string>(0);

  const findSubtotal = () => {
    let total = 0;
    cartItems.map((carving: carvingArray) => {
      carving.price !== null ? (total = total + carving.price) : null;
    });
    console.log(total);
    setSubtotal(total.toFixed(2));
  };

  useEffect(() => {
    findSubtotal();
  }, [cartItems.length]);

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
