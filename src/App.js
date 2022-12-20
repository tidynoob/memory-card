import React, { useState, useEffect } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "./components/Layout/MainLayout";

import Game from "./features/Game";

const game = new Game();

function App() {
  const [cards, setCards] = useState([]);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const getCards = async () => {
      await game.createCards();
      setCards(game.cards);
    };
    getCards();
  }, []);

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
      <MainLayout cards={cards} handleClick={handleClick} score={score} highScore={highScore}/>
    </ChakraProvider>
  );
}

export default App;
