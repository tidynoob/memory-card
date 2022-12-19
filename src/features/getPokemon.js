import fetch from 'node-fetch';

const AVAILABLE_SPRITES = 905;

const randomNum = () => {
    return Math.floor(Math.random() * (AVAILABLE_SPRITES)) + 1
}

const getRandomPokemon = async () => {
    const num = randomNum();
    // console.log(`Fetching pokemon with id ${num}`);
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${num}`);
    const data = await response.json();
    return data;
}

const getPokemonDetails = (data) => {
    return {
        name: data.name,
        id: data.id,
        sprite: data.sprites.front_default,
    }
}

export {getRandomPokemon,getPokemonDetails};