const show_all_pokemons_btn = document.querySelector(".show-all-pokemons");

show_all_pokemons_btn.addEventListener("click", () => {
  navigation_title.innerHTML = "All Pokemons";

  drawContentNavigation(`${default_url}/pokemon/`);
  drawPokemonInfo(`${default_url}/pokemon/1`);

  initPagination(keys[0]); //wanted to do keys["pokemon"] but didn't work
});

const show_all_evolutions_btn = document.querySelector(".show-all-evolutions");

show_all_evolutions_btn.addEventListener("click", () => {
  navigation_title.innerHTML = "All Evolution Chains";
  drawContentNavigationEvolution(`${default_url}/evolution-chain/`);
  drawChainInfo(["bulbasaur", "ivysaur", "venusaur"]);

  initPagination(keys[1]); //wanted to do keys["evolution-chain"] but didn't work
});

const show_all_regions_btn = document.querySelector(".show-all-regions");

show_all_regions_btn.addEventListener("click", () => {
  navigation_title.innerHTML = "All regions";
  drawContentNavigation(`${default_url}/region/`);
  content_info.innerHTML = "Coming Soon!";
  pagination.innerHTML = "";
});

navigation_title.innerHTML = "All Pokemons";

drawContentNavigation(`${default_url}/pokemon/`);
drawPokemonInfo(`${default_url}/pokemon/1`);

initPagination(keys[0]); //wanted to do keys["pokemon"] but didn't work

fetchData("https://pokeapi.co/api/v2/type/1", () => {});
// fetchData("https://pokeapi.co/api/v2/region", () => {});
// fetchData("https://pokeapi.co/api/v2/region/1", () => {});
