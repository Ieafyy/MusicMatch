function toggleMenu() {
  const filhos = $("#dropdown-ul").children();
  for (let i = 0; i < filhos.length; i += 1) {
    setTimeout(() => {
      $(filhos[i]).toggleClass("hide");
    }, 200 * i);
  }
}
