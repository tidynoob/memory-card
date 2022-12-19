import fetch from "node-fetch";

const AVAILABLE_SPRITES = 905;

const randomNum = () => {
  return Math.floor(Math.random() * AVAILABLE_SPRITES) + 1;
};

const getPokemon = async (id = randomNum()) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return {
    name: data.name,
    id: data.id,
    sprite: data.sprites.front_default,
  };
};

export { getPokemon };
