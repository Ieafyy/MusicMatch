import React from "react";
import LoginComp from "./components/loginComp";
import CadastroComp from "./components/cadastroComp";

const Login = () => {
  const [state, setState] = React.useState("login");
  return (
    <div className="overflow-hidden">
      {state == "login" ? (
        <LoginComp setState={setState} />
      ) : (
        <CadastroComp setState={setState} />
      )}
    </div>
  );
};

export default Login;
