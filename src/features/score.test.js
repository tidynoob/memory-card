import { score } from "./score";

describe("testing score", () => {
  const gameScore = new score();

  test("score counts properly", () => {
    expect(gameScore.increase().getScore()).toBe(1);
    expect(gameScore.increase().getScore()).toBe(2);
  });

  test("score can be reset", () => {
    expect(gameScore.reset().getScore()).toBe(0);
  });

  test("max score is remembered after score is reset", () => {
    expect(gameScore.increase().increase().getScore()).toBe(2);
    expect(gameScore.getMaxScore()).toBe(2);
    expect(gameScore.reset().getScore()).toBe(0);
    expect(gameScore.getMaxScore()).toBe(2);
  });
});
