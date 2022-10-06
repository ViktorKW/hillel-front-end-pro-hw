const items_list = document.querySelector(".items-list");
const pokemon_info = document.querySelector(".pokemon-info");

function drawPokemonInfo(url) {
  fetch(url)
    .then((res) => res.json())
    .then((pokemon) => {
      pokemon_info.innerHTML = `
      <img src = ${pokemon.sprites.front_default} />`;
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
const page_size = 10;
var pokemons_count;

fetch("https://pokeapi.co/api/v2/pokemon")
  .then((res) => res.json())
  .then((data) => {
    pokemons_count = data.count;
    console.log(pokemons_count);
  });

const getPage = (page_index) =>
  fetch(
    `https://pokeapi.co/api/v2/pokemon/?offset=${
      page_index * page_size
    }&limit=${page_size}`
  )
    .then((res) => res.json())
    .then((data) => {
      items_list.innerHTML = "";
      data.results.forEach((element) => createItem(element));
    });

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

// function ShowAllPokemons() {

// }
