import {
  getPokemon,
} from "./getPokemon.js";

describe("getPokemon", () => {

  test("can fetch a random pokemon", async () => {
    const testPokemon = await getPokemon();
    expect(testPokemon.name).toBeTruthy();
    expect(testPokemon.id).toBeTruthy();
    expect(testPokemon.sprite).toBeTruthy();
    console.log(testPokemon);
    });

  test("can fetch a specific pokemon", async () => {
    const testID = 83;
    const testPokemon = await getPokemon(testID);
    expect(testPokemon.name).toBeTruthy();
    expect(testPokemon.id).toBeTruthy();
    expect(testPokemon.sprite).toBeTruthy();
    console.log(testPokemon);
  });

  test("get pokemon details for an array of ids", async () => {
    const testIDs = [1, 2, 3, 4, 5];
    const testPokemon = await Promise.all(testIDs.map(getPokemon))
    expect(testPokemon.length).toBe(testIDs.length);
    expect(testPokemon[0].name).toBeTruthy();
    expect(testPokemon[0].id).toBeTruthy();
    expect(testPokemon[0].sprite).toBeTruthy();
    console.log(testPokemon);
  });
});
