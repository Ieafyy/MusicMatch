import React from "react";

const TopTrendingMusicas = () => {
  return (
    <div className="flex flex-col pt-10 px-10 gap-10 bg-roxo rounded-b-2xl">
      <div className="flex flex-col gap-5">
        <div className="flex gap-10">
          <img
            src="https://i.scdn.co/image/ab67616d0000b27334ef8f7d06cf2fc2146f420a"
            alt=""
            className="w-24"
          />
          <div className="bg-white pr-96 pl-2">
            <p className="font-bold text-xl mt-5">
              Lucy in the sky with diamonds
            </p>
            <p className="text-lg">
              The Beatles - Sgt Peppers lonely Hearts Club Band
            </p>
          </div>
        </div>
        <div className="flex gap-10 ">
          <img
            src="https://i.scdn.co/image/ab67616d0000b273544730415c9d4bdb11f09fd2"
            alt=""
            className="w-24"
          />
          <div className="bg-white pr-96 pl-2">
            <p className="font-bold text-xl mt-5">O Bêbado e a Equilibrista</p>
            <p className="text-lg">Elis Regina - Essa Mulher</p>
          </div>
        </div>
        <div className="flex gap-10 ">
          <img
            src="https://i.scdn.co/image/ab67616d0000b27389bd77a51491581af7b02c9a"
            alt=""
            className="w-24"
          />
          <div className="bg-white pr-10 pl-2">
            <p className="font-bold text-xl mt-5">Mar Fechado</p>
            <p className="text-lg">
              Selvagens à procura da lei - Selvagens à procura da lei
            </p>
          </div>
        </div>
        <div className="flex gap-10 ">
          <img
            src="https://i.scdn.co/image/ab67616d0000b27399581550ef9746ca582bb3cc"
            alt=""
            className="w-24"
          />
          <div className="bg-white pr-52 pl-2">
            <p className="font-bold text-xl mt-5">Gimme Some Truth</p>
            <p className="text-lg">John Lennon - Imagine</p>
          </div>
        </div>
        <div className="flex gap-10 ">
          <img
            src="https://i.scdn.co/image/ab67616d0000b27315784f5212050cf2e67f1935"
            alt=""
            className="w-24"
          />
          <div className="bg-white pr-10 pl-2">
            <p className="font-bold text-xl mt-5">Ho Hey</p>
            <p className="text-lg">The Lumineers - The Lummineers</p>
          </div>
        </div>
      </div>
      <button className="bg-gray-100 py-3 px-16 rounded-xl mt-10 text-xl font-bold place-self-end hover:bg-gray-200">
        Veja mais
      </button>
    </div>
  );
};

export default TopTrendingMusicas;
