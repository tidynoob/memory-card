import Game from './game';

describe('testing game', () => {
  const testGame = new Game();

  test('game can generate random pokemon', async () => {
    await testGame.createCards();
    expect(testGame.cards.length).toBe(10);
    expect(testGame.cards[0].name).toBeTruthy();
    expect(testGame.cards[0].id).toBeTruthy();
    expect(testGame.cards[0].sprite).toBeTruthy();
  });

  test("selecting a non-selected card increases score and max score", () => {
    // ...
  });

  test("selecting a selected card resets score but keeps max score", () => {
    // ...
  });

});
