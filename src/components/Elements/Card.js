import React from "react";
import { Box, Image, Heading } from "@chakra-ui/react";

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
      {...rest}
      
    >
      <Image src={sprite} />
      <Heading size="sm">{pokemonName}</Heading>
    </Box>
  );
}

export default Card;
