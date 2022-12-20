import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Layout/Header";
import MainLayout from "./components/Layout/MainLayout";

import Game from "./features/Game";

const game = new Game();

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gen, setGen] = useState(null);

  useEffect(() => {
    const getCards = async () => {
      await game.createCards(gen);
      setCards(game.cards);
    };
    getCards();
  }, [gen]);

  const handleClick = async (cardIndex) => {
    await game.selectCard(cardIndex);
    const newCards = game.cards;
    const newScore = game.score;
    const newHighScore = game.maxScore;

    setCards(newCards);
    setScore(newScore);
    setHighScore(newHighScore);
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
      />
    </ChakraProvider>
  );
}

export default App;
