import React from "react";
import logo from "../assets/logo.png";
import "../styles/Header.scss";
import {
  AiFillStar as Star,
  AiOutlineFieldTime as Time,
  AiFillShopping as Cart,
} from "react-icons/ai";

const Header = () => {
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
          <a href="#pizza">Pizza</a>
          <a href="#snacks">Snacks</a>
          <a href="#salads">Salads</a>
          <a href="#deserts">Deserts</a>
          <a href="#drinks">Drinks</a>
        </div>

        <button className="shopping-cart">
          <Cart />
          <p className="cart-count"> 0</p>
        </button>
      </nav>
    </>
  );
};

export default Header;
