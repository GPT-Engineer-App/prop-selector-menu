import { useState } from "react";
import { Container, VStack, HStack, Text, Select, Checkbox, CheckboxGroup, Button, Image, Box } from "@chakra-ui/react";
import { FaCameraRetro } from "react-icons/fa";

const Index = () => {
  const [backdrop, setBackdrop] = useState("");
  const [balloons, setBalloons] = useState([]);
  const [numberBalloons, setNumberBalloons] = useState([]);

  const handleBackdropChange = (event) => setBackdrop(event.target.value);
  const handleBalloonsChange = (value) => setBalloons(value);
  const handleNumberBalloonsChange = (value) => setNumberBalloons(value);

  const handleSubmit = () => {
    alert(`Selected Backdrop: ${backdrop}\nSelected Balloons: ${balloons.join(", ")}\nSelected Number Balloons: ${numberBalloons.join(", ")}`);
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <HStack spacing={2}>
          <FaCameraRetro size="2em" />
          <Text fontSize="2xl">Photoshoot Prop Selector</Text>
        </HStack>

        <Box width="100%">
          <Text fontSize="lg">Select Backdrop Color:</Text>
          <Select placeholder="Select backdrop color" value={backdrop} onChange={handleBackdropChange}>
            <option value="white">White</option>
            <option value="black">Black</option>
            <option value="blue">Blue</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
          </Select>
        </Box>

        <Box width="100%">
          <Text fontSize="lg">Select Balloons:</Text>
          <CheckboxGroup value={balloons} onChange={handleBalloonsChange}>
            <VStack alignItems="flex-start">
              <Checkbox value="red">Red</Checkbox>
              <Checkbox value="blue">Blue</Checkbox>
              <Checkbox value="green">Green</Checkbox>
              <Checkbox value="yellow">Yellow</Checkbox>
              <Checkbox value="pink">Pink</Checkbox>
            </VStack>
          </CheckboxGroup>
        </Box>

        <Box width="100%">
          <Text fontSize="lg">Select Number Balloons:</Text>
          <CheckboxGroup value={numberBalloons} onChange={handleNumberBalloonsChange}>
            <HStack spacing={4}>
              {Array.from({ length: 10 }, (_, i) => (
                <Checkbox key={i} value={String(i)}>
                  {i}
                </Checkbox>
              ))}
            </HStack>
          </CheckboxGroup>
        </Box>

        <Button colorScheme="teal" onClick={handleSubmit}>
          Submit
        </Button>
      </VStack>
    </Container>
  );
};

export default Index;
