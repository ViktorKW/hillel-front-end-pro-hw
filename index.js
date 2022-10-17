const show_all_pokemons_btn = document.querySelector(".show-all-pokemons");

function showPokemons() {
  navigation_title.innerHTML = "All Pokemons";

  drawNavigation(`${default_url}/pokemon/`, createNavItem, drawPokemonInfo);
  drawPokemonInfo(`${default_url}/pokemon/1`);

  initPagination("pokemon");
}

show_all_pokemons_btn.addEventListener("click", () => {
  showPokemons();
});

const show_all_evolutions_btn = document.querySelector(".show-all-evolutions");

show_all_evolutions_btn.addEventListener("click", () => {
  navigation_title.innerHTML = "All Evolution Chains";
  drawEvolutionNavigation(`${default_url}/evolution-chain/`);
  drawChainInfo(["bulbasaur", "ivysaur", "venusaur"]);

  initPagination("evolution-chain");
});

const show_all_regions_btn = document.querySelector(".show-all-regions");

show_all_regions_btn.addEventListener("click", () => {
  navigation_title.innerHTML = "All regions";
  content_info.innerHTML = `Region Description Coming Soon!`;
  drawNavigation(`${default_url}/region/`, createNavItem, (url) => {
    content_info.innerHTML = `Region Description Coming Soon!`;
  });

  pagination.innerHTML = "";
});

const show_all_types_btn = document.querySelector(".show-all-types");

function showAllTypes(url) {
  content_info.innerHTML = "";
  fetchData(url, ({ pokemon }) => {
    pokemon.forEach((item, i) => {
      content_info.innerHTML += `<h4>${i}) ${item.pokemon.name}</h4>`;
    });
  });
}

show_all_types_btn.addEventListener("click", () => {
  navigation_title.innerHTML = "All types";
  content_info.innerHTML = "";
  showAllTypes(`${default_url}/type/1`);
  drawNavigation(`${default_url}/type/`, createNavItem, showAllTypes);

  pagination.innerHTML = "";
});

getLocalStorage();
showPokemons();
