function handleClickNavigation(action) {
  const navArtistaDesk = $("#nav-artista-desk");
  const navMusicaDesk = $("#nav-musica-desk");
  const navGeneroDesk = $("#nav-genero-desk");

  const selectorMusicaDesk = $("#selectorMusicaDesk");
  const selectorArtistaDesk = $("#selectorArtistaDesk");
  const selectorGeneroDesk = $("#selectorGeneroDesk");
  //------------------------------------------------------
  const navArtistaMobile = $("#nav-artista-mobile");
  const navMusicaMobile = $("#nav-musica-mobile");
  const navGeneroMobile = $("#nav-genero-mobile");

  const selectorMusicaMobile = $("#selectorMusicaMobile");
  const selectorArtistaMobile = $("#selectorArtistaMobile");
  const selectorGeneroMobile = $("#selectorGeneroMobile");

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

    case "musica-mobile":
      navMusicaMobile.removeClass("hidden").addClass("flex");
      navArtistaMobile.removeClass("flex").addClass("hidden");
      navGeneroMobile.removeClass("flex").addClass("hidden");
      //------------------------------------------------
      selectorMusicaMobile.removeClass("bg-black").addClass("bg-roxo w-64");
      selectorArtistaMobile.removeClass("bg-roxo w-64").addClass("bg-black");
      selectorGeneroMobile.removeClass("bg-roxo w-64").addClass("bg-black");
      break;

    case "artista-mobile":
      navArtistaMobile.removeClass("hidden").addClass("flex");
      navMusicaMobile.removeClass("flex").addClass("hidden");
      navGeneroMobile.removeClass("flex").addClass("hidden");
      //------------------------------------------------
      selectorArtistaMobile.removeClass("bg-black").addClass("bg-roxo w-64");
      selectorMusicaMobile.removeClass("bg-roxo w-64").addClass("bg-black");
      selectorGeneroMobile.removeClass("bg-roxo w-64").addClass("bg-black");
      break;

    case "genero-mobile":
      navGeneroMobile.removeClass("hidden").addClass("flex");
      navMusicaMobile.removeClass("flex").addClass("hidden");
      navArtistaMobile.removeClass("flex").addClass("hidden");
      //------------------------------------------------
      selectorGeneroMobile.removeClass("bg-black").addClass("bg-roxo w-64");
      selectorMusicaMobile.removeClass("bg-roxo w-64").addClass("bg-black");
      selectorArtistaMobile.removeClass("bg-roxo w-64").addClass("bg-black");
      break;
  }
}
