import {getRandomPokemon,getPokemonDetails} from './getPokemon.js'

describe("getPokemon", () => {

    let pokemonData;

    beforeAll(async () => {
        pokemonData = await getRandomPokemon();
    });


    test("can fetch a random pokemon", () => {

        expect(pokemonData).toBeTruthy();
    });

    test("random pokemon has name, id, and sprite", () => {
        const pokemon = getPokemonDetails(pokemonData);
        expect(pokemon.name).toBeTruthy();
        expect(pokemon.id).toBeTruthy();
        expect(pokemon.sprite).toBeTruthy();
        console.log(pokemon);
    });

});