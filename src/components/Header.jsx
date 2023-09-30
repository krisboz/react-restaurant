import { useState } from "react";
import logo from "../assets/logo.png";
import "../styles/Header.scss";
import {
  AiFillStar as Star,
  AiOutlineFieldTime as Time,
  AiFillShopping as CartIcon,
} from "react-icons/ai";

import calcCartAmount from "../helpers/calcCartAmount";
import Cart from "./Cart";

const Header = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <>
      <header>
        <section className="header-info">
          <article className="logo-container">
            <img src={logo}></img>
            <h1 className="name">Rico Pizza</h1>
          </article>
          <article className="reviews">
            <p>Pizza Delivery Worldwide</p>
            <div className="time-and-review">
              <p>
                <Time /> 42min
              </p>
              <p>
                4.76 <Star />
              </p>
            </div>
          </article>

          <article className="contact">
            <p className="phone"> 017688203769</p>
            <p>Call us now</p>
          </article>
        </section>
      </header>

      <nav>
        <div className="sections">
          <a href="#pizzas">Pizza</a>
          <a href="#snacks">Snacks</a>
          <a href="#salads">Salads</a>
          <a href="#deserts">Deserts</a>
          <a href="#drinks">Drinks</a>
        </div>

        <button className="shopping-cart" onClick={toggleCart}>
          <CartIcon />
          <p className="cart-count"> {calcCartAmount()}</p>
        </button>
      </nav>
      <Cart isOpen={isCartOpen} onClose={toggleCart} />
    </>
  );
};

export default Header;
