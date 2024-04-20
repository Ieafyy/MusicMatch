import React from "react";
import { Link } from "react-router-dom";
import ModalLateral from "./components/modalLateral";

const Header = () => {
  const [modalLateral, setModalLateral] = React.useState(false);
  const [animating, setAnimating] = React.useState(false);

  return (
    <div className="w-screen z-10 sticky top-0 bg-roxo">
      <header className="flex flex-wrap pt-5 lg:py-3 px-3 lg:px-10 lg:justify-between gap-5 items-center ">
        <span
          className="font-bold text-3xl cursor-pointer"
          onClick={() => {
            if (!animating) setModalLateral(modalLateral ? false : true);
          }}
        >
          <i className="fa-solid fa-bars"></i>
        </span>
        <Link className="flex mb-4 md:mb-0" to="/MusicMatch">
          <img
            className="rounded-full w-16 h-16"
            src="https://i.ibb.co/rckCKp5/logo-preta.png"
            alt="Image"
          />
        </Link>
        <input
          placeholder="Oque deseja escutar?"
          className="w-6/12 px-5 py-2 rounded-2xl hidden lg:block"
          type="text"
          name=""
          id=""
        />
        <Link
          to="login"
          className="bg-gray-100 px-2 lg:px-10 py-2 rounded-3xl font-bold text-end absolute lg:static top-10 right-10"
        >
          Login / Sign up
        </Link>
      </header>
      <div className="w-screen flex lg:hidden justify-center pb-5">
        <input
          placeholder="Oque deseja escutar?"
          className="w-10/12 px-10 py-2 rounded-2xl"
          type="text"
          name=""
          id=""
        />
      </div>
      <ModalLateral showModal={modalLateral} setAnimating={setAnimating} />
    </div>
  );
};

export default Header;
