import React from "react";
import TopTrending from "./components/topTrending";
import ForYou from "./components/ForYou";
import NewsHome from "./components/NewsHome";

const Home = () => {
  return (
    <div className="pt-10 mx-10">
      <h1 className="text-8xl text-center font-newAstro">Music Match</h1>
      <p className="text-xl text-center my-10 text-">
        “A música pode mudar o mundo porque pode mudar as pessoas.” – Bono.
      </p>
      <TopTrending />
      <ForYou />
      <NewsHome />
    </div>
  );
};

export default Home;
