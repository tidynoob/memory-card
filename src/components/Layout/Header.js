import React from "react";
import {
  Box,
  Image,
  Link,
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
import GitHubLogo from "../../assets/github-mark.svg";

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
        bg="gray.100"
        shadow="base"
      >
        <Heading>Pokémon Memory</Heading>
        <Box display="flex" alignItems="center" gap={4}>
          <Link display="flex" justifyContent="center" alignItems='center' target="_blank" href="https://github.com/tidynoob/memory-card" h='48px' w='48px' _hover={{ bg: "gray.200" }} borderRadius="base"> 
            <Image m='auto' src={GitHubLogo} h="36px" w="36px" alt="GitHub" />
          </Link>
          <IconButton
            aria-label="Info"
            icon={<InfoOutlineIcon />}
            variant="outline"
            colorScheme="black"
            size="lg"
            onClick={onOpen}
            _hover={{ bg: "gray.200" }}
          />
        </Box>
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
