import { Box, Container, Text } from '@chakra-ui/react'
import React from 'react'

const CustomBox = ({ children, ...props }) => (
    <Box  cursor="pointer"  whiteSpace="nowrap" fontSize="21px" colour="white 700"  fontWeight="700" {...props}>
      {children}
    </Box>
  );

const Midsec3 = () => {
    return (
        <Box  bgColor="black" color="white" width="100%" textAlign="center">
            <Text fontSize="21px" fontWeight="200">Dynamic & Intelligent experiences</Text>
            <Text fontSize="50px">Deliver Delightful In-App Experiences that drive</Text>
            <Text fontSize="50px">Adoption, Engagement & Retention</Text>
            <Text fontSize="21px" fontWeight="200">50+ Pre-Built In-app Components to get started within minutes</Text>
            <Box border="9px solid" borderColor="gray" width="1300px" margin="0 auto" p="3px" mt="50px" borderRadius="15px" minH="800px"  bgGradient="radial-gradient(at center bottom, rgba(40, 21, 102, 1.0), rgba(1, 1, 1, 1.0))" >
                <Box display="flex" justifyContent="space-around" bgColor="gray" p="20px" m="3px" borderRadius="10px" >
                    <CustomBox>
                        <Text>Onboarding</Text>
                    </CustomBox>
                    <CustomBox>
                        <Text>Quizzes</Text>
                    </CustomBox>
                    <CustomBox>
                        <Text>Challenges</Text>
                    </CustomBox>
                    <CustomBox>
                        <Text>Offers</Text>
                    </CustomBox>
                    <CustomBox>
                        <Text>Survey</Text>
                    </CustomBox>
                    <CustomBox>
                        <Text>Personalized UI</Text>
                    </CustomBox>
                </Box>
            </Box>


        </Box>
    )
}

export default Midsec3








