import React from 'react';
import { Image, Box, Flex } from '@chakra-ui/react';
import card1 from "../../public/card1.svg";
import card2 from "../../public/card2.svg";
import card3 from "../../public/card3.svg";
import card4 from "../../public/card4.svg";
import flowchart from "../../public/flowchart.png";

const Midsec2 = () => {
  return (
    <Box bgColor="black" pb={{ base: "50px", md: "140px" }} px="20px">
      <Box bgColor="black" textAlign="center">
        <Image src={flowchart} maxW="100%" mx="auto" />
      </Box>
      <Flex justifyContent="center" flexWrap="wrap" mt="20px" gap={{ base: "10px", md: "20px" }}>
        <Image src={card1} maxW={{ base: "100%",sm:"200px", md: "300px" }} border="1px solid white" borderRadius="15px" mb="20px" />
        <Image src={card2} maxW={{ base: "100%",sm:"200px", md: "300px" }} border="1px solid white" borderRadius="15px" mb="20px" />
        <Image src={card3} maxW={{ base: "100%",sm:"200px", md: "300px" }} border="1px solid white" borderRadius="15px" mb="20px" />
        <Image src={card4} maxW={{ base: "100%",sm:"200px", md: "300px" }} border="1px solid white" borderRadius="15px" mb="20px" />
      </Flex>
    </Box>
  );
};

export default Midsec2;
