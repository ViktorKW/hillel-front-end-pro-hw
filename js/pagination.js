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
