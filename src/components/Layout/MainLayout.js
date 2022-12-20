import React from "react";
import { Box, Text, Heading, Spinner } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import Card from "../Elements/Card";
import GenSelect from "../Elements/GenSelect";

function Cards(props) {
  const { cards, handleClick, loading } = props;

  if (cards === undefined || loading === true) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
        <Spinner size="xl" />
      </Box>
    );
  }

  return cards.map((card, index) => (
    <Card
      key={uuidv4()}
      data-index={index}
      pokemonName={card.name}
      sprite={card.sprite}
      handleClick={() => handleClick(index)}
    />
  ));
}

function Score(props) {
  const { score, highScore } = props;
  return (
    <Box display="flex" flexDir="column" alignItems="center">
      <Box
        display="grid"
        gridTemplateColumns="4fr 1fr"
        justifyItems="end"
        w="100%"
      >
        <Text as="b">Score:</Text>
        <Text>{score}</Text>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="4fr 1fr"
        justifyItems="end"
        w="100%"
      >
        <Text as="b">High Score:</Text>
        <Text>{highScore}</Text>
      </Box>
    </Box>
  );
}

function MainLayout(props) {
  const { cards, score, highScore, handleClick, setGen, level, loading } =
    props;
  return (
    <Box
      display="flex"
      flexDir="column"
      p="4"
      w="80%"
      alignItems="center"
      m="auto"
      gap="4"
    >
      <GenSelect setGen={setGen} w="250px" />
      <Score score={score} highScore={highScore} />
      <Heading>Level {level}</Heading>
      <Box
        display="grid"
        gridTemplateColumns="repeat(auto-fit, minmax(150px, 1fr))"
        gap="4"
        w="100%"
      >
        <Cards cards={cards} handleClick={handleClick} loading={loading} />
      </Box>
    </Box>
  );
}

export default MainLayout;
