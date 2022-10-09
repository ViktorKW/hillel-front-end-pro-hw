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
    </div>`;

    content_info.innerHTML = info;
  });
}
