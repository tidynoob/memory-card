import {getRandomPokemon,getPokemonDetails} from './getPokemon.js'

describe.skip("getPokemon", () => {

    let pokemonData;

    beforeAll(async () => {
        pokemonData = await getRandomPokemon();
    });


    test("can fetch a random pokemon", async () => {

        expect(pokemonData).toBeTruthy();
    });

    test("random pokemon has name, id, and sprite", async () => {
        const pokemon = await getPokemonDetails(pokemonData);
        expect(pokemon.name).toBeTruthy();
        expect(pokemon.id).toBeTruthy();
        expect(pokemon.sprite).toBeTruthy();
        console.log(pokemon);
    });

});