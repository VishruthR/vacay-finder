import { Text } from "@chakra-ui/react";
import { useRouter } from "next/router.js";
import React, { useEffect, useMemo, useState } from "react";
import Select from "../components/Select.js";

const VacationPicker = () => {
  const router = useRouter();
  const [firstCity, setFirstCity] = useState({});
  const [secondCity, setSecondCity] = useState({});
  const [pickedCities, setPickedCities] = useState([]);
  const [finalRecommendations, setFinalRecommendations] = useState([]);

  const getFinalRecommendations = async () => {
    const postData = { cities: pickedCities };

    const response = await fetch("http://localhost:5000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    });
    const data = await response.json();

    const temp = [];
    for (const key in data.Score) {
      temp.push(key);
    }

    setFinalRecommendations(temp);
  };

  function handleSelectFirst() {
    let city = firstCity.name;
    setPickedCities([...pickedCities, city]);
    console.log(pickedCities);
  }

  function handleSelectSecond() {
    let city = secondCity.name;
    setPickedCities([...pickedCities, city]);
    console.log(pickedCities);
  }

  useEffect(() => {
    const getNewCity = async (setCity) => {
      const response = await fetch("http://localhost:5000/get-city-random", {
        method: "GET",
      });
      const data = await response.json();
      setCity(data);
    };

    getNewCity(setFirstCity);
    getNewCity(setSecondCity);

    if (pickedCities.length === 5) {
      getFinalRecommendations();
    }
  }, [pickedCities]);

  return (
    <>
      {pickedCities.length < 5 ? (
        <Select
          first={firstCity}
          second={secondCity}
          onSelectFirst={handleSelectFirst}
          onSelectSecond={handleSelectSecond}
        />
      ) : (
        <>
          {finalRecommendations.map((rec) => (
            <Text key={`${rec}`}>{rec}</Text>
          ))}
        </>
      )}
    </>
  );
};

export default VacationPicker;
