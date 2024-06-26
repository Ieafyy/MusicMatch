import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Autoplay } from "swiper/modules";

const TopTrendingMusicas = () => {
  const musicData = [
    {
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b27334ef8f7d06cf2fc2146f420a",
      songName: "Lucy in the sky with diamonds",
      artist: "The Beatles - Sgt Peppers lonely Hearts Club Band",
    },
    {
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b273544730415c9d4bdb11f09fd2",
      songName: "O Bêbado e a Equilibrista",
      artist: "Elis Regina - Essa Mulher",
    },
    {
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b27389bd77a51491581af7b02c9a",
      songName: "Mar Fechado",
      artist: "Selvagens à procura da lei - Selvagens à procura da lei",
    },
    {
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b27399581550ef9746ca582bb3cc",
      songName: "Gimme Some Truth",
      artist: "John Lennon - Imagine",
    },
    {
      imgUrl:
        "https://i.scdn.co/image/ab67616d0000b27315784f5212050cf2e67f1935",
      songName: "Ho Hey",
      artist: "The Lumineers - The Lumineers",
    },
  ];

  return (
    <div>
      <div
        id="computador"
        className=" flex-col pt-10 px-10 gap-10 bg-roxo rounded-b-2xl hidden lg:flex"
      >
        <div className="flex flex-col gap-5">
          {musicData.map((music, index) => (
            <div key={index} className="flex gap-10">
              <img
                src={music.imgUrl}
                alt={music.songName}
                className="min-w-24 max-w-24 h-24"
              />
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
                <p className="font-bold text-xl mt-5">{music.songName}</p>
                <p className="text-lg">{music.artist}</p>
              </motion.div>
            </div>
          ))}
        </div>
        <button className="bg-gray-100 py-3 px-16 rounded-xl mt-10 text-xl font-bold place-self-end hover:bg-gray-200">
          Veja mais
        </button>
      </div>

      {/* ------------------------------------------------- */}

      <div className="px-10 bg-roxo rounded-b-2xl lg:hidden flex flex-col items-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          modules={[EffectCoverflow, Autoplay]}
          className="w-full h-full"
        >
          {musicData.map((music, index) => {
            return (
              <SwiperSlide key={index} className="flex flex-col">
                <p className="text-center text-3xl mt-2 text-white font-bold">
                  #{index + 1} - {music.songName}
                </p>
                <img
                  src={music.imgUrl}
                  alt={music.songName}
                  className="min-w-48 max-w-48 h-48 my-10 place-self-center"
                />
                <p className="text-center text-l mt-2 text-white">
                  {music.artist}
                </p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className="bg-gray-100 py-3 px-16 rounded-xl mt-5 text-xl font-bold hover:bg-gray-200">
          Veja mais
        </button>
      </div>
    </div>
  );
};

export default TopTrendingMusicas;
