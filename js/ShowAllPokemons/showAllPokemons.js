function initAllPokemonList() {
  navigation_title.innerHTML = "All Pokemons";

  drawContentNavigation(`${default_url}/pokemon/`);
  drawPokemonInfo(`${default_url}/pokemon/1`);

  initPagination();
}

initAllPokemonList();
