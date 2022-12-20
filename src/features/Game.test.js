import Game from './game';

describe('testing game', () => {
  const testGame = new Game();

  test('game can generate random pokemon', async () => {
    await testGame.createCards();
    expect(testGame.cards.length).toBe(5);
    expect(testGame.cards[0].name).toBeTruthy();
    expect(testGame.cards[0].id).toBeTruthy();
    expect(testGame.cards[0].sprite).toBeTruthy();
  });

  test('game can shuffle cards', async () => {
    await testGame.createCards();
    const firstCard = testGame.cards[0];
    testGame.shuffleCards();
    expect(testGame.cards[0]).not.toBe(firstCard);
  });

  test('selecting a card shuffles the cards', () => {
    const firstCard = testGame.cards[0];
    testGame.selectCard(0);
    expect(testGame.cards[0]).not.toBe(firstCard);
  });

  test("selecting a non-selected card increases score and max score", () => {
    expect(testGame.score).toBe(1);
    expect(testGame.score).toBe(1);
  });

  test("selecting a selected card resets score but keeps max score", () => {
    while (testGame.score !== 0) {
      testGame.selectCard(0);
    }
    expect(testGame.score).toBe(0);
    expect(testGame.maxScore).toBeGreaterThan(0);
  });

  

});
