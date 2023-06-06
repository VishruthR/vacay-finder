import { Flex, Text } from "@chakra-ui/react";
import Loading from "react-loading-components";

export const LoadingScreen = () => {
  return (
    <Flex flexDir="column" w="100vw" h="100vh" justify="center" align="center">
      <Text fontSize="3xl" pb={4}>
        Your results are loading!
      </Text>
      <Loading type="ball_triangle" width={100} height={100} fill="#DD6B20" />
    </Flex>
  );
};
