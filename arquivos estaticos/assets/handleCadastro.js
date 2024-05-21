function sincronizarCampos(tipo, user, email, password, confirm, date) {
  if (tipo === "desktop") {
    $("#user-pc").val(user);
    $("#email-pc").val(email);
    $("#password-pc").val(password);
    $("#confirm-pc").val(confirm);
    $("#date-pc").val(date);
  } else if (tipo === "mobile") {
    $("#user-mobile").val(user);
    $("#email-mobile").val(email);
    $("#password-mobile").val(password);
    $("#confirm-mobile").val(confirm);
    $("#date-mobile").val(date);
  }
}

function conferirBase(username) {
  return fetch(`http://localhost:3000/users?username=${username}`)
    .then((response) => response.json())
    .then((data) => data.length > 0);
}

const handleClick = (disp) => {
  let userData = {
    tipo: "",
    username: "",
    email: "",
    password: "",
    bd: "",
  };

  let passwordConfirm = "";

  if (disp == "pc") {
    userData.tipo = $("input[name=tipo-pc]:checked").val();
    userData.username = $("#user-pc").val();
    userData.email = $("#email-pc").val();
    userData.password = $("#password-pc").val();
    passwordConfirm = $("#confirm-pc").val();
    userData.bd = $("#date-pc").val();
  } else {
    userData.tipo = $("input[name=tipo-mobile]:checked").val();
    userData.username = $("#user-mobile").val();
    userData.email = $("#email-mobile").val();
    userData.password = $("#password-mobile").val();
    passwordConfirm = $("#confirm-mobile").val();
    userData.bd = $("#date-mobile").val();
  }

  if (passwordConfirm != userData.password)
    alert("Senhas não correspondem! Por favor, digite novamente");
  else {
    conferirBase(userData.username).then((exists) => {
      if (exists) {
        alert("Usuário já cadastrado!");
      } else {
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userData),
        })
          .then((response) => response.json())
          .then(() => {
            fetch("http://localhost:3000/actualUser/1", {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(userData),
            })
              .then((response) => response.json())
              .then((data) => {
                console.log("Success:", data);
                console.log("oioioi");
                window.open("/arquivos%20estaticos/home.html");
              })
              .catch((error) => {
                console.error("Error:", error);
                alert("debug");
              });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  }
};

$(
  "input[name=tipo-pc], #user-pc, #email-pc, #password-pc, #confirm-pc, #date-pc"
).on("input", function () {
  const tipo = $("input[name=tipo-pc]:checked").val();
  const username = $("#user-pc").val();
  const email = $("#email-pc").val();
  const password = $("#password-pc").val();
  const confirm = $("#confirm-pc").val();
  const date = $("#date-pc").val();

  sincronizarCampos("mobile", username, email, password, confirm, date);

  if (
    tipo !== undefined &&
    username.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirm.trim() !== "" &&
    date.trim() !== ""
  ) {
    $("#btnCadastro-pc").prop("disabled", false);
    $("#btnCadastro-pc").removeClass("btn-disabled");
    console.log("permitido");
  } else {
    $("#btnCadastro-pc").prop("disabled", true);
    $("#btnCadastro-pc").addClass("btn-disabled");
    console.log("não permitido");
  }
});

$(
  "input[name=tipo-mobile], #user-mobile, #email-mobile, #password-mobile, #confirm-mobile, #date-mobile"
).on("input", function () {
  const tipo = $("input[name=tipo-mobile]:checked").val();
  const username = $("#user-mobile").val();
  const email = $("#email-mobile").val();
  const password = $("#password-mobile").val();
  const confirm = $("#confirm-mobile").val();
  const date = $("#date-mobile").val();

  sincronizarCampos("desktop", username, email, password, confirm, date);
  console.log(tipo);

  if (
    tipo !== undefined &&
    username.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirm.trim() !== "" &&
    date.trim() !== ""
  ) {
    $("#btnCadastro-mobile").prop("disabled", false);
    $("#btnCadastro-mobile").removeClass("btn-disabled");
    console.log("permitido");
  } else {
    $("#btnCadastro-mobile").prop("disabled", true);
    $("#btnCadastro-mobile").addClass("btn-disabled");
    console.log("não permitido");
  }
});
