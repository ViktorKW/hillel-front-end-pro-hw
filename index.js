// const show_all_pokemons_btn = document.querySelector(".show-all-pokemons");

// show_all_pokemons_btn.addEventListener("click", () => {
//   navigation_title.innerHTML = "All Pokemons";

//   drawContentNavigation(`${default_url}/pokemon/`);
//   drawPokemonInfo(`${default_url}/pokemon/1`);

//   initPagination();
// });

// const show_all_evolutions_btn = document.querySelector(".show-all-evolutions");

// show_all_evolutions_btn.addEventListener("click", () => {
//   navigation_title.innerHTML = "All Evolution Chains";
//   drawContentNavigationEvolution(`${default_url}/evolution-chain/`);
//   // drawContentNavigation(`${default_url}/evolution-chain/`);
//   // drawPokemonInfo(`${default_url}/evolution-chain/1`);

//   // initPagination();
// });

// async function getPokemon(url) {
//   const res = await fetch(url);
//   const data = await res.json();
//   console.log(data);
//   data.results.forEach((element) => {
//     const getChains = async (url) => {
//       const res = await fetch(element.url);
//       const obj = await res.json();

//       const cycleChains = async (obj) => {
//         // console.log(obj.chain.evolves_to);
//         if (obj.chain.evolves_to.length > 0) {
//           await cycleChains(obj.chain.evolves_to[0]);
//         } else {
//           return obj.chain.species.name + ",";
//         }
//       };

//       const mystrings = await cycleChains(obj);
//       console.log(mystrings);
//     };
//     getChains();
//   });
// }

const fetchData = (url, callback) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      callback(data);
    });

fetchData("https://pokeapi.co/api/v2/pokemon/bulbasaur", () => {});

function getPokemon(base_url) {
  fetchData(base_url, ({ results }) => {
    results.forEach(({ url }) => {
      fetchData(url, ({ chain }) => {
        const loop = (obj) => {
          console.log("Looping in", obj.species.name);
          let result = obj.species.name + " ";
          if (obj.evolves_to.length > 0) {
            result += loop(obj.evolves_to[0]);
          }
          return result;
        };

        console.log(loop(chain));
      });
    });
  });
}

getPokemon("https://pokeapi.co/api/v2/evolution-chain");
