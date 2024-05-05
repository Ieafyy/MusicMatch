function toggle(content) {
  if (content == "login") {
    $("#loginCard").removeClass("hidden").addClass("block");
    $("#cadastroCard").removeClass("block").addClass("hidden");
    document.title = "login";
  } else if (content == "cadastro") {
    $("#cadastroCard").removeClass("hidden").addClass("block");
    $("#loginCard").removeClass("block").addClass("hidden");
    document.title = "cadastro";
  }
}
