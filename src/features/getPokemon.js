import fetch from "node-fetch";

const AVAILABLE_SPRITES = 905;
const RANGES = {
  all: [1, AVAILABLE_SPRITES],
  1: [1, 151],
  2: [152, 251],
  3: [252, 386],
  4: [387, 493],
  5: [494, 649],
  6: [650, 721],
  7: [722, 809],
  8: [810, 898],
};


const randomNum = ([min, max]) => Math.floor(Math.random() * (max - min + 1)) + min;


const randomNums = (n, [min, max]) => {
  const nums = [];
  for (let i = 0; i < n; i++) {
    let num = randomNum([min, max]);
    while (nums.includes(num)) {
      num = randomNum([min, max]);
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

const getPokemon = async (num, gen = null) => {
  const range = gen ? RANGES[gen] : RANGES.all;
  const ids = randomNums(num, range);
  const pokemons = await Promise.all(ids.map((id) => fetchPokemon(id)));
  return pokemons;
};

export default getPokemon;
