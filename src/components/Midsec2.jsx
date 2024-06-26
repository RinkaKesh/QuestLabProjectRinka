import React from 'react'
import { Image,Box,Flex, HStack } from '@chakra-ui/react'

const Midsec2 = () => {
  return (

        <Box maxH="auto" bgColor="black" pb="140px">
        <Box bgColor="black">
        <Image src='public/images/flowchart.png' w="70%" mx="auto"  ></Image>
        </Box>
        <Flex justifyContent="center"  gap="20px">
            <Image src='public/card1.svg' maxW="300px" minW="300px" border="1px solid" borderColor="white" borderRadius="15px"></Image>
            <Image src='public/card2.svg' maxW="300px" minW="300px" border="1px solid" borderColor="white" borderRadius="15px"></Image>
            <Image src='public/card3.svg'maxW="300px" minW="300px" border="1px solid" borderColor="white" borderRadius="15px"></Image>
            <Image src='public/card4.svg'maxW="300px" minW="300px" border="1px solid" borderColor="white" borderRadius="15px"></Image>
        </Flex>
        </Box>
        
    
  )
}

export default Midsec2
