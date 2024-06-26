import React from 'react'
import { Container, Heading, Text, Box, VStack, Input, Button, InputGroup, InputRightElement, Flex,Image } from '@chakra-ui/react'

const Header1 = () => {
  return (
    <>
    <Box maxH="100px" mt="90px" ></Box>
    <VStack  pt="10px" pb="30px" bgImage="url('public/images/Screenshot 2024-06-25 235528.png')" 
    bgPosition="center"
  bgRepeat="repeat"
  >
      <Container as="section" maxW="100%" centerContent mb="50px"  >
        <Heading color="white" fontWeight='bold' fontSize='60px'>Transform Your Product with</Heading>
        <Heading color="white" fontWeight='bold' fontSize='60px'>Intelligent In-App Experiences</Heading>
        <Text color="white" fontSize='20px' mt="25px" fontWeight="semibold">Empower growth & Marketing Teams to Boost Engagement and Conversion</Text>
        <Text color="white" fontSize='20px' fontWeight="semibold">10x faster without data or engineering team</Text>
      </Container>

      <Flex centerContent   >
        <InputGroup size="lg" width="100%" maxWidth="1000px" bgColor="rgba(1, 1, 1, 1.0)" >
          <Input
            pr='8rem' alignItems="center"
            placeholder='Enter your mail address'
            h="3.2rem"
          />
          <InputRightElement width="7rem" pr="6px"  >
            <Button h='2rem' size='lg' bgColor="black"  border="2px solid" borderColor="blueViolet" fontSize="16px" boxShadow='inner' color="white"  >
              Book Demo
            </Button>
          </InputRightElement>
        </InputGroup>
      </Flex>

      <Text mt="27px" mb="90px" color="white" fontSize="16px" fontWeight="600">No credit card required</Text>

      <Image src="/images/heroImage-IehvbV8o.svg" alt="img" width="1200px" />

    </VStack>
    </>
  )
}

export default Header1

