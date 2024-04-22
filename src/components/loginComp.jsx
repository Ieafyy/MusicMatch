import React from "react";
import InputField from "./InputField";
import Footer from "../footer";

const LoginComp = () => {
  return (
    <div>
      <div className="flex justify-center mt-10">
        <div className="mt-10 w-4/12 bg-cinza flex flex-col py-10 rounded-xl">
          <h1
            className="text-6xl text-center font-newAstro pb-10"
            style={{ textShadow: "2px 2px 5px #9333ea" }}
          >
            Login
          </h1>
          <InputField
            placeholder="User"
            type="text"
            icon="fas fa-user"
            className="place-self-center"
          />
          <InputField
            placeholder="Senha"
            type="password"
            icon="fas fa-lock"
            className="place-self-center"
          />
          <button className="bg-roxo text-white py-3 px-16 rounded-xl mt-5 text-xl font-bold hover:bg-purple-700 place-self-center">
            Escutar agora
          </button>
          <p className="text-center mt-3 text-white underline text-xl cursor-pointer">
            Ou se cadastre em nossa plataforma!
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 w-screen">
        <Footer />
      </div>
    </div>
  );
};

export default LoginComp;
