import React from "react";
import "../styles/FoodTile.scss";
import capitalize from "../helpers/capitalize";
import { useCart } from "../context/CartContext";

const FoodTile = ({ foodObj }) => {
  const { cartState, dispatch } = useCart();
  const handleAddItem = (event) => {
    const item = {
      name: foodObj.name,
      price: foodObj.price,
      photo: foodObj.photo,
    };
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  //image
  //name
  //price
  //ingredients if >32 allow 29+...
  return (
    <article className="food-tile" id={foodObj.name}>
      <img src={foodObj.photo}></img>
      <section className="food-details">
        <div className="details-container">
          <h2 className="name">{capitalize(foodObj.name)}</h2>
          <p className="ingredients">{foodObj.ingredients}</p>
        </div>
        <div className="price-container">
          <p className="price">€{foodObj.price}</p>
          <button className="add-food-btn" onClick={handleAddItem}>
            Add
          </button>
        </div>
      </section>
    </article>
  );
};

export default FoodTile;
