import React from 'react'
import { Container, Heading, Text, Box, VStack, Input, Button, InputGroup, InputRightElement, Flex, Image } from '@chakra-ui/react'
import img from "../../../public/heroImage-IehvbV8o.svg"
import bgimg from "../../../public/Screenshot 2024-06-25 235528.png"

const Header1 = () => {
  return (
    <>
      <Box maxH="auto" mt="90px" pt={{base: "20px", sm: "20px", md: "30px", lg: "40px"}} bgColor="rgb(29, 29, 33)"></Box>
      <VStack
        pt="10px"
        pb="30px"
        bgImage={bgimg}
        bgPosition="center"
        bgRepeat="repeat"
      >
        <Container as="section" maxW="100%" centerContent mb="50px">
          <Heading
            color="white"
            fontWeight="bold"
            fontSize={{ base: "30px", sm: "40px", md: "50px", lg: "60px" }}
            textAlign="center"
          >
            Transform Your Product with
          </Heading>
          <Heading
            color="white"
            fontWeight="bold"
            fontSize={{ base: "30px", sm: "40px", md: "50px", lg: "60px" }}
            textAlign="center"
          >
            Intelligent In-App Experiences
          </Heading>
          <Text
            color="white"
            fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}
            mt="25px"
            fontWeight="semibold"
            textAlign="center"
          >
            Empower growth & Marketing Teams to Boost Engagement and Conversion
          </Text>
          <Text
            color="white"
            fontSize={{ base: "14px", sm: "16px", md: "18px", lg: "20px" }}
            fontWeight="semibold"
            textAlign="center"
          >
            10x faster without data or engineering team
          </Text>
        </Container>

        <Flex justifyContent="center" width="100%">
          <InputGroup
            size="lg"
            width="100%"
            maxWidth={{ base: "400px", sm:"380px"}}
            bgColor="rgb(29, 29, 33)"
          >
            <Input
              pr="8rem"
              placeholder="Enter your mail address"
              h={{ base: "2.5rem", md: "3.2rem" }}
              fontSize={{ base: "12px", md: "16px" }}
            />
            <InputRightElement width={{ base: "6rem", md: "7rem" }} pr="6px">
              <Button
                h={{ base: "2rem", md: "2.5rem" }}
                size="lg"
                bgColor="black"
                border="2px solid"
                borderColor="blueViolet"
                fontSize={{ base: "14px", md: "16px" }}
                boxShadow="inner"
                color="white"
              >
                Book Demo
              </Button>
            </InputRightElement>
          </InputGroup>
        </Flex>

        <Text
          mt="27px"
          mb="90px"
          color="white"
          fontSize={{ base: "12px", md: "16px" }}
          fontWeight="600"
          textAlign="center"
        >
          No credit card required
        </Text>

        <Image
          src={img}
          alt="img"
          width={{ base: "80%", sm: "85%", md: "90%", lg: "80%", xl: "70%" }}
          maxWidth="1200px"
        />
      </VStack>
    </>
  )
}

export default Header1
