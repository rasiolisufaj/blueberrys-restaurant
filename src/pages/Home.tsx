import React from "react";
import HomeMain from "./HomeMain";
import HomeAboutUs from "./HomeAboutUs";
import HomeReviews from "./HomeReviews";

function Home() {

  return (
    <div>
      <main id="main">
        <HomeMain />
        <HomeAboutUs />
        <HomeReviews />
      </main>
    </div>
  );
};

export default Home;
