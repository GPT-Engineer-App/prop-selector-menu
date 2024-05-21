import { Box, Flex, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

function Navigation() {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <Box color="white" fontWeight="bold">
          Game Site
        </Box>
        <Flex alignItems={"center"}>
          <Link as={RouterLink} to="/" color="white" mx={2}>
            Home
          </Link>
          <Link as={RouterLink} to="/intro" color="white" mx={2}>
            Intro
          </Link>
        </Flex>
      </Flex>
    </Box>
  );
}

export default Navigation;
