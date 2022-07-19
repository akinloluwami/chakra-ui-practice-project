import React, { useState, useEffect, useRef } from "react";
import { Flex, Text, Button, Box } from "@chakra-ui/react";
import { SiEthereum } from "react-icons/si";

function HeroCard() {
  const [time, setTime] = useState(50000);
  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);
  const hours = Math.floor(time / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;
  const timeString = `${hours}h ${minutes}m ${seconds}s`;
  const cardRef = useRef();
  return (
    <Flex
      ref={cardRef}
      flexDirection={"column"}
      height={"460px"}
      p={"20px"}
      border="1px solid #fff"
      borderRadius={"10px"}
      alignItems={"center"}
      width={"300px"}
    >
      <Flex
        width={"100%"}
        justifyContent={"space-between"}
        marginBottom={"10px"}
      >
        <Text color={"grey"}>SPACE SONG</Text>
        <Text color={"grey"}>@space_song</Text>
      </Flex>
      <Flex width={"100%"} backgroundColor="red" height={"300px"}>
        <img
          src="https://i0.wp.com/culturecustodian.com/wp-content/uploads/2022/02/Tobi-j.jpg?resize=857%2C1200&ssl=1"
          alt="hero"
          width={"100%"}
          height={"100%"}
          borderRadius={"10px"}
          objectFit={"cover"}
          maxHeight={"100%"}
          maxWidth={"100%"}
        />
      </Flex>
      <Flex width="100%" justifyContent="space-between">
        <Flex flexDirection={"column"} alignItems="center">
          <Text color={"#fff"} fontWeight="bolder">
            {timeString}
          </Text>
          <Text color={"grey"}>Remaining Time</Text>
        </Flex>
        <Flex flexDirection={"column"} alignItems="center">
          <Flex
            flexDirection={"row"}
            alignItems="center"
            color={"#fff"}
            fontWeight="bolder"
          >
            <SiEthereum /> 5.25
          </Flex>
          <Text color={"grey"}>Highest Bid</Text>
        </Flex>
      </Flex>
      <Button
        backgroundColor="brand.accent"
        p="20px"
        marginTop={"10px"}
        width="100%"
        color={"#fff"}
      >
        Place A Bid
      </Button>
    </Flex>
  );
}

export default HeroCard;
