import capricciosa from "../assets/pizza/capricciosa.jpeg";
import carbonara from "../assets/pizza/carbonara.jpeg";
import cranberry from "../assets/pizza/cranberry.jpeg";
import devil from "../assets/pizza/devil.jpeg";
import fullyLoaded from "../assets/pizza/fully-loaded.jpeg";
import margherita from "../assets/pizza/margherita.jpeg";
import mexicana from "../assets/pizza/mexicana.jpeg";
import salami from "../assets/pizza/salami.jpeg";

import cinnamonRolls from "../assets/desert/cinnamon-rolls.jpeg";
import cranberryRolls from "../assets/desert/cranberry-rolls.jpeg";
import fruityRolls from "../assets/desert/fruity-rolls.jpeg";
import pineappleCinnamonRolls from "../assets/desert/pineapple-cinnamon-rolls.jpeg";

import beefWrap from "../assets/snacks/beef-wrap.jpeg";
import chickenQuesadilla from "../assets/snacks/chicken-quesadilla.jpeg";
import chickenWings from "../assets/snacks/chicken-wings.jpeg";
import chickenWrap from "../assets/snacks/chicken-wrap.jpeg";
import frenchFries from "../assets/snacks/french-fries.jpeg";
import hotWings from "../assets/snacks/hot-wings.jpeg";
import onionRings from "../assets/snacks/onion-rings.jpeg";
import vegeQuesadilla from "../assets/snacks/vege-quesadilla.jpeg";

import cocaCola from "../assets/drinks/coca-cola.jpeg";
import fanta from "../assets/drinks/fanta.jpeg";
import iceTea from "../assets/drinks/ice-tea.jpeg";
import orangina from "../assets/drinks/orangina.jpeg";
import redBull from "../assets/drinks/red-bull.jpeg";
import sprite from "../assets/drinks/sprite.jpeg";
import water from "../assets/drinks/water.jpeg";

import ceasarSalad from "../assets/salad/ceasar-salad.jpeg";
import greekSalad from "../assets/salad/ceasar-salad.jpeg";

const getImages = (category) => {
  const photos = {
    pizzas: {
      capricciosa,
      carbonara,
      cranberry,
      devil,
      fullyLoaded,
      margherita,
      mexicana,
      salami,
    },
    deserts: {
      cinnamonRolls,
      cranberryRolls,
      fruityRolls,
      pineappleCinnamonRolls,
    },
    drinks: {
      cocaCola,
      fanta,
      iceTea,
      redBull,
      orangina,
      sprite,
      water,
    },
    snacks: {
      beefWrap,
      chickenQuesadilla,
      chickenWings,
      chickenWrap,
      frenchFries,
      hotWings,
      onionRings,
      vegeQuesadilla,
    },
    salads: {
      greekSalad,
      ceasarSalad,
    },
  };

  return photos[`${category}`];
};

export default getImages;
