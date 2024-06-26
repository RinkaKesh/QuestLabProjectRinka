import { Box, Grid, Image, Text } from '@chakra-ui/react';
import img1 from "../../public/sec6logo1.svg"
import img2 from "../../public/sec6logo2.svg"
import img3 from "../../public/sec6logo3.svg"
import img4 from "../../public/sec6logo4.svg"
import img5 from "../../public/sec6logo5.svg"
import img6 from "../../public/sec6logo6.svg"

import React from 'react';

const Sec6 = () => {
  const items = [
    { imgSrc: img1, text1: 'AI Personalization', text2: 'AI-driven personalization enhances user engagement with unique experiences.' },
    { imgSrc: img2, text1: 'Real-Time Insights', text2: 'Utilize our analytics for instant insights on user behavior and app performance.' },
    { imgSrc:img3 , text1: 'Seamless SDK Integration', text2: 'Effortlessly integrate with our robust, cross-platform SDKs for maximum compatibility.' },
    { imgSrc:img4, text1: 'Dynamic Content', text2: 'Keep content engaging with AI-powered optimization, adapting to user preferences.' }, 
    { imgSrc:img5 , text1: 'Highly Scalable', text2: "Quest's scalable solutions ensure seamless growth without performance compromise." },
    { imgSrc: img6, text1: 'Robust Security', text2: 'Quest ensures security with data protection, compliance, and secure transactions.' }
  ];

  return (
    <Box display="flex" justifyContent="center" bgColor="black" pt="80px" px={{base:"30px"}}>
      <Grid
        templateColumns={{
          base: '1fr',            
          md: 'repeat(2, 1fr)',   
          lg: 'repeat(3, 1fr)'    
        }}
        gap={4}
        width={{
          base: '100%',           
          md: '48%',              
          lg: '70%'              
        }}
      >
        {items.map((item, index) => (
          <Box key={index} p={4}  borderWidth="1px" borderRadius="20px" display="flex" alignItems="center" flexDir="column" color="white"  sx={{
            background: 'rgba(11, 3, 23, 1.0)',
            backgroundImage: 'conic-gradient(from 45deg, rgba(11, 3, 23, 1.0), rgba(22, 24, 24, 1.0)'
          }}>
            <Image src={item.imgSrc} alt={item.text1} mb="4" />
            <Text fontWeight="bold" mb={2} textAlign={"left"}>{item.text1} </Text>
            <Text>{item.text2}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Sec6;
