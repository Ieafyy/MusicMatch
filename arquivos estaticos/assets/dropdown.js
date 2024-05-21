function toggleMenu() {
  $("#dropdown-ul").css("display", "block");
  const filhos = $("#dropdown-ul").children();
  for (let i = 0; i < filhos.length; i += 1) {
    setTimeout(() => {
      $(filhos[i]).toggleClass("hide");
    }, 200 * i);
  }
}

$("#dropdown-ul li")
  .eq(2)
  .on("transitionend", function () {
    if ($(this).hasClass("hide")) $("#dropdown-ul").css("display", "none");
    else $("#dropdown-ul").css("display", "block");
  });
