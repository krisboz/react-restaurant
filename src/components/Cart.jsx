import React from "react";
import { useCart } from "../context/CartContext";
import "../styles/Cart.scss";
import emptyCart from "../assets/empty.svg";
import { TiDelete } from "react-icons/ti";
import { AiOutlineClose } from "react-icons/ai";
import capitalize from "./../helpers/capitalize";

const Cart = ({ isOpen, onClose }) => {
  const { cartState, dispatch } = useCart();

  const handleDel = (name) => {
    console.log(name);
    dispatch({ type: "REMOVE_FROM_CART", payload: name });
  };

  const calcTotalCost = () => {
    if (cartState.cart.length > 0) {
      const prices = cartState.cart.map((el) => el.price * el.quantity);
      return prices.reduce((a, b) => a + b).toFixed(2);
    } else return 0;
  };

  return (
    <dialog open={isOpen} className="cart-dialog">
      <div className="close-btn-cont">
        <button onClick={onClose}>
          <AiOutlineClose />
        </button>
      </div>

      {cartState.cart.length === 0 ? (
        <div className="empty-container">
          <p>Whoops, your cart is empty! Get something yummy!</p>
          <img src={emptyCart}></img>
        </div>
      ) : (
        <>
          <div className="cart-items">
            <table>
              <thead>
                <tr>
                  <th>Item</th>
                  <th>Name</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th> </th>
                </tr>
              </thead>
              <tbody>
                {cartState.cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img src={item.photo} alt={item.name} />
                    </td>
                    <td>{capitalize(item.name)}</td>
                    <td>{item.quantity}</td>
                    <td>€{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => handleDel(item.name)}>
                        <TiDelete />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="total-container">
            <p className="total-cost">Total: €{calcTotalCost()}</p>
            <button>Proceed to checkout</button>
          </div>
        </>
      )}
    </dialog>
  );
};

export default Cart;
