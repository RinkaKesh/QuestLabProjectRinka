import React, { useState } from 'react';
import { Box, Flex, Text, Button, IconButton, useDisclosure, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import logo from "../../../public/logosvg.svg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);


  const checkIsMobile = () => {
    setIsMobile(window.innerWidth <= 1025);
  };


  React.useEffect(() => {
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  return (
    <Box bgColor="rgb(29, 29, 33)" color="white" py="7" px={{ base: '2', md: '6' }} position="fixed" top="0" left="0" right="0" zIndex="1000">
      <Flex justify="space-between" align="center">
        <Flex align="center" gap="2">
          <img src={logo} alt="logo" />
          <Text fontSize="xl" fontWeight="bold">Quest</Text>
        </Flex>

        {isMobile ? (
          <>
            <IconButton
              aria-label="Open Menu"
              icon={<HamburgerIcon />}
              onClick={onOpen}
              variant="ghost"
              color="white"
              fontSize="24px"
            />
            <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
              <DrawerOverlay />
              <DrawerContent bgColor="rgb(29, 29, 33)" color="white">
                <DrawerCloseButton color="white" />
                <DrawerHeader>Menu</DrawerHeader>
                <DrawerBody>
                  <Flex direction="column" align="center" justify="center" mt="4">
                    <Text fontSize="xl" py="2">
                      <a href="#">Playbook</a>
                    </Text>
                    <Text fontSize="xl" py="2">
                      Resources
                    </Text>
                    <Text fontSize="xl" py="2">
                      <a href="#">Blogs</a>
                    </Text>
                  </Flex>
                  <Flex direction="column" align="center" justify="center" mt="4">
                    <Button variant="outline"
                      colorScheme="white"
                      size="sm"
                      borderWidth="3px"
                      borderColor="blueviolet"
                      backgroundColor="rgb(29, 29, 33)">Get Started</Button>
                    <Button variant="gradient"
                      size="sm"
                      background="linear-gradient(45deg, rgb(115, 34, 115), blue)"
                      color="white">Book Demo</Button>
                  </Flex>
                </DrawerBody>
              </DrawerContent>
            </Drawer>
          </>
        ) : (
          <Flex align="center" justify="center" gap="6">
            <Text fontSize="xl">
              <a href="#">Playbook</a>
            </Text>
            <Text fontSize="xl">Resources</Text>
            <Text fontSize="xl">
              <a href="#">Blogs</a>
            </Text>
            <Flex align="center" gap="4">
              <Button variant="outline"
                colorScheme="white"
                size="md"
                borderWidth="3px"
                borderColor="blueviolet"
                backgroundColor="rgb(29, 29, 33)">Get Started</Button>
              <Button variant="gradient"
                size="md"
                background="linear-gradient(45deg, rgb(115, 34, 115), blue)"
                color="white">Book Demo</Button>
            </Flex>
          </Flex>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
