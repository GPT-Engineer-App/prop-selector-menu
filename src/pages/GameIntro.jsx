import { Box, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function GameIntro() {
  return (
    <Box textAlign="center" py={10} px={6}>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Welcome to the Game!
      </Heading>
      <Text color={"gray.500"}>Get ready to embark on an exciting adventure.</Text>
      <Link to="/">
        <Button colorScheme="teal" mt={4}>
          Start Game
        </Button>
      </Link>
    </Box>
  );
}

export default GameIntro;
