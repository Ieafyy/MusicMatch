function handleClickNavigation(action) {
  const navArtistaDesk = $("#nav-artista-desk");
  const navMusicaDesk = $("#nav-musica-desk");
  const navGeneroDesk = $("#nav-genero-desk");

  const selectorMusicaDesk = $("#selectorMusicaDesk");
  const selectorArtistaDesk = $("#selectorArtistaDesk");
  const selectorGeneroDesk = $("#selectorGeneroDesk");

  switch (action) {
    case "musica-desk":
      navMusicaDesk.removeClass("hidden").addClass("flex");
      navArtistaDesk.removeClass("flex").addClass("hidden");
      navGeneroDesk.removeClass("flex").addClass("hidden");
      //------------------------------------------------
      selectorMusicaDesk.removeClass("bg-black").addClass("bg-roxo w-64");
      selectorArtistaDesk.removeClass("bg-roxo w-64").addClass("bg-black");
      selectorGeneroDesk.removeClass("bg-roxo w-64").addClass("bg-black");
      break;

    case "artista-desk":
      navArtistaDesk.removeClass("hidden").addClass("flex");
      navMusicaDesk.removeClass("flex").addClass("hidden");
      navGeneroDesk.removeClass("flex").addClass("hidden");
      //------------------------------------------------
      selectorArtistaDesk.removeClass("bg-black").addClass("bg-roxo w-64");
      selectorMusicaDesk.removeClass("bg-roxo w-64").addClass("bg-black");
      selectorGeneroDesk.removeClass("bg-roxo w-64").addClass("bg-black");
      break;

    case "genero-desk":
      navGeneroDesk.removeClass("hidden").addClass("flex");
      navMusicaDesk.removeClass("flex").addClass("hidden");
      navArtistaDesk.removeClass("flex").addClass("hidden");
      //------------------------------------------------
      selectorGeneroDesk.removeClass("bg-black").addClass("bg-roxo w-64");
      selectorMusicaDesk.removeClass("bg-roxo w-64").addClass("bg-black");
      selectorArtistaDesk.removeClass("bg-roxo w-64").addClass("bg-black");
      break;
  }
}
