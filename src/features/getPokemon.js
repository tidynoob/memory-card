import fetch from "node-fetch";

const AVAILABLE_SPRITES = 905;

const randomNum = () => Math.floor(Math.random() * AVAILABLE_SPRITES) + 1;

const randomNums = (n) => {
  const nums = [];
  for (let i = 0; i < n; i++) {
    let num = randomNum();
    while (nums.includes(num)) {
      num = randomNum();
    }
    nums.push(num);
  }
  return nums;
};

const fetchPokemon = async (id) => {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
  const data = await response.json();
  return {
    name: data.name,
    id: data.id,
    sprite: data.sprites.front_default,
  };
};

const getPokemon = async (num) => {
  const ids = randomNums(num);
  const pokemons = await Promise.all(ids.map((id) => fetchPokemon(id)));
  return pokemons;
};

export default getPokemon;
