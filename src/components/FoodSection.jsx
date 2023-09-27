import React from "react";
import FoodTile from "./FoodTile";
import capitalize from "../helpers/capitalize";
import getData from "../helpers/getData";
import "../styles/FoodSection.scss";

const FoodSection = ({ category }) => {
  const data = getData(category);
  return (
    <section className="food-section" id={category}>
      <h2 className="section-title">{capitalize(category)}</h2>
      <div className="section-container">
        {data.map((el, i) => (
          <FoodTile foodObj={el} key={i} />
        ))}
      </div>
    </section>
  );
};

export default FoodSection;
