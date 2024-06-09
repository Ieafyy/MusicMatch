function sincronizarCampos(
  tipo,
  user,
  email,
  password,
  confirm,
  date,
  nome,
  sobrenome,
  cidade,
  estado,
  bio
) {
  if (tipo === "desktop") {
    $("#user-pc").val(user);
    $("#email-pc").val(email);
    $("#password-pc").val(password);
    $("#confirm-pc").val(confirm);
    $("#date-pc").val(date);
    $("#nome-pc").val(nome);
    $("#sobrenome-pc").val(sobrenome);
    $("#cidade-pc").val(cidade);
    $("#estado-pc").val(estado);
    $("#bio-pc").val(bio);
  } else if (tipo === "mobile") {
    $("#user-mobile").val(user);
    $("#email-mobile").val(email);
    $("#password-mobile").val(password);
    $("#confirm-mobile").val(confirm);
    $("#date-mobile").val(date);
    $("#nome-mobile").val(nome);
    $("#sobrenome-mobile").val(sobrenome);
    $("#cidade-mobile").val(cidade);
    $("#estado-mobile").val(estado);
    $("#bio-mobile").val(bio);
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
    nome: "",
    sobrenome: "",
    cidade: "",
    estado: "",
    bio: "",
  };

  let passwordConfirm = "";

  if (disp == "pc") {
    userData.tipo = $("input[name=tipo-pc]:checked").val();
    userData.username = $("#user-pc").val();
    userData.email = $("#email-pc").val();
    userData.password = $("#password-pc").val();
    passwordConfirm = $("#confirm-pc").val();
    userData.bd = $("#date-pc").val();
    userData.nome = $("#nome-pc").val();
    userData.sobrenome = $("#sobrenome-pc").val();
    userData.cidade = $("#cidade-pc").val();
    userData.estado = $("#estado-pc").val();
    userData.bio = $("#bio-pc").val();
  } else {
    userData.tipo = $("input[name=tipo-mobile]:checked").val();
    userData.username = $("#user-mobile").val();
    userData.email = $("#email-mobile").val();
    userData.password = $("#password-mobile").val();
    passwordConfirm = $("#confirm-mobile").val();
    userData.bd = $("#date-mobile").val();
    userData.nome = $("#nome-mobile").val();
    userData.sobrenome = $("#sobrenome-mobile").val();
    userData.cidade = $("#cidade-mobile").val();
    userData.estado = $("#estado-mobile").val();
    userData.bio = $("#bio-mobile").val();
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
                console.log("sucesso");
                window.open("/arquivos%20estaticos/home.html");
              })
              .catch((error) => {
                console.error("Error:", error);
              });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      }
    });
  }
};

const login = async (disp) => {
  let allUsers = {};
  let user = "";
  let senha = "";
  await fetch("http://localhost:3000/users")
    .then((response) => response.json())
    .then((data) => {
      allUsers = data;
    });

  if (disp === "pc") {
    user = $("#lgn-user-pc").val();
    senha = $("#lgn-password-pc").val();
  } else {
    user = $("#lgn-user-mobile").val();
    senha = $("#lgn-password-mobile").val();
  }

  await allUsers.map((u) => {
    if (u.username === user && u.password === senha) {
      const userData = {
        tipo: u.tipo,
        username: u.username,
        email: u.email,
        password: u.password,
        bd: u.bd,
        nome: u.nome,
        sobrenome: u.sobrenome,
        cidade: u.cidade,
        estado: u.estado,
        bio: u.bio,
      };

      fetch("http://localhost:3000/actualUser/1", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })
        .then((response) => response.json())
        .then(() => {
          console.log("sucesso");
          achou = true;
          window.location.href = "/arquivos%20estaticos/home.html";
        })
        .catch((error) => {
          console.error("Error:", error);
        });
    }
  });
};

$(
  "input[name=tipo-pc], #user-pc, #email-pc, #password-pc, #confirm-pc, #date-pc, #nome-pc, #sobrenome-pc, #cidade-pc, #estado-pc, #bio-pc"
).on("input", function () {
  const tipo = $("input[name=tipo-pc]:checked").val();
  const username = $("#user-pc").val();
  const email = $("#email-pc").val();
  const password = $("#password-pc").val();
  const confirm = $("#confirm-pc").val();
  const date = $("#date-pc").val();
  const nome = $("#nome-pc").val();
  const sobrenome = $("#sobrenome-pc").val();
  const cidade = $("#cidade-pc").val();
  const estado = $("#estado-pc").val();
  const bio = $("#bio-pc").val();

  sincronizarCampos(
    "mobile",
    username,
    email,
    password,
    confirm,
    date,
    nome,
    sobrenome,
    cidade,
    estado,
    bio
  );

  if (
    tipo !== undefined &&
    username.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirm.trim() !== "" &&
    date.trim() !== "" &&
    nome.trim() !== "" &&
    sobrenome.trim() !== "" &&
    cidade.trim() !== "" &&
    estado.trim() !== "" &&
    bio.trim() !== ""
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
  "input[name=tipo-mobile], #user-mobile, #email-mobile, #password-mobile, #confirm-mobile, #date-mobile, nome-mobile, #sobrenome-mobile, #cidade-mobile, #estado-mobile, #bio-mobile"
).on("input", function () {
  const tipo = $("input[name=tipo-mobile]:checked").val();
  const username = $("#user-mobile").val();
  const email = $("#email-mobile").val();
  const password = $("#password-mobile").val();
  const confirm = $("#confirm-mobile").val();
  const date = $("#date-mobile").val();
  const nome = $("#nome-mobile").val();
  const sobrenome = $("#sobrenome-mobile").val();
  const cidade = $("#cidade-mobile").val();
  const estado = $("#estado-mobile").val();
  const bio = $("#bio-mobile").val();

  sincronizarCampos(
    "desktop",
    username,
    email,
    password,
    confirm,
    date,
    nome,
    sobrenome,
    cidade,
    estado,
    bio
  );

  if (
    tipo !== undefined &&
    username.trim() !== "" &&
    email.trim() !== "" &&
    password.trim() !== "" &&
    confirm.trim() !== "" &&
    date.trim() !== "" &&
    nome.trim() !== "" &&
    sobrenome.trim() !== "" &&
    cidade.trim() !== "" &&
    estado.trim() !== "" &&
    bio.trim() !== ""
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
