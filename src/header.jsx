import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex py-3 px-10 justify-between items-center bg-roxo">
      <a href="" className="font-bold text-3xl">
        <i className="fa-solid fa-bars"></i>
      </a>
      <Link className="flex mb-4 md:mb-0" to="/MusicMatch">
        <img
          className="rounded-full w-16 h-16"
          src="https://i.ibb.co/rckCKp5/logo-preta.png"
          alt="Image"
        />
      </Link>
      <input
        placeholder="Oque deseja escutar?"
        className="w-6/12 px-5 py-2 rounded-2xl"
        type="text"
        name=""
        id=""
      />
      <Link to="login" className="bg-gray-100 px-10 py-2 rounded-3xl font-bold">
        Login / Sign up
      </Link>
    </header>
  );
};

export default Header;
