const items_list = document.querySelector(".items-list");
const pokemon_info = document.querySelector(".pokemon-info");
const default_url = "https://pokeapi.co/api/v2";

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function drawPokemonInfo(url) {
  fetchData(url, (pokemon) => {
    pokemon_info.innerHTML = `
    <div class="pokemon-info">
      <header class ="pokemon-info-header">
        <h3>${capitalizeFirstLetter(pokemon.name)}</h3>
      </header>

      <div class ="pokemon-imgs-container">
        <div class="big_pokemon_pic-container">
          <img class ="big_pokemon_pic" src = ${
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
    </div>`;
  });
}

function createItem({ name, url }) {
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
  items_list.appendChild(li);
}

let page_index = 0;
let pokemons_count = 0;
const page_size = 10;

fetchData(`${default_url}/pokemon`, (data) => {
  pokemons_count = data.count;
});

const getPage = (page_index) =>
  fetchData(
    `${default_url}/pokemon/?offset=${
      page_index * page_size
    }&limit=${page_size}`,
    (data) => {
      items_list.innerHTML = "";
      data.results.forEach((element) => createItem(element));
    }
  );

getPage(page_index);

const prev_btn = document.querySelector(".prev-btn");
const next_btn = document.querySelector(".next-btn");

next_btn.addEventListener("click", () => {
  page_index += 1;
  getPage(page_index);

  if (page_index * page_size >= pokemons_count) {
    next_btn.disabled = true;
    prev_btn.disabled = false;
  } else {
    prev_btn.disabled = false;
  }
});

prev_btn.addEventListener("click", () => {
  page_index -= 1;
  getPage(page_index);

  if (page_index * page_size === 0) {
    next_btn.disabled = false;
    prev_btn.disabled = true;
  } else {
    next_btn.disabled = false;
  }
});
