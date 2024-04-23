import React from "react";
import InputField from "./InputField";
import { motion } from "framer-motion";

const LoginComp = ({ setState }) => {
  return (
    <div>
      <div className="grid place-content-center">
        <motion.div
          className="bg-cinza p-20 flex flex-col justify-center rounded-xl mt-20"
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
            Login
          </h1>
          <InputField placeholder="User" type="text" icon="fas fa-user" />
          <InputField placeholder="Senha" type="password" icon="fas fa-lock" />
          <button className="bg-roxo text-white py-3 px-20 rounded-xl mt-10 text-xl font-bold place-self-center hover:bg-gray-200">
            Login
          </button>
          <p
            className="text-xl underline mt-4 text-white cursor-pointer"
            onClick={() => setState("cadastro")}
          >
            Ou se cadastre em nossa plataforma!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default LoginComp;
