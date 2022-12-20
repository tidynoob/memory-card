import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";

const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

function Card(props) {
  const { pokemonName, sprite, handleClick, ...rest } = props;

  return (
    <Box
      display="flex"
      flexDir="column"
      justifyContent="center"
      alignItems="center"
      onClick={handleClick}
      padding="4"
      borderWidth="1px"
      borderRadius="base"
      shadow="base"
      cursor="pointer"
      width="150px"
      overflowX="auto"
      textAlign="center"
      mx="auto"
      _hover={{
        shadow: "md",
        bg: "gray.50",
      }}
      _active={{
        shadow: "md",
        bg: "gray.100",
      }}
      {...rest}
    >
      <Image mx="auto" src={sprite} />
      <Heading textAlign="center" size="sm">
        {capitalize(pokemonName)}
      </Heading>
    </Box>
  );
}

export default Card;
