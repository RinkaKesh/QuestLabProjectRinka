import { HStack, Heading, VStack, Image, Text, Container, Flex, Box } from '@chakra-ui/react'
import React from 'react'
import horiImg from "../../public/Screenshot 2024-06-26 003941.png"
import heroImg from "../../public/killer.svg"


const Midsec1 = () => {
  return (
    <div>
      <VStack bgColor="black" pt={{ base: "40px", md: "80px" }} pb="30px" px={{ base: "10px", md: "20px" }}>
        <Text fontSize={{ base: "32px", md: "52px" }} color="white" textAlign="center">AI-Driven Personalized UI</Text>
        <Text fontSize={{ base: "16px", md: "19px" }} fontWeight="500" color="white" textAlign="center" mt="10px">
          Enhance your app with AI-driven personalized UI, seamlessly integrated with your data stack for a tailored user experience
        </Text>
        <Container centerContent display="flex" justifyContent="center" alignItems="center" gap={{ base: "3px", md: "5px" }} mt="20px">
          <Image src={horiImg} alt='' cursor="pointer" display="block" width={{ base: "450px", md: "550px", lg: "700px" }} />

          <Flex direction={{ base: "column", md: "row" }} alignItems="center" mt={{ base: "20px", md: "0" }}>
            <Box display="flex" flexDirection="column" mt={{ base: "20px", md: "35px" }} gap="20px" color="white">
              <Text border="2px solid" borderColor="grey" textAlign="center" borderRadius="5px" p="5px">AI segmentation</Text>
              <Text whiteSpace="nowrap" border="2px solid" borderColor="grey" textAlign="center" px="8px" borderRadius="5px" p="5px">Analytics & Insights</Text>
            </Box>
            <Box mt={{ base: "20px", md: "0" }} ml={{ base: "0", md: "20px" }} mr={{ base: "0", md: "20px" }}>
              <Image src={heroImg} boxSize={{ base: "100px", md: "150px", lg: "200px" }} />
            </Box>
            <Box display="flex" flexDirection="column" mt={{ base: "20px", md: "35px" }} gap="20px" color="white">
              <Text border="2px solid" borderColor="grey" textAlign="center" borderRadius="5px" p="5px">Decision Agent</Text>
              <Text whiteSpace="nowrap" border="2px solid" borderColor="grey" textAlign="center" px="8px" borderRadius="5px" p="5px">AI growth campaign</Text>
            </Box>
          </Flex>
        </Container>
      </VStack>
    </div>
  )
}

export default Midsec1
