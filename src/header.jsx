import React from "react";
import { Link } from "react-router-dom";
import ModalLateral from "./components/modalLateral";

const Header = () => {
  const [modalLateral, setModalLateral] = React.useState(false);

  return (
    <div className="w-screen z-10 sticky top-0 ">
      <header className="flex py-3 px-10 justify-between items-center bg-roxo">
        <span
          className="font-bold text-3xl cursor-pointer"
          onClick={() => setModalLateral(modalLateral ? false : true)}
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
          className="w-6/12 px-5 py-2 rounded-2xl"
          type="text"
          name=""
          id=""
        />
        <Link
          to="login"
          className="bg-gray-100 px-10 py-2 rounded-3xl font-bold"
        >
          Login / Sign up
        </Link>
      </header>
      <ModalLateral showModal={modalLateral} />
    </div>
  );
};

export default Header;
