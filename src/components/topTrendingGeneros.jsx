import React from "react";

const TopTradingGeneros = () => {
  return (
    <div class="flex flex-col pt-10 px-10 gap-10 bg-purple-600 rounded-b-2xl">
      <div class="flex flex-col gap-5">
        <div class="flex ">
          <div class="bg-white pl-2 w-10/12">
            <p class="font-bold text-3xl py-5 ml-2">Rock</p>
          </div>
        </div>
        <div class="flex ">
          <div class="bg-white pl-2 w-9/12">
            <p class="font-bold text-3xl py-5 ml-2">MPB</p>
          </div>
        </div>
        <div class="flex ">
          <div class="bg-white pl-2 w-8/12">
            <p class="font-bold text-3xl py-5 ml-2">Indie</p>
          </div>
        </div>
        <div class="flex ">
          <div class="bg-white pl-2 w-7/12">
            <p class="font-bold text-3xl py-5 ml-2">Folk</p>
          </div>
        </div>
        <div class="flex ">
          <div class="bg-white pl-2 w-6/12">
            <p class="font-bold text-3xl py-5 ml-2">POP</p>
          </div>
        </div>
      </div>
      <button class="bg-gray-100 py-3 px-16 rounded-xl mt-10 text-xl font-bold place-self-end hover:bg-gray-200">
        Veja mais
      </button>
    </div>
  );
};

export default TopTradingGeneros;
