import React from "react";
import LoginComp from "./components/loginComp";
import CadastroComp from "./components/cadastroComp";
import Header from "./header";

const Login = () => {
  const [state, setState] = React.useState("login");
  return (
    <div className="max-h-screen">
      {state == "login" ? <LoginComp /> : <CadastroComp />}
    </div>
  );
};

export default Login;
