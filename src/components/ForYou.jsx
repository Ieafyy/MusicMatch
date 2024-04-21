import React from "react";
import { motion, animate } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "./forYou.css";

const ForYou = () => {
  const [carouselState, setCarouselState] = React.useState(0);

  const musicData = [
    {
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b273c32340c5ed875c13a0a7173a",
      name: "Pegando Leve",
      artist: "O Terno",
      genre: "Indie Rock",
    },
    {
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b27334ef8f7d06cf2fc2146f420a",
      name: "Getting Better",
      artist: "The Beatles",
      genre: "Classic Rock",
    },
    {
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b273544730415c9d4bdb11f09fd2",
      name: "O bêbado e a Equilibrista",
      artist: "Elis Regina",
      genre: "MPB",
    },
    {
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b27315784f5212050cf2e67f1935",
      name: "Ho Hey",
      artist: "The Lumineers",
      genre: "Folk Rock",
    },
    {
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b27389bd77a51491581af7b02c9a",
      name: "Juventude Solitude",
      artist: "Selvagens a Procura de Lei",
      genre: "Indie Rock",
    },
  ];

  React.useEffect(() => {
    animate(".card", { opacity: [0, 1] }, { duration: 0.5, ease: "easeOut" });
  }, [carouselState]);

  return (
    <div>
      <motion.div
        id="computador"
        className="my-10 hidden lg:block"
        initial={{ opacity: 0, translateY: 500 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          ease: "anticipate",
        }}
        viewport={{ once: true }}
      >
        <h1
          className="text-5xl text-center mb-10 font-newAstro"
          style={{ textShadow: "2px 2px 5px #9333ea" }}
        >
          For You
        </h1>
        <div className="bg-gray-300 flex py-10 px-10 gap-10 rounded-2xl border border-black shadow-2xl">
          <img
            src={musicData[carouselState].imgUrl}
            alt="musicData[carouselState].name"
            className="w-96 h-96 card"
          />
          <div className="flex flex-col w-full h-full">
            <p className="font-bold text-4xl mb-5">
              {musicData[carouselState].name}
            </p>
            <p className="text-gray-600 text-xl">
              {musicData[carouselState].artist}
            </p>
            <p className="text-gray-600 text-xl">
              ({musicData[carouselState].genre})
            </p>
            <div className="flex mt-10 text-2xl">
              {[...Array(5)].map((_, i) => (
                <i
                  key={i}
                  className={`fa-solid fa-star${i < 4 ? "" : " fa-regular"}`}
                ></i>
              ))}
            </div>
            <button className="bg-roxo text-white py-3 px-16 rounded-xl mt-36 text-xl font-bold place-self-end hover:bg-purple-700">
              Escutar agora
            </button>
          </div>
        </div>

        <div className="text-xl mt-10 text-center text-gray-600">
          {musicData.map((_, index) => (
            <i
              key={index}
              className={`fa-circle fa-regular ml-2 cursor-pointer ${
                carouselState === index ? "text-roxo fa-solid" : ""
              } `}
              onClick={() => setCarouselState(index)}
            ></i>
          ))}
        </div>
      </motion.div>

      {/* ------------------------------------------- */}

      <motion.div
        id="mobile"
        className="my-10 lg:hidden block"
        initial={{ opacity: 0, translateY: 500 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{
          duration: 1,
          ease: "anticipate",
        }}
        viewport={{ once: true }}
      >
        <h1
          className="text-5xl text-center mb-10 font-newAstro"
          style={{ textShadow: "2px 2px 5px #9333ea" }}
        >
          For You
        </h1>
        <div className="bg-gray-300 py-10 px-10 gap-10 rounded-2xl border border-black shadow-2xl">
          <Swiper
            className="pb-16"
            spaceBetween={50}
            modules={[Pagination, Autoplay]}
            pagination={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
          >
            {musicData.map((music, index) => {
              return (
                <SwiperSlide
                  className="items-center forYou flex flex-col mt-10"
                  key={index}
                >
                  <img src={music.imgUrl} alt={music.name} className="w-48" />
                  <div className="text-center mt-5">
                    <p className="font-bold text-3xl">{music.name}</p>
                    <p className="text-cinza">
                      {music.artist} | {music.genre}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
          <button className="bg-roxo text-white py-3 px-16 rounded-xl mt-5 text-xl font-bold place-self-end hover:bg-purple-700">
            Escutar agora
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default ForYou;
