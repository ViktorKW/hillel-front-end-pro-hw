const show_all_pokemons_btn = document.querySelector(".show-all-pokemons");

show_all_pokemons_btn.addEventListener("click", () => {
  navigation_title.innerHTML = "All Pokemons";

  drawContentNavigation(`${default_url}/pokemon/`);
  drawPokemonInfo(`${default_url}/pokemon/1`);

  initPagination();
});

const show_all_evolutions_btn = document.querySelector(".show-all-evolutions");

show_all_evolutions_btn.addEventListener("click", () => {
  navigation_title.innerHTML = "All Evolution Chains";
  drawContentNavigationEvolution(`${default_url}/evolution-chain/`);
  // drawContentNavigation(`${default_url}/evolution-chain/`);
  // drawPokemonInfo(`${default_url}/evolution-chain/1`);

  // initPagination();
});
