import { Box, VStack, Text, Image, Tag } from '@chakra-ui/react'
import footer_Logo from "../../public/footer logo.png"
import React from 'react'

const CustomTag = ({ children, ...props }) => (
  <Tag
    bg="black"
    color="white"
    cursor="pointer"
    whiteSpace="nowrap"
    fontSize={{ base: "12px", sm: "13px", md: "14px", lg: "15px" }}
    {...props}
  >
    {children}
  </Tag>
);

const Footer = () => {
  return (
    <Box
      display="flex"
      justifyContent="space-around"
      alignItems="center"
      bgColor="black"
      p={{ base: "50px", sm: "80px", md: "100px", lg: "150px" }}
      color="white"
      flexWrap="wrap"
    >
      <Box
        display="flex"
        flexDir="column"
        alignItems="center"
        gap={{ base: "20px", sm: "25px", md: "30px" }}
        mb={{ base: "20px", lg: "0" }}
      >
        <Image src={footer_Logo} boxSize={{ base: "80px", sm: "100px", md: "120px" }} />
        <Text fontSize={{ base: "16px", sm: "18px", md: "20px" }}>Quest Labs INC</Text>
      </Box>

      <Box
        display="flex"
        justifyContent="space-around"
        gap={{ base: "30px", md: "50px", lg: "150px" }}
        flexWrap="wrap"
      >
        <VStack alignItems="flex-start" spacing={{ base: "10px", sm: "15px", md: "20px" }}>
          <Text fontSize={{ base: "14px", sm: "16px", md: "18px" }} fontWeight="500">Resources</Text>
          <CustomTag>Blog</CustomTag>
          <CustomTag>Newsletter</CustomTag>
          <CustomTag>Playbook</CustomTag>
          <CustomTag>Docs</CustomTag>
        </VStack>

        <VStack alignItems="flex-start" spacing={{ base: "10px", sm: "15px", md: "20px" }}>
          <Text fontSize={{ base: "14px", sm: "16px", md: "18px" }} fontWeight="500">Support</Text>
          <CustomTag>Contact</CustomTag>
          <CustomTag>Join Quest Club</CustomTag>
          <CustomTag>Sales Partner</CustomTag>
        </VStack>

        <VStack alignItems="flex-start" spacing={{ base: "10px", sm: "15px", md: "20px" }}>
          <Text fontSize={{ base: "14px", sm: "16px", md: "18px" }} fontWeight="500">Legal</Text>
          <CustomTag>Privacy Policy</CustomTag>
          <CustomTag>Terms of Use</CustomTag>
          <CustomTag>Cookie Policy</CustomTag>
        </VStack>
      </Box>
    </Box>
  );
}

export default Footer
