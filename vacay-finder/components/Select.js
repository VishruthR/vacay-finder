import { Button, Grid, GridItem, HStack, Image } from "@chakra-ui/react";
import React, { useState } from "react";

const Select = ({ first, second, onSelectFirst, onSelectSecond }) => {
  return (
    <div>
      <div className="select-container">
        <div
          className="select-left"
          style={{ backgroundImage: `url(${first.image})` }}
        >
          <div className="select-button-1">
            <h2 id="first-option">{first.name}</h2>
            <Button
              borderRadius="30px"
              colorScheme="orange"
              onClick={onSelectFirst}
            >
              Take me here!
            </Button>
          </div>
        </div>
        <div
          className="select-right"
          style={{ backgroundImage: `url(${second.image})` }}
        >
          <div className="select-button-2">
            <h2 id="second-option">{second.name}</h2>
            <Button
              borderRadius="30px"
              colorScheme="orange"
              onClick={onSelectSecond}
            >
              Take me here!
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Select;
