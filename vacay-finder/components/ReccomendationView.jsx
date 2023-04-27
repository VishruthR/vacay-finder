import {
  Box,
  Center,
  Grid,
  HStack,
  Image,
  Text,
  VStack,
  extendTheme,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

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
    <Center h="100vh" w="100vw">
      <VStack paddingTop={10} h="100%" w="100%">
        <Text fontSize="4xl" as="b" fontFamily={"Arial"}>
          The Results Are In!
        </Text>
        <Text>Your next great vacation spots are:</Text>
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
                  marginTop="40px"
                  fontSize="2xl"
                  as="b"
                  color="white"
                  textStyle="outline"
                >
                  {city.name}
                </Text>
              </div>
            </HStack>
          ))}
        </Grid>
      </VStack>
    </Center>
  );
};

export default RecommendationView;
