import { HStack, Heading, VStack, Image, Text, Container, Flex, Box } from '@chakra-ui/react'
import React from 'react'


const Midsec1 = () => {
  return (
    <div>
      <VStack bgColor="black" pt="80px" pb="30px">
        <Text fontSize="52px" color="white">AI-Driven Personalized UI</Text>
        <Text fontSize="19px" fontWeight="500" color="white">Enhance your app with AI-driven personalized UI, seamlessly integrated with your data stack for a tailored user experience</Text>
        <Container centerContent display="flex" justifyContent="center" alignItems="center" gap="5px">
          <Image src='public/images/Screenshot 2024-06-26 003941.png' alt='' cursor="pointer" display="block" />

          <Flex >
            <Box display="flex" flexDirection="column"  mt="35x" gap="20px"  color="white" >
              <Text border="2px solid" borderColor="grey" textAlign="center" mr="10px" >AI segmentation </Text>
              <Text whiteSpace="nowrap" border="2px solid" borderColor="grey" textAlign="center" px="8px" >Analytics & Insights</Text>
            </Box>
            <Box >< Image src='public/center.svg'/></Box>
            <Box display="flex" flexDirection="column"  mt="35px" gap="20px" color="white" >
              <Text border="2px solid" borderColor="grey"  textAlign="center" ml="10px" >Decision Agent </Text>
              <Text whiteSpace="nowrap" border="2px solid" borderColor="grey" textAlign="center" px="8px" >AI growth campaign</Text>
            </Box>
          </Flex>
         
        </Container>

      </VStack>

    </div>
  )
}

export default Midsec1
