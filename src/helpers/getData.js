import getImages from "./getImages";

const getData = (category) => {
  const pizzaPhotos = getImages("pizzas");
  const saladPhotos = getImages("salads");
  const snackPhotos = getImages("snacks");
  const desertPhotos = getImages("deserts");
  const drinkPhotos = getImages("drinks");

  const collection = {
    pizzas: [
      {
        name: "capricciosa",
        ingredients: "Tomatoes, Ham, Mushrooms, Cheese",
        price: 11.99,
        photo: pizzaPhotos.capricciosa,
      },
      {
        name: "carbonara",
        ingredients: "Tomatoes, Bacon, Onion, Cheese",
        price: 12.99,
        photo: pizzaPhotos.carbonara,
      },
      {
        name: "devil",
        ingredients: "Pepperoni, Jalapenos, Cheese",
        price: 12.99,
        photo: pizzaPhotos.devil,
      },
      {
        name: "margherita",
        ingredients: "Tomatoes, Cheese",
        price: 10.99,
        photo: pizzaPhotos.margherita,
      },
      {
        name: "mexicana",
        ingredients: "Peppers, Tomatoes, Jalapenos, Hot sauce",
        price: 12.99,
        photo: pizzaPhotos.mexicana,
      },
      {
        name: "fully loaded",
        ingredients: "Tomatoes, Pepperoni, Bacon, Ham, Cheese",
        price: 14.99,
        photo: pizzaPhotos.fullyLoaded,
      },
      {
        name: "pepperoni",
        ingredients: "Pepperoni, Cheese",
        price: 12.99,
        photo: pizzaPhotos.salami,
      },
      {
        name: "cranberry",
        ingredients:
          "Cranberries, Pineapple, Vanilla sauce, Suffering of italians",
        price: 12.49,
        photo: pizzaPhotos.cranberry,
      },
    ],
    salads: [
      {
        name: "ceasar salad",
        ingredients: "Salad, Chicken, Croutons, Tomatoes, Cheese",
        price: 15.99,
        photo: saladPhotos.ceasarSalad,
      },
      {
        name: "greek salad",
        ingredients: "Salad, Tomatoes, Olives, Cucumber, Feta cheese",
        price: 15.99,
        photo: saladPhotos.greekSalad,
      },
    ],
    snacks: [
      {
        name: "beef wrap",
        ingredients: "Tortilla, Beef, Tomatoes, Cheese",
        price: 14.99,
        photo: snackPhotos.beefWrap,
      },
      {
        name: "chicken wrap",
        ingredients: "Tortilla, Chicken, Tomatoes, Cheese",
        price: 14.99,
        photo: snackPhotos.chickenWrap,
      },
      {
        name: "chicken wings",
        ingredients: "Chicken wings, Proprietary sauce",
        price: 13.99,
        photo: snackPhotos.chickenWings,
      },
      {
        name: "hot wings",
        ingredients: "Chicken wings, Proprietary hot sauce",
        price: 13.99,
        photo: snackPhotos.hotWings,
      },
      {
        name: "chicken quesadilla",
        ingredients: "Tortilla, Chicken, Cheese",
        price: 14.99,
        photo: snackPhotos.chickenQuesadilla,
      },
      {
        name: "vege quesadilla",
        ingredients: "Tortilla, Cheese, Tomatoes, Corn, Zucchini",
        price: 14.99,
        photo: snackPhotos.vegeQuesadilla,
      },
      {
        name: "onion rings",
        ingredients: "Deep fried onion rings",
        price: 8.99,
        photo: snackPhotos.onionRings,
      },
      {
        name: "french fries",
        ingredients: "Deep fried crispy potatoes",
        price: 5.99,
        photo: snackPhotos.frenchFries,
      },
    ],
    deserts: [
      {
        name: "cinnamon rolls",
        ingredients: "Soft rolls with cinnamon filling and dusting",
        price: 5.99,
        photo: desertPhotos.cinnamonRolls,
      },
      {
        name: "cranberry rolls",
        ingredients: "Soft rolls with cranberry filling and cinnamon dusting",
        price: 5.99,
        photo: desertPhotos.cranberryRolls,
      },
      {
        name: "fruity rolls",
        ingredients: "Soft rolls with mixed fruit filling and sugar dusting",
        price: 5.99,
        photo: desertPhotos.fruityRolls,
      },
      {
        name: "pineapple rolls",
        ingredients:
          "Soft rolls with pineapple and cinnamon filling and vanilla glaze",
        price: 5.99,
        photo: desertPhotos.pineappleCinnamonRolls,
      },
      {
        name: "cranberry",
        ingredients:
          "Cranberries, Pineapple, Vanilla sauce, Suffering of italians",
        price: 12.49,
        photo: pizzaPhotos.cranberry,
      },
    ],
    drinks: [
      {
        name: "coca cola",
        ingredients: "The all favorite carbonated drink",
        price: 2.99,
        photo: drinkPhotos.cocaCola,
      },
      {
        name: "fanta",
        ingredients: "The not so favorite orange flavored carbonated drink",
        price: 2.99,
        photo: drinkPhotos.fanta,
      },
      {
        name: "orangina",
        ingredients: "The superior orange flavored carbonated drink",
        price: 2.99,
        photo: drinkPhotos.orangina,
      },
      {
        name: "ice tea",
        ingredients: "Refreshing fruity ice tea",
        price: 2.99,
        photo: drinkPhotos.iceTea,
      },
      {
        name: "red bull",
        ingredients: "The blood pressure increasing energy drink",
        price: 3.49,
        photo: drinkPhotos.redBull,
      },
      {
        name: "sprite",
        ingredients: "Coca colas distant carbonated relative",
        price: 2.99,
        photo: drinkPhotos.sprite,
      },
      {
        name: "water",
        ingredients: "The stuff of life",
        price: 1.49,
        photo: drinkPhotos.water,
      },
    ],
  };

  return collection[`${category}`];
};

export default getData;
