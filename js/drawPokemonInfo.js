function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function getStatsArray(pokemon) {
  return pokemon.stats.map((element) => {
    return { name: element.stat.name, stat: element.base_stat };
  });
}

function drawPokemonInfo(url) {
  fetchData(url, (pokemon) => {
    const pokemon_stats = getStatsArray(pokemon);

    const info = `
    <div class = "info">
      <header class ="info-header">
        <h3>${capitalizeFirstLetter(pokemon.name)}</h3>
      </header>
      <div class="info-inner-container">
        <div class ="pokemon-imgs-container">
          <div class="big-pokemon-pic-container">
            <img class ="big-pokemon-pic" src = ${
              pokemon.sprites.other.dream_world.front_default
            } />
          </div>

          <ul class="pokemon-sprites-container">
            <li>
              <img src = ${pokemon.sprites.back_default} />
            </li>
            <li>
              <img src = ${pokemon.sprites.front_default} />
            </li>
          </ul>
        </div>

        <ul class = "pokemon-stats-list">
          <li>
            ${pokemon_stats[0].name}: ${pokemon_stats[0].stat}
          </li>
          <li>
            ${pokemon_stats[1].name}: ${pokemon_stats[1].stat}
          </li>
          <li>
            ${pokemon_stats[2].name}: ${pokemon_stats[2].stat}
          </li>
          <li>
            ${pokemon_stats[3].name}: ${pokemon_stats[3].stat}
          </li>
          <li>
            ${pokemon_stats[4].name}: ${pokemon_stats[4].stat}
          </li>
          <li>
            ${pokemon_stats[5].name}: ${pokemon_stats[5].stat}
          </li>
        </ul>
      </div>
      <button class = "favorite-btn"></button>
    </div>`;
    content_info.innerHTML = info;
    createFavoriteButton(pokemon.name);
  });
}

function addFavStyleBtn(favorite_btn) {
  favorite_btn.innerHTML = "Add To Favorites";
  favorite_btn.classList.add("blue-btn");
  favorite_btn.classList.remove("pink-btn");
}

function removeFavStyleBtn(favorite_btn) {
  favorite_btn.innerHTML = "Remove From Favorites";
  favorite_btn.classList.add("pink-btn");
  favorite_btn.classList.remove("blue-btn");
}

function createFavoriteButton(pokemon_name) {
  const favorite_btn = document.querySelector(".favorite-btn");

  favorite_btn.addEventListener("click", (e) => {
    if (favorite_pokemons.includes(pokemon_name)) {
      addFavStyleBtn(favorite_btn);
      removePokemon(pokemon_name);
    } else {
      removeFavStyleBtn(favorite_btn);
      saveNewPokemon(pokemon_name);
    }
  });
  if (favorite_pokemons.includes(pokemon_name)) {
    removeFavStyleBtn(favorite_btn);
  } else {
    addFavStyleBtn(favorite_btn);
  }
}
