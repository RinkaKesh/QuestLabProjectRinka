import React from 'react'
import { Image,Box,Flex, HStack } from '@chakra-ui/react'
import card1 from "../../public/card1.svg"
import card2 from "../../public/card2.svg"
import card3 from "../../public/card3.svg"
import card4 from "../../public/card4.svg"
import flowchart from "../../public/flowchart.png"


const Midsec2 = () => {
  return (

        <Box maxH="auto" bgColor="black" pb="140px">
        <Box bgColor="black">
        <Image src={flowchart} w="70%" mx="auto"  ></Image>
        </Box>
        <Flex justifyContent="center"  gap="20px">
            <Image src={card1} maxW="300px" minW="300px" border="1px solid" borderColor="white" borderRadius="15px"></Image>
            <Image src={card2} maxW="300px" minW="300px" border="1px solid" borderColor="white" borderRadius="15px"></Image>
            <Image src={card3 } maxW="300px" minW="300px" border="1px solid" borderColor="white" borderRadius="15px"></Image>
            <Image src= {card4} maxW="300px" minW="300px" border="1px solid" borderColor="white" borderRadius="15px"></Image>
        </Flex>
        </Box>
        
    
  )
}

export default Midsec2
