import React from "react";
import TopTrendingArtistas from "./topTrendingArtistas";
import TopTrendingMusicas from "./topTrendingMusicas";
import TopTrendingGeneros from "./topTrendingGeneros";

const TopTranding = () => {
  const [top, setTop] = React.useState("musica");

  return (
    <div>
      <h1
        className="text-5xl text-center"
        style={{ textShadow: "2px 2px 5px #9333ea" }}
      >
        Top Trending
      </h1>

      <div className="mt-10">
        <nav className="flex flex-row gap-10">
          <span
            onClick={() => setTop("musica")}
            className={`cursor-pointer px-10 py-3 font-bold rounded-t-2xl ${
              top === "musica" ? "bg-roxo" : "bg-black text-white"
            } `}
          >
            Musicas
          </span>
          <span
            onClick={() => setTop("artista")}
            className={`cursor-pointer px-10 py-3 font-bold rounded-t-2xl ${
              top === "artista" ? "bg-roxo" : "bg-black text-white"
            } `}
          >
            Artistas
          </span>
          <span
            onClick={() => setTop("genero")}
            className={`cursor-pointer px-10 py-3 font-bold rounded-t-2xl ${
              top === "genero" ? "bg-roxo" : "bg-black text-white"
            } `}
          >
            Generos
          </span>
        </nav>
        <div className="bg-roxo py-10 text-black">
          {top === "musica" && <TopTrendingMusicas />}
          {top === "artista" && <TopTrendingArtistas />}
          {top === "genero" && <TopTrendingGeneros />}
        </div>
      </div>
    </div>
  );
};

export default TopTranding;
