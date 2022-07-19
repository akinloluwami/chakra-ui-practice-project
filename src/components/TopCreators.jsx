import React from "react";
import { Flex, Text, Box, Button } from "@chakra-ui/react";
import Creators from "../utils/creators";
function TopCreators() {
  return (
    <Flex
      backgroundColor={"#1f1e23"}
      width="80%"
      margin={"auto"}
      marginTop={"20px"}
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      py={5}
      borderRadius={"10px"}
    >
      <Text
        color={"#fff"}
        width={"100%"}
        textAlign="left"
        marginLeft={"100px"}
        marginBottom={"10px"}
      >
        {" "}
        Top creators of the week
      </Text>
      <Flex w={"80%"} justifyContent={"space-between"}>
        {Creators.map((creator) => (
          <Box key={Creators.indexOf(creator)} color="#fff">
            <Text>{creator.name}</Text>
            <Text color={"#949b7c"}>
              ${Number(parseInt(creator.money)).toLocaleString()}
            </Text>
          </Box>
        ))}
      </Flex>
    </Flex>
  );
}

export default TopCreators;
