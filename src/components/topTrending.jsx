import React from "react";
import TopTrendingArtistas from "./topTrendingArtistas";
import TopTrendingMusicas from "./topTrendingMusicas";
import TopTrendingGeneros from "./topTrendingGeneros";
import { motion } from "framer-motion";

const TopTrending = () => {
  const [top, setTop] = React.useState("musica");

  return (
    <div>
      <motion.div
        id="computador"
        className="hidden lg:block"
        initial={{ opacity: 0, translateY: 500 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        <h1
          className="text-5xl text-center font-newAstro"
          style={{ textShadow: "2px 2px 5px #9333ea" }}
        >
          Top Trending
        </h1>

        <div className="mt-10">
          <nav className="flex flex-row gap-5">
            <span
              onClick={() => setTop("musica")}
              className={`cursor-pointer ease-in-out duration-300 text-center px-10 py-3 font-bold rounded-t-2xl ${
                top === "musica" ? "bg-roxo w-64" : "w-36 bg-black text-white"
              } `}
            >
              Musicas
            </span>
            <span
              onClick={() => setTop("artista")}
              className={`cursor-pointer ease-in-out duration-300 text-center px-10 py-3 font-bold rounded-t-2xl ${
                top === "artista" ? "bg-roxo w-64" : "w-36 bg-black text-white"
              } `}
            >
              Artistas
            </span>
            <span
              onClick={() => setTop("genero")}
              className={`cursor-pointer ease-in-out duration-300 text-center px-10 py-3 font-bold rounded-t-2xl ${
                top === "genero" ? "bg-roxo w-64" : "w-36 bg-black text-white"
              } `}
            >
              Gêneros
            </span>
          </nav>
          <div className="bg-roxo py-10 text-black">
            {top === "musica" && <TopTrendingMusicas />}
            {top === "artista" && <TopTrendingArtistas />}
            {top === "genero" && <TopTrendingGeneros />}
          </div>
        </div>
      </motion.div>

      {/* ----------------------------------------------------- */}

      <motion.div
        id="mobile"
        className="block lg:hidden"
        initial={{ opacity: 0, translateY: 500 }}
        animate={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          ease: "backInOut",
        }}
      >
        <h1
          className="text-5xl text-center font-newAstro"
          style={{ textShadow: "2px 2px 5px #9333ea" }}
        >
          Top Trending (mobile)
        </h1>

        <div className="mt-10">
          <nav className="flex flex-row gap-3">
            <span
              onClick={() => setTop("musica")}
              className={`cursor-pointer ease-in-out duration-300 text-center px-5 py-3 font-bold rounded-t-2xl ${
                top === "musica" ? "bg-roxo w-36" : "w-14 bg-black text-white"
              } `}
            >
              <i class="fa-solid fa-music"></i>
            </span>
            <span
              onClick={() => setTop("artista")}
              className={`cursor-pointer ease-in-out duration-300 text-center px-5 py-3 font-bold rounded-t-2xl ${
                top === "artista" ? "bg-roxo w-36" : "w-14 bg-black text-white"
              } `}
            >
              <i class="fa-solid fa-user"></i>
            </span>
            <span
              onClick={() => setTop("genero")}
              className={`cursor-pointer ease-in-out duration-300 text-center px-5 py-3 font-bold rounded-t-2xl ${
                top === "genero" ? "bg-roxo w-36" : "w-14 bg-black text-white"
              } `}
            >
              <i class="fa-solid fa-guitar"></i>
            </span>
          </nav>
          <div className="bg-roxo py-10 text-black">
            {top === "musica" && <TopTrendingMusicas />}
            {top === "artista" && <TopTrendingArtistas />}
            {top === "genero" && <TopTrendingGeneros />}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TopTrending;
