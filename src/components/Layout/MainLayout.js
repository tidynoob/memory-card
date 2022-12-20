import React from "react";
import { Box } from "@chakra-ui/react";
import { v4 as uuidv4 } from "uuid";
import Card from "../Elements/Card";

function Cards(props) {
    const { cards, handleClick } = props;

    if (cards === undefined) {
        return <Box>Loading...</Box>;
    }

    return (
        cards.map((card, index) => <Card key={uuidv4()} data-index={index} pokemonName={card.name} sprite={card.sprite} handleClick={() => handleClick(index)} />)
    );
}

function MainLayout(props) {
    const { cards, handleClick } = props;
    return (
        <Box display="grid" gridTemplateColumns='repeat(auto-fill, minmax(200px, 1fr))' gap="4" w="80%" mx='auto' p='4'>
            <Cards cards={cards} handleClick={handleClick} />
        </Box>
    );
}

export default MainLayout;