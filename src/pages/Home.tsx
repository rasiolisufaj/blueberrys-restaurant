import React from "react";
import HomeMain from "./HomeMain";
import HomeAboutUs from "./HomeAboutUs";
import HomeReviews from "./HomeReviews";

function Home() {

  return (
    <div id="pageContainer">
      <HomeMain/>
      <HomeAboutUs/>
      <HomeReviews/>
    </div>
  );
};

export default Home;
