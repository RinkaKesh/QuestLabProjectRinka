import { Box, VStack,Text,Image,UnorderedList,ListItem, Tag } from '@chakra-ui/react'
import footer_Logo from "../../public/footer logo.png"
import React from 'react'
const CustomTag = ({ children, ...props }) => (
    <Tag bg="black" color="white" ml="-5px"  cursor="pointer"  whiteSpace="nowrap" fontSize="15px" colour="white 100" {...props}>
      {children}
    </Tag>
  );


const Footer = () => {
  return (
    <Box display="flex" justifyContent="space-around" maxH="auto" bgColor="black" p="150px" color="white">
        <Box display="flex" flexDir="column" alignItems="center" gap="30px">
            <Image src={footer_Logo}></Image>
            <Text>Quest Labs INC</Text>
        </Box>

        <Box display="flex" justifyContent="space-around" gap="150px">
            <VStack alignItems="flex-start">
                <Text fontSize="18px" fontWeight="500">Resources</Text>
                
                    <CustomTag>Blog</CustomTag>
                    <CustomTag>Newsletter</CustomTag>
                    <CustomTag>Playbook</CustomTag>
                    <CustomTag>Docs</CustomTag>
                
            </VStack>
            <VStack alignItems="flex-start">
            <Text fontSize="18px" fontWeight="500">Support</Text>
            
                    <CustomTag >Contact</CustomTag>
                    <CustomTag>Join Quest Club</CustomTag>
                    <CustomTag>Sales Partner</CustomTag>
                
            </VStack>
            <VStack alignItems="flex-start">
            <Text fontSize="18px" fontWeight="500">Legal</Text>
            
                    <CustomTag>Privacy Policy</CustomTag>
                    <CustomTag>Terms of Use</CustomTag>
                    <CustomTag>Cookie Policy</CustomTag>
                
            </VStack>
        </Box>
      
    </Box>
  )
}

export default Footer











