import { Box, Text, Flex, Image } from '@chakra-ui/react';
import React from 'react';
import mid4_1 from "../../public/midsec4Img1.svg";
import midsec4_2 from "../../public/midsec4Img2.svg";

const Midsec4 = () => {
  return (
    <Box width="100%" margin="0 auto" bgColor="black" color="white" textAlign="center" py={{ base: "80px", md: "120px" }}>
      <Text fontSize={{ base: "36px", md: "54px" }} fontWeight="600" lineHeight="1.2">Let our AI find the best ways to</Text>
      <Text fontSize={{ base: "36px", md: "54px" }} fontWeight="600" lineHeight="1.2">engage & convert your users</Text>
      <Text fontSize={{ base: "16px", md: "20px" }} fontWeight="500" mt="10px">Generate Personalized In-App Text, Image, UI at Scale for Millions of Users without engineering team</Text>
      <Flex flexDirection={{ base: "column", md: "row" }} justifyContent="center" w={{ base: "90%", md: "75%" }} margin="70px auto">
        <Image src={mid4_1} boxSize={{ base: "100%", md: "auto" }} mb={{ base: "30px", md: "0" }} />
        <Box display="flex" flexDir="column" alignItems="center" py={{ base: "50px", md: "100px" }} px={{ base: "20px", md: "40px" }}>
          <Text fontSize={{ base: "24px", md: "35px" }} fontWeight="600" textAlign="left" lineHeight="1.2">AI generated mini-segments to target in active user</Text>
          <Text fontSize={{ base: "16px", md: "21px" }} fontWeight="400" textAlign="left" mt="18px" lineHeight="1.5">Our analytical models find common traits for users that are not active and creates thousands of segments to activate them</Text>
        </Box>
      </Flex>
      <Flex flexDirection={{ base: "column-reverse", md: "row" }} justifyContent="center" w={{ base: "90%", md: "75%" }} margin="70px auto">
        <Box display="flex" flexDir="column" alignItems="center" py={{ base: "50px", md: "100px" }} px={{ base: "20px", md: "40px" }}>
          <Text fontSize={{ base: "24px", md: "35px" }} fontWeight="600" textAlign="left" lineHeight="1.2">Our models generate AI variants to optimize text, images, and UI layouts for each segment.</Text>
          <Text fontSize={{ base: "16px", md: "21px" }} fontWeight="400" textAlign="left" mt="18px" lineHeight="1.5">Easily find winning variants among millions of variants to power users across the customer journey</Text>
        </Box>
        <Image src={midsec4_2} boxSize={{ base: "100%", md: "auto" }} />
      </Flex>
    </Box>
  );
};

export default Midsec4;
