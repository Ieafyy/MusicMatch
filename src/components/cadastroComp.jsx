import React from "react";
import InputField from "./InputField";
import { motion } from "framer-motion";

const CadastroComp = ({ setState }) => {
  const cardStyle = {
    background: "rgba( 132, 28, 148, 0.45 )",
    boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
    backdropFilter: "blur(5px)",
    WebkitBackdropFilter: "blur(5px)",
    borderRadius: "10px",
  };

  return (
    <div>
      <div className="grid place-content-center">
        <motion.div
          style={cardStyle}
          className="p-20 flex flex-col justify-center rounded-xl my-20"
          animate={{
            opacity: [0, 1],
            translateY: [500, 0],
          }}
          transition={{
            duration: 1,
            ease: "backInOut",
          }}
        >
          <h1
            className="text-6xl text-center font-newAstro pb-10"
            style={{ textShadow: "2px 2px 5px #9333ea" }}
          >
            Cadastro
          </h1>
          <div className="flex flex-col gap-0">
            <p className="text-4xl font-bold">Sou: </p>
            <div className="text-2xl mt-3">
              <input
                type="radio"
                name="tipo"
                id="radioOuv"
                className="scale-125 mr-1"
              />
              <label htmlFor="radioOuv" className="mr-10">
                Ouvinte
              </label>
              <input
                type="radio"
                name="tipo"
                id="radioMus"
                className="scale-125 mr-1"
              />
              <label htmlFor="radioMus">Músico</label>
            </div>
            <p className="text-4xl font-bold mb-3 mt-8">Nome de usuário:</p>
            <InputField placeholder="User" type="text" icon="fas fa-user" />

            <p className="text-4xl font-bold mb-3 mt-8">Email:</p>
            <InputField
              placeholder="Email"
              type="email"
              icon="fas fa-envelope"
            />

            <p className="text-4xl font-bold mb-3 mt-8">Senha:</p>
            <div className="flex gap-10">
              <InputField
                placeholder="Senha"
                type="password"
                icon="fas fa-lock"
              />
              <InputField
                placeholder="Repetir a senha"
                type="password"
                icon="fas fa-lock"
              />
            </div>

            <p className="text-4xl font-bold mb-3 mt-8">Data de nascimento:</p>
            <InputField type="date" icon="fas fa-calendar" />
          </div>

          <button className="bg-roxo duration-300 text-white py-3 px-20 rounded-xl mt-10 text-xl font-bold place-self-center hover:bg-gray-100 hover:text-roxo">
            Cadastrar
          </button>
          <p
            className="text-xl underline mt-4 cursor-pointer text-center"
            onClick={() => setState("login")}
          >
            Já possui conta? Faça seu login aqui!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CadastroComp;
