import React, {useState, useEffect} from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import MainLayout from './components/Layout/MainLayout';

import Game from './features/Game';

const game = new Game();

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {

    const getCards = async () => {
      await game.createCards()
      setCards(game.cards)
    };

    getCards();

  }, []);

  const handleClick = async (cardIndex) => {
    await game.selectCard(cardIndex);
    const newCards = await game.cards;
    setCards(newCards);
  };

  return (
    <ChakraProvider>
      <MainLayout cards={cards} handleClick={handleClick} />
    </ChakraProvider>
  );
}

export default App;
