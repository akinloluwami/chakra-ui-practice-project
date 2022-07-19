import React from "react";
import { Flex, Text, Button } from "@chakra-ui/react";
import { MdIosShare } from "react-icons/md";
function Navbar() {
  const navlinks = ["Home", "Marketplace", "About"];
  return (
    <>
      <Flex justify="space-between" align="center" py={4} px={40} width="100%">
        <Flex align="center">
          <img src="https://img.icons8.com/external-xnimrodx-lineal-gradient-xnimrodx/64/000000/external-emoji-social-media-xnimrodx-lineal-gradient-xnimrodx-3.png" />
        </Flex>
        <Flex align="center">
          {navlinks.map((link) => (
            <Text
              key={navlinks.indexOf(link)}
              fontSize="lg"
              fontWeight="light"
              mx={10}
              alignItems="center"
              justifyContent="space-between"
              color="#fff"
            >
              {link}
            </Text>
          ))}
        </Flex>
        <Flex align="center">
          <Button
            variant="outline"
            color="#fff"
            outline={true}
            borderColor="brand.accent"
            borderRadius={25}
            fontWeight={600}
            mx={2}
            _hover={{
              bg: "brand.accent",
              color: "brand.dark",
              borderColor: "brand.accent",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            Connect Wallet
          </Button>
          <Button
            variantColor="brand"
            variant="solid"
            backgroundColor={"brand.accent"}
            borderRadius={100}
            color="#fff"
            fontWeight={600}
            mx={2}
            _hover={{
              bg: "brand.accent",
              color: "brand.dark",
              borderColor: "brand.accent",
              boxShadow: "0px 0px 10px rgba(0,0,0,0.1)",
              transition: "all 0.2s ease-in-out",
            }}
          >
            <MdIosShare />
          </Button>
        </Flex>
      </Flex>
    </>
  );
}

export default Navbar;
