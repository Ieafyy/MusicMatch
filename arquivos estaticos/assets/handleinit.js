//aqui fica as

$(document).ready(async () => {
  let userLogado = "";

  await fetch("http://localhost:3000/actualUser/1")
    .then((response) => response.json())
    .then((data) => {
      if (data) userLogado = data;
    });

  if (userLogado) {
    console.log("logado");
    $("#cadbtn").hide();
    $("#userbtn").show();
    $("#userbtn").text(userLogado.username);
  } else {
    console.log("nao logado");
    $("#userbtn").hide();
    $("#cadbtn").show();
  }
});
