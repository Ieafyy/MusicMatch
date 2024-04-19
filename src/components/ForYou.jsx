import React from "react";

const ForYou = () => {
  const [carrosselState, setCarrouselState] = React.useState(0);
  let imgSrc = [
    "https://i.scdn.co/image/ab67616d0000b273c32340c5ed875c13a0a7173a",
    "https://i.scdn.co/image/ab67616d0000b27334ef8f7d06cf2fc2146f420a",
    "https://i.scdn.co/image/ab67616d0000b273544730415c9d4bdb11f09fd2",
    "https://i.scdn.co/image/ab67616d0000b27315784f5212050cf2e67f1935",
    "https://i.scdn.co/image/ab67616d0000b27389bd77a51491581af7b02c9a",
  ];
  let imgNames = [
    "Pegando Leve",
    "Getting Better",
    "O bêbado e a Equilibrista",
    "Ho Hey",
    "Juventude Solitude",
  ];
  let imgArtists = [
    "O Terno",
    "The Beatles",
    "Elis Regina",
    "The Lumineers",
    "Selvagens a Procura de Lei",
  ];
  let imgGen = ["Indie Rock", "Classic Rock", "MPB", "Folk Rock", "Indie Rock"];

  return (
    <div className="my-10">
      <h1
        className="text-5xl text-center mb-10"
        style={{ textShadow: "2px 2px 5px #9333ea" }}
      >
        For You
      </h1>
      <div className="bg-gray-300 flex py-10 px-10 gap-10 rounded-2xl border border-black shadow-2xl">
        <img src={imgSrc[carrosselState]} alt="" className="w-96 h-96" />
        <div className="flex flex-col w-full h-full">
          <p className="font-bold text-4xl mb-5">{imgNames[carrosselState]}</p>
          <p className="text-gray-600 text-xl">{imgArtists[carrosselState]}</p>
          <p className="text-gray-600 text-xl">({imgGen[carrosselState]})</p>
          <div className="flex mt-10 text-2xl">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-regular fa-star"></i>
          </div>
          <button className="bg-roxo text-white py-3 px-16 rounded-xl mt-36 text-xl font-bold place-self-end hover:bg-purple-700">
            Escutar agora
          </button>
        </div>
      </div>

      <div className="text-xl mt-10 text-center text-gray-600">
        <i
          className={`fa-circle fa-regular ml-2 cursor-pointer ${
            carrosselState == 0 ? "text-roxo fa-solid" : ""
          } `}
          onClick={() => setCarrouselState(0)}
        ></i>
        <i
          className={`fa-circle fa-regular ml-2 cursor-pointer ${
            carrosselState == 1 ? "text-roxo fa-solid" : ""
          } `}
          onClick={() => setCarrouselState(1)}
        ></i>
        <i
          className={`fa-circle fa-regular ml-2 cursor-pointer ${
            carrosselState == 2 ? "text-roxo fa-solid" : ""
          } `}
          onClick={() => setCarrouselState(2)}
        ></i>
        <i
          className={`fa-circle fa-regular ml-2 cursor-pointer ${
            carrosselState == 3 ? "text-roxo fa-solid" : ""
          } `}
          onClick={() => setCarrouselState(3)}
        ></i>
        <i
          className={`fa-circle fa-regular ml-2 cursor-pointer ${
            carrosselState == 4 ? "text-roxo fa-solid" : ""
          } `}
          onClick={() => setCarrouselState(4)}
        ></i>
      </div>
    </div>
  );
};

export default ForYou;
