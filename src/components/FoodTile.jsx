import React from "react";
import photo from "../assets/pizza/capricciosa.jpeg";
import "../styles/FoodTile.scss";
import capitalize from "../helpers/capitalize";

const FoodTile = ({ foodObj }) => {
  const name = "cappriciosa";
  const ingredients = "tomatoes, ham, mushrooms, cheese";
  const price = "11.99";

  //image
  //name
  //price
  //ingredients if >32 allow 29+...
  return (
    <article className="food-tile" id={foodObj.name}>
      <img src={foodObj.photo}></img>
      <section className="food-details">
        <h2 className="name">{capitalize(foodObj.name)}</h2>
        <p className="ingredients">{foodObj.ingredients}</p>
        <div className="price-container">
          <p className="price">€{foodObj.price}</p>
          <button>Add</button>
        </div>
      </section>
    </article>
  );
};

export default FoodTile;
