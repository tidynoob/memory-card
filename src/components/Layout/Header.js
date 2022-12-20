import React from "react";
import {
  Box,
  Heading,
  IconButton,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import { InfoOutlineIcon } from "@chakra-ui/icons";

function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        p={4}
        zIndex={1}
        bg="gray.200"
        shadow="base"
      >
        <Heading>Pokémon Memory</Heading>
        <IconButton
          aria-label="Info"
          icon={<InfoOutlineIcon />}
          variant="outline"
          colorScheme="black"
          size="lg"
          onClick={onOpen}
        />
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>How to play</ModalHeader>
          <ModalBody>
            Select a card only once to earn points. If you select the same card
            twice, you lose. Every time you select a card, the cards are
            shuffled. Try to get the highest score!
          </ModalBody>
          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
}

export default Header;
