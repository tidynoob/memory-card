import React, { useState, useEffect } from "react";
import { ChakraProvider, useBoolean } from "@chakra-ui/react";
import Header from "./components/Layout/Header";
import MainLayout from "./components/Layout/MainLayout";

import Game from "./features/Game";

const game = new Game();

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gen, setGen] = useState(null);
  const [level, setLevel] = useState(1);
  const [loading, setLoading] = useBoolean();

  useEffect(() => {
    const getCards = async () => {
      setLoading.on();
      game.setGen(gen);
      game.resetScore();
      await game.createCards();
      setLoading.off();
      setScore(game.score);
      setCards(game.cards);
    };
    getCards();
  }, [gen]);

  const handleClick = async (cardIndex) => {
    setLoading.on()
    await game.selectCard(cardIndex);
    setLoading.off();
    const newCards = game.cards;
    const newScore = game.score;
    const newHighScore = game.maxScore;
    const newLevel = game.level;

    setCards(newCards);
    setScore(newScore);
    setHighScore(newHighScore);
    setLevel(newLevel);
  };

  return (
    <ChakraProvider>
      <Header />
      <MainLayout
        cards={cards}
        handleClick={handleClick}
        score={score}
        highScore={highScore}
        setGen={setGen}
        level={level}
        loading={loading}
      />
    </ChakraProvider>
  );
}

export default App;
