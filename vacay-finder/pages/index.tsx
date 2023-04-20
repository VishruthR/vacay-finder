import React from "react";
import Select from "../components/Select.js";

import { Button, Image, Text } from "@chakra-ui/react";
import { Router } from "next/router.js";
import Link from "next/link.js";

class Banner extends React.Component {
  render() {
    return (
      <div className="banner">
        <div className="text">
          <div className="header">
            <Image borderRadius="full" src="/paper-plane.png" alt="Logo" />
          </div>
          <h2>Find your perfect vacation</h2>
          <p>
            {`Choose between a couple pairs of vacation spots and we'll give you a
            curated list of vacations you'll love!`}
          </p>
          <Link href="/recommender">
            <Button colorScheme="orange">Get Started </Button>
          </Link>
        </div>

        <div className="splash-image"></div>
      </div>
    );
  }
}

const Home = () => {
  return (
    <div>
      <Banner />
    </div>
  );
};

export default Home;
