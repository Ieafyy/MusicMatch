import React from "react";
import { motion } from "framer-motion";

const TopTradingGeneros = () => {
  const genreData = [
    { name: "Rock" },
    { name: "MPB" },
    { name: "Indie" },
    { name: "Folk" },
    { name: "POP" },
  ];

  return (
    <div className="flex flex-col pt-10 px-10 gap-10 bg-roxo rounded-b-2xl">
      <div className="flex flex-col gap-5">
        {genreData.map((genre, index) => (
          <div key={index} className="flex">
            <motion.div
              className={`bg-white pl-2 h-24 overflow-visible whitespace-nowrap`}
              initial={{ width: 0 }}
              animate={{ width: 1200 - index * 100 }}
              transition={{
                duration: 1,
                delay: index / 25,
                ease: "anticipate",
              }}
            >
              <p className="font-bold text-3xl py-5 ml-2">
                #{index + 1} | {genre.name}
              </p>
            </motion.div>
          </div>
        ))}
      </div>
      <button className="bg-gray-100 py-3 px-16 rounded-xl mt-10 text-xl font-bold place-self-center lg:place-self-end hover:bg-gray-200">
        Veja mais
      </button>
    </div>
  );
};

export default TopTradingGeneros;
