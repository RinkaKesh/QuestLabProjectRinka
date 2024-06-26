import { Box, Text, Flex, Image, VStack } from '@chakra-ui/react'
import React from 'react'
import mid4_1 from "../../public/midsec4Img1.svg"
import midsec4_2 from "../../public/midsec4Img2.svg"

const Midsec4 = () => {
  return (
    <Box width="100%" margin="0 auto" bgColor="black" color="white" textAlign="center" py="120px">
      <Text fontSize="54px" fontWeight="600">Let our AI find the best ways to</Text>
      <Text fontSize="54px" fontWeight="600">engage & convert your users</Text>
      <Text fontSize="20px" fontWeight="500" mt="10px">Generate Personalized In-App Text, Image, UI at Scale for Millions of Users without engineering team</Text>
      <Flex justifyContent="center" w="75%" margin="70px auto">
        <Image src={mid4_1}></Image>
        <Box display="flex" flexDir="column" alignItems="center" py="100px" px="40px">
          <Text fontSize="35px" fontWeight="600" textAlign="left" lineHeight="35px" >AI generated mini-segments to target in active user</Text>
          <Text fontSize="21px" fontWeight="400" textAlign="left" mt="18px" lineHeight="28px">Our analytical models find common traits for users that are not active and creates thousands of segments to activate them</Text>
        </Box>
      </Flex>
      <Flex justifyContent="center" w="75%" margin="70px auto">
        <Box display="flex" flexDir="column" alignItems="center" py="100px" px="40px" >
          <Text fontSize="35px" fontWeight="600" textAlign="left" lineHeight="35px">Our models generate AI variants to optimize text, images, and UI layouts for each segment.</Text>
          <Text fontSize="21px" fontWeight="400" textAlign="left" mt="18px" lineHeight="28px">Easily find winning variants among millions of variants to power users across the customer journey</Text>
        </Box>
        <Image src={midsec4_2}></Image>
      </Flex>



    </Box>
  )
}

export default Midsec4
