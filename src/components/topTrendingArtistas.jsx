import React from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { EffectCoverflow } from "swiper/modules";

const TopTrendingArtistas = () => {
  const bandData = [
    {
      imgUrl:
        "https://i.scdn.co/image/ab6761610000e5ebe9348cc01ff5d55971b22433",
      name: "The Beatles",
    },
    {
      imgUrl:
        "https://i.scdn.co/image/ab6761610000e5ebc8752dd511cda8c31e9daee8",
      name: "Fleetwood Mac",
    },
    {
      imgUrl:
        "https://i.scdn.co/image/ab6761610000e5eb3108834ef947e4747ed68bcf",
      name: "Belchior",
    },
    {
      imgUrl:
        "https://i.scdn.co/image/e69f71e2be4b67b82af90fb8e9d805715e0684fa",
      name: "Pink Floyd",
    },
    {
      imgUrl:
        "https://i.scdn.co/image/ab6761610000e5eb38fb1dfbcae1006ba225b4c3",
      name: "O Terno",
    },
  ];

  return (
    <div>
      <div
        id="computador"
        className="flex-col pt-10 px-10 gap-10 bg-roxo rounded-b-2xl hidden lg:flex"
      >
        <div className="flex flex-col gap-5">
          {bandData.map((band, index) => (
            <div key={index} className="flex gap-10">
              <img
                src={band.imgUrl}
                alt={band.name}
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
                <p className="font-bold text-3xl mt-7 ml-2">{band.name}</p>
              </motion.div>
            </div>
          ))}
        </div>
        <button className="bg-gray-100 py-3 px-16 rounded-xl mt-10 text-xl font-bold place-self-end hover:bg-gray-200">
          Veja mais
        </button>
      </div>

      {/* ----------------------------------------------- */}

      <div
        id="mobile"
        className="px-10 bg-roxo rounded-b-2xl lg:hidden flex flex-col items-center "
      >
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
          }}
          modules={[EffectCoverflow]}
          className="w-full h-full"
        >
          {bandData.map((band, index) => {
            return (
              <SwiperSlide key={index} className="flex flex-col">
                <p className="text-center text-3xl mt-2 text-white font-bold">
                  #{index + 1} - {band.name}
                </p>
                <img
                  src={band.imgUrl}
                  alt={band.name}
                  className="min-w-48 max-w-48 h-48 my-10 place-self-center"
                />
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

export default TopTrendingArtistas;
