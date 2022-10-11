function createPokemonItem({ name, url }) {
  const li = document.createElement("li");
  li.classList.add("item");

  const a = document.createElement("a");
  a.url = url;
  a.innerHTML = name;
  a.href = "#";

  a.addEventListener("click", (e) => {
    drawPokemonInfo(e.target.url);
  });

  li.appendChild(a);
  return li;
}

function drawContentNavigation(url) {
  fetchData(url, (data) => {
    const items = data.results.map((element) => createPokemonItem(element));

    items_list.innerHTML = "";
    items.forEach((item) => {
      items_list.appendChild(item);
    });
  });
}

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

  pokemon_names.forEach((name) => {
    `
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

        </div>

      </div>
    </div>`;
  });
}

function createChainItem(chain) {
  const li = document.createElement("li");
  li.classList.add("item");

  const a = document.createElement("a");
  a.chain = JSON.stringify(chain);
  a.innerHTML = chain.species.name;
  a.href = "#";

  a.addEventListener("click", (e) => {
    const chain = JSON.parse(e.target.chain);
    const pokemon_names = loopChain(chain).slice(0, -1).split(" "); // had to remove last element from loopChain(chain) result string... Bad coding practise...
  });

  li.appendChild(a);
  return li;
}

function drawContentNavigationEvolution(base_url) {
  fetchData(base_url, ({ results }) => {
    items_list.innerHTML = "";
    results.forEach(({ url }) => {
      fetchData(url, ({ chain }) => {
        // console.log("work ", url, " ples ", chain.species.name);
        items_list.appendChild(createChainItem(chain));
      });
    });
  });
}

// function getPokemon(base_url) {
//   fetchData(base_url, ({ results }) => {
//     results.forEach(({ url }) => {
//       fetchData(url, ({ chain }) => {
//         const loop = (obj) => {
//           console.log("Looping in", obj.species.name);
//           let result = obj.species.name + " ";
//           if (obj.evolves_to.length > 0) {
//             result += loop(obj.evolves_to[0]);
//           }
//           return result;
//         };

//         console.log(loop(chain));
//       });
//     });
//   });
// }

// getPokemon("https://pokeapi.co/api/v2/evolution-chain");
