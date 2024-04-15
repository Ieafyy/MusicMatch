import React from "react";

const TopTrandingArtistas = () => {
  return (
    <div className="flex flex-col pt-10 px-10 gap-10 bg-purple-600 rounded-b-2xl">
      <div className="flex flex-col gap-5">
        <div className="flex gap-10 ">
          <img
            src="https://i.scdn.co/image/ab6761610000e5ebe9348cc01ff5d55971b22433"
            alt=""
            className="w-24"
          />
          <div className="bg-white pl-2 w-10/12">
            <p className="font-bold text-3xl mt-7 ml-2">The Beatles</p>
          </div>
        </div>
        <div className="flex gap-10 ">
          <img
            src="https://i.scdn.co/image/ab6761610000e5ebc8752dd511cda8c31e9daee8"
            alt=""
            className="w-24"
          />
          <div className="bg-white pl-2 w-9/12">
            <p className="font-bold text-3xl mt-7 ml-2">Fleetwood Mac</p>
          </div>
        </div>
        <div className="flex gap-10 ">
          <img
            src="https://i.scdn.co/image/ab6761610000e5eb3108834ef947e4747ed68bcf"
            alt=""
            className="w-24"
          />
          <div className="bg-white pl-2 w-8/12">
            <p className="font-bold text-3xl mt-7 ml-2">Belchior</p>
          </div>
        </div>
        <div className="flex gap-10 ">
          <img
            src="https://i.scdn.co/image/e69f71e2be4b67b82af90fb8e9d805715e0684fa"
            alt=""
            className="w-24"
          />
          <div className="bg-white pl-2 w-7/12">
            <p className="font-bold text-3xl mt-7 ml-2">Pink Floyd</p>
          </div>
        </div>
        <div className="flex gap-10 ">
          <img
            src="https://i.scdn.co/image/ab6761610000e5eb38fb1dfbcae1006ba225b4c3"
            alt=""
            className="w-24"
          />
          <div className="bg-white pl-2 w-6/12">
            <p className="font-bold text-3xl mt-7 ml-2">O Terno</p>
          </div>
        </div>
      </div>
      <button className="bg-gray-100 py-3 px-16 rounded-xl mt-10 text-xl font-bold place-self-end hover:bg-gray-200">
        Veja mais
      </button>
    </div>
  );
};

export default TopTrandingArtistas;
