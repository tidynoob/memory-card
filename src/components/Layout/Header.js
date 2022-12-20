import React from "react";
import { Box, Heading, IconButton } from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

function Header() {
  
  return (
    <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={4}
      zIndex={1}
      bg='gray.200'
      shadow='base'
    >
      <Heading>Pokémon Memory</Heading>
      <IconButton
        aria-label="Info"
        icon={<InfoOutlineIcon />}
        variant="outline"
        colorScheme="black"
        size="lg"
        />
    </Box>
  );
}

export default Header;
