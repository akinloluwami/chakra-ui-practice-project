import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import TopCreators from "./components/TopCreators";
import HeroCard from "./components/HeroCard";
function App() {
  const stats = [
    {
      number: "9.5k",
      text: "Art Work",
    },
    {
      number: "65k",
      text: "Artist",
    },
    {
      number: "90k+",
      text: "Actions",
    },
  ];
  return (
    <>
      <Box backgroundColor="brand.dark" h="fit-content" paddingBottom="20px">
        <Navbar />
        <Flex
          px={40}
          fontFamily="brand.main"
          marginTop={"20px"}
          justifyContent="space-between"
          alignItems="center"
        >
          <Flex flexDirection="column">
            <Text
              fontSize={"60px"}
              fontWeight="light"
              color="#fff"
              width={"500px"}
            >
              Create your own NFT gallery
            </Text>
            <Text
              fontSize={"20px"}
              color="#fff"
              fontWeight={"500"}
              py={5}
              maxW="500px"
            >
              NFT Marketplace brings artists and creators together on a single
              platform.
            </Text>
            <Button
              backgroundColor="brand.accent"
              width={"250px"}
              borderRadius="12px"
              _hover={"none"}
            >
              <Text fontSize="lg" fontWeight="light" color="#fff">
                Start Collecting
              </Text>
            </Button>
            <Flex>
              {stats.map((stat) => (
                <Flex
                  key={stats.indexOf(stat)}
                  align="center"
                  justify="space-between"
                  marginRight={10}
                  marginTop={7}
                  flexDirection="column"
                >
                  <Text fontSize="35px" fontWeight="light" color="#fff">
                    {stat.number}
                  </Text>
                  <Text fontSize="lg" fontWeight="light" color="grey">
                    {stat.text}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </Flex>

          <Flex>
            <HeroCard />
          </Flex>
        </Flex>
        <TopCreators />
      </Box>
    </>
  );
}

export default App;
