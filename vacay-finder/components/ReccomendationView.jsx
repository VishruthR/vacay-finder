import {
  Box,
  Button,
  Center,
  Flex,
  Grid,
  HStack,
  Image,
  Link,
  Text,
  VStack,
  extendTheme,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";

const customTheme = extendTheme({
  textStyles: {
    outline: {
      textShadow: "0 0 0 #000",
      textStroke: "10px black",
    },
  },
});

const RecommendationView = ({ cities }) => {
  const [citiesToDisplay, setCitiesToDisplay] = useState([]);

  cities = cities.slice(0, 3);

  useEffect(() => {
    if (citiesToDisplay.length >= 3) {
      return;
    }

    cities.map(async (city) => {
      const response = await fetch(
        `http://localhost:5000/get-city?name=${city}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await response.json();

      setCitiesToDisplay((prevArray) => [...prevArray, data]);
    });
  }, []);

  return (
    <VStack h="100vh" w="100vw" align="start">
      <Flex w="100%" justify="space-between">
        <Link href="/recommender">
          <Button borderRadius="30px" colorScheme="orange" m={2}>
            <AiOutlineArrowLeft
              color="white"
              size={20}
              style={{ "padding-right": "4px" }}
            />
            Play again
          </Button>
        </Link>
        <Flex className="header" align="end" p={2} mx={4}>
          <Image
            borderRadius="full"
            src="/paper-plane.png"
            alt="Logo"
            width={7}
            height={7}
            marginTop="2px"
          />
          <Text fontWeight={"bold"} fontSize="xl" ml={2} mr={1}>
            Vacay
          </Text>
          <Text fontWeight={"bold"} fontSize="xl" color="#DD6B20">
            Finder
          </Text>
        </Flex>
      </Flex>
      <Center w="100%" h="100%">
        <VStack h="100%" w="100%">
          <Text fontSize="4xl" as="b" fontFamily={"Arial"}>
            The results are in!
          </Text>
          <Text fontSize="2xl" color="#6C6C6C" pb={2}>
            Your next great vacation spots are:
          </Text>
          <Grid
            templateColumns="repeat(3, 1fr)"
            gap={10}
            h="100%"
            w="90%"
            paddingBottom="30px"
          >
            {citiesToDisplay.slice(0, 3).map((city) => (
              <HStack key={`city-${city.name}`}>
                <div
                  className="recommendation"
                  style={{ backgroundImage: `url(${city.image})` }}
                >
                  <Text
                    marginTop="20px"
                    fontSize="4xl"
                    as="b"
                    color="white"
                    style={{
                      "-webkit-text-stroke-width": "1px",
                      "-webkit-text-stroke-color": "black",
                    }}
                  >
                    {city.name}
                  </Text>
                </div>
              </HStack>
            ))}
          </Grid>
        </VStack>
      </Center>
    </VStack>
  );
};

export default RecommendationView;
