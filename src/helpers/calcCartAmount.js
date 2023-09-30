import React from "react";
import { useCart } from "../context/CartContext";
const calcCartAmount = () => {
  const { cartState, dispatch } = useCart();

  const arrOfQuantities = cartState.cart.map((el) => el.quantity);
  if (arrOfQuantities.length > 0) {
    return arrOfQuantities.reduce((a, b) => a + b);
  } else return 0;
};

export default calcCartAmount;
