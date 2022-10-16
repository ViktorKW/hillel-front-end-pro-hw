function loopChain(chain) {
  let result = chain.species.name + " "; //would have to delete " " at the end of result string !!!SIDE EFFECT!!!
  if (chain.evolves_to.length > 0) {
    result += loopChain(chain.evolves_to[0]);
  }
  return result;
}

function drawChainInfo(pokemon_names) {
  const container = document.createElement("div");
  container.classList.add(".chain-container");
  const chain_info = ` 
  <div class = "info">
    <header class ="info-header">
      <h3>${capitalizeFirstLetter(pokemon_names[0])}'s evolution chain</h3>
    </header>
    <div class="info-inner-container">
      <div class ="pokemon-imgs-container">
      </div>
    </div>
  </div>`;

  content_info.innerHTML = chain_info;

  const chain_pics = document.querySelector(".pokemon-imgs-container");

  let promise_array = pokemon_names.map((name) =>
    fetch(`${default_url}/pokemon/${name}`).then((res) => res.json())
  );
  console.log(promise_array);
  Promise.all(promise_array).then((pokemons) =>
    pokemons.forEach((pokemon) => {
      chain_pics.innerHTML += ` <div class="big-pokemon-pic-container">
          <h3 style="color:white; text-align: center">${pokemon.name}</h3>
          <img class ="big-pokemon-pic" src = ${pokemon.sprites.front_default} />
        </div>`;
    })
  );
}

// fetchData(`${default_url}/pokemon/${name}`, (pokemon) => {
//   chain_pics.innerHTML += ` <div class="big-pokemon-pic-container">
//       <h3 style="color:white; text-align: center">${pokemon.name}</h3>
//       <img class ="big-pokemon-pic" src = ${pokemon.sprites.front_default} />
//     </div>`;
// });
