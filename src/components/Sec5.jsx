import React from 'react';
import { Box, Text, Image, Flex } from '@chakra-ui/react';
import img1 from "../../public/sec5Img1.svg";
import img2 from "../../public/sec5Img2.svg";
import img3 from "../../public/sec5Img3.svg";
import img4 from "../../public/sec5Img4.svg";
import img5 from "../../public/sec5Img5.svg";

const Sec5 = () => {
  return (
    <Box w="100%" mx="auto" bgColor="black" py={{ base: "20px", md: "50px" }} px="20px" textAlign="center">
      <Text color="white" fontWeight="500" fontSize={{ base: "20px"}}>FEATURES</Text>
      <Text color="white" fontSize={{ base: "40px", md: "50px" }} fontWeight="700" mb={{ base: "10px", md: "20px" }}>Robust & Scalable Platform & SDKs</Text>
      <Text color="white" fontSize={{ base: "16px", md: "20px" }} fontWeight="500">Low-Code Dashboard, SDKs & APIs to drive product growth</Text>

      <Flex direction={{ base: "column", md: "row" }} justifyContent="space-around" flexWrap="wrap" mt="40px">
        <Box flex="1" maxW={{ base: "100%", md: "45%" }} p={{ base: "10px", md: "20px" }} color="white" borderRadius="15px" bgGradient="linear(to-r, rgb(75, 33, 111), rgba(12, 10, 63, 0.9719537473192402))">
          <Image src={img1}  minH={{base:"200px",sm:"400px",md:"400px"}} mx="auto" mb="20px" />
          <Text fontSize={{ base: "22px", md: "30px" }} textAlign="left">Enterprise-Grade SDKs</Text>
          <Text fontSize="16px">Build on a solid foundation with our robust SDKs, designed for scalability and performance.</Text>
        </Box>

        <Box flex="1" maxW={{ base: "100%", md: "45%" }} p={{ base: "10px", md: "20px" }} color="white" borderRadius="15px" bgGradient="linear(to-r, rgb(75, 33, 111), rgba(12, 10, 63, 0.9719537473192402))" mt={{ base: "20px", md: "0" }}>
          <Image src={img2} maxH="400px" minH="400px" mx="auto" mb="20px" />
          <Text fontSize={{ base: "22px", md: "30px" }} textAlign="left">Fully Customizable to your Brand</Text>
          <Text fontSize="16px">Your brand, your way—personalize every aspect of your platform to stand out.</Text>
        </Box>
      </Flex>

      <Flex direction={{ base: "column", md: "row" }} justifyContent="space-around" flexWrap="wrap" mt="40px">
        <Box flex="1" maxW={{ base: "100%", md: "30%" }} p={{ base: "10px", md: "20px" }} color="white" borderRadius="15px" bgGradient="linear(to-r, rgb(75, 33, 111), rgba(12, 10, 63, 0.9719537473192402))">
          <Image src={img3} maxH="400px" minH="400px" mx="auto" mb="20px" />
          <Text fontSize={{ base: "22px", md: "30px" }} textAlign="left">Plug & Play with Pre-Built Templates</Text>
          <Text fontSize="16px">Jumpstart your project using 100s of customizable templates for a seamless user experience.</Text>
        </Box>

        <Box flex="1" maxW={{ base: "100%", md: "30%" }} p={{ base: "10px", md: "20px" }} color="white" borderRadius="15px" bgGradient="linear(to-r, rgb(75, 33, 111), rgba(12, 10, 63, 0.9719537473192402))" mt={{ base: "20px", md: "0" }}>
          <Image src={img4} maxH="400px" minH="400px" mx="auto" mb="20px" />
          <Text fontSize={{ base: "22px", md: "30px" }} textAlign="left">Unlock AI-Powered Insights</Text>
          <Text fontSize="16px">Leverage advanced analytics to drive data-driven decisions and foster growth.</Text>
        </Box>

        <Box flex="1" maxW={{ base: "100%", md: "30%" }} p={{ base: "10px", md: "20px" }} color="white" borderRadius="15px" bgGradient="linear(to-r, rgb(75, 33, 111), rgba(12, 10, 63, 0.9719537473192402))" mt={{ base: "20px", md: "0" }}>
          <Image src={img5} maxH="400px" minH="400px" mx="auto" mb="20px" />
          <Text fontSize={{ base: "22px", md: "30px" }} textAlign="left">Stay Updated in Slack</Text>
          <Text fontSize="16px">Trigger Slack alerts to your team and automatically detect key intent signals.</Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Sec5;
