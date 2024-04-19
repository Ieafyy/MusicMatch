import React from "react";

const TopTradingGeneros = () => {
  return (
    <div className="flex flex-col pt-10 px-10 gap-10 bg-roxo rounded-b-2xl">
      <div className="flex flex-col gap-5">
        <div className="flex ">
          <div className="bg-white pl-2 w-10/12">
            <p className="font-bold text-3xl py-5 ml-2">Rock</p>
          </div>
        </div>
        <div className="flex ">
          <div className="bg-white pl-2 w-9/12">
            <p className="font-bold text-3xl py-5 ml-2">MPB</p>
          </div>
        </div>
        <div className="flex ">
          <div className="bg-white pl-2 w-8/12">
            <p className="font-bold text-3xl py-5 ml-2">Indie</p>
          </div>
        </div>
        <div className="flex ">
          <div className="bg-white pl-2 w-7/12">
            <p className="font-bold text-3xl py-5 ml-2">Folk</p>
          </div>
        </div>
        <div className="flex ">
          <div className="bg-white pl-2 w-6/12">
            <p className="font-bold text-3xl py-5 ml-2">POP</p>
          </div>
        </div>
      </div>
      <button className="bg-gray-100 py-3 px-16 rounded-xl mt-10 text-xl font-bold place-self-end hover:bg-gray-200">
        Veja mais
      </button>
    </div>
  );
};

export default TopTradingGeneros;
