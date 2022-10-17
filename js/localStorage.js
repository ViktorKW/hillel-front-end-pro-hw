let favorite_pokemons = [];

function removePokemon(pokemon_name) {
  favorite_pokemons.splice(favorite_pokemons.indexOf(pokemon_name), 1);
  updateLocalStorage();
}

function saveNewPokemon(pokemon_name) {
  favorite_pokemons.push(pokemon_name);
  updateLocalStorage();
}

function updateLocalStorage() {
  localStorage.setItem("pokemons", JSON.stringify(favorite_pokemons));
}

function getLocalStorage() {
  let ls = localStorage.getItem("pokemons");
  if (ls !== null) {
    favorite_pokemons = JSON.parse(ls);
  }
}
