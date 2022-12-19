import getPokemon from "./getPokemon.js";

describe("getPokemon", () => {

  // test("can fetch a random pokemon", async () => {
  //   const testPokemon = await getPokemon();
  //   expect(testPokemon.name).toBeTruthy();
  //   expect(testPokemon.id).toBeTruthy();
  //   expect(testPokemon.sprite).toBeTruthy();
  //   console.log(testPokemon);
  //   });

  // test("can fetch a specific pokemon", async () => {
  //   const testID = 83;
  //   const testPokemon = await getPokemon(testID);
  //   expect(testPokemon.name).toBeTruthy();
  //   expect(testPokemon.id).toBeTruthy();
  //   expect(testPokemon.sprite).toBeTruthy();
  //   console.log(testPokemon);
  // });

  test("get multiple random pokemon", async () => {
    const testPokemon = await getPokemon(5);
    expect(testPokemon.length).toBe(5);
    // console.log(testPokemon);
    expect(testPokemon[0].name).toBeTruthy();
    expect(testPokemon[0].id).toBeTruthy();
    expect(testPokemon[0].sprite).toBeTruthy();
    
  });

});
