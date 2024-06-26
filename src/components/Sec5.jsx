import { Box ,Text,Image,Flex} from '@chakra-ui/react'
import React from 'react'
import img1 from "../../public/sec5Img1.svg"
import img2 from "../../public/sec5Img2.svg"
import img3 from "../../public/sec5Img3.svg"
import img4 from "../../public/sec5Img4.svg"
import img5 from "../../public/sec5Img5.svg"



const Sec5 = () => {
  return (
    <Box w="100%" margin="0 auto" bgColor="black" py="20px" textAlign="center">
        <Text color="white" fw="900">FEATURES</Text>
        <Text fontSize="50px" fw="700" color="white" mb="10px">Robust & Scalable Platform & SDKs</Text>
        <Text color="white" fontSize="20px" fw="500">Low-Code Dashboard, SDKs & APIs to drive product growth</Text>
        <Box width="70%" margin="50px auto" border="1px sold" borderColor="white" gap="18px" display="flex">
            <Box p="18px"  color="white"  borderRadius="15px"  bgGradient="linear(to-r, rgb(75, 33, 111), rgba(12, 10, 63, 0.9719537473192402))" >
            <Image src={img1} maxH="450px" minH="450px" ></Image>
            <Text fontSize="30px" textAlign="left">Enterprise-Grade SDKs</Text>
            <Text fontSize="16px">Build on a solid foundation with our robust SDKs, designed for scalability and performance.</Text>
            </Box>
            <Box  p="18px"  color="white"  borderRadius="15px"  bgGradient="linear(to-r, rgb(75, 33, 111), rgba(12, 10, 63, 0.9719537473192402))">
            <Image src={img2} maxH="450px" minH="450px"></Image>
            <Text fontSize="30px" textAlign="left">Fully Customizable to your Brand</Text>
            <Text fontSize="16px">Your brand, your way—personalize every aspect of your platform to stand out.</Text>
            </Box>
        </Box>

        <Box width="70%" margin="10px auto" border="1px sold" borderColor="white" gap="23px" display="flex">
            <Box px="13px" py="10px" color="white"  borderRadius="15px"  bgGradient="linear(to-r, rgb(75, 33, 111), rgba(12, 10, 63, 0.9719537473192402))">
                <Image src={img3} minH="400px" maxH="400px"></Image>
                <Text fontSize="25px" textAlign="left">Plug & Play with Pre-Built Templates</Text>
                <Text fontSize="16px">Jumpstart your project using 100s of customi-zable templates for a seamless user experience.</Text>
            </Box>
            <Box px="13px" py="10px"  color="white"  borderRadius="15px"  bgGradient="linear(to-r, rgb(75, 33, 111), rgba(12, 10, 63, 0.9719537473192402))">
            <Image src={img4} minH="400px" maxH="400px"></Image>
                <Text fontSize="25px" textAlign="left">Unlock AI-Powered Insights</Text>
                <Text fontSize="16px">Leverage advanced analytics to drive data-driven decisions and foster growth.</Text>
            </Box>
            <Box px="13px" py="10px"  color="white"  borderRadius="15px"  bgGradient="linear(to-r, rgb(75, 33, 111), rgba(12, 10, 63, 0.9719537473192402))">
            <Image src={img5} minH="400px" maxH="400px"></Image>
                <Text fontSize="25px" textAlign="left">Stay Updated in Slack</Text>
                <Text fontSize="16px">Trigger Slack alerts to your team and automatically detect key intent signals.</Text>
            </Box>
        </Box>

      
    </Box >
  )
}

export default Sec5
