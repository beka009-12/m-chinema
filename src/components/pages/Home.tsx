import React from "react";
import Welcome from "./homeSection/Welcome";
import Trending from "./homeSection/Trending";
import Popular from "./homeSection/Popular";
import TopRated from "./homeSection/TopRated";

const Home = () => {
  return (
    <>
      <Welcome />
      <Trending />
      <Popular />
      <TopRated />
    </>
  );
};

export default Home;
