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
  return li;
}

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
let pokemons_count;
const page_size = 10;
let page_index = 0;

function drawContentNavigation(url) {
  fetchData(url, (data) => {
    const navigation = `
      <div class="content-navigation">
        <h3 class="title">All pokemons</h3>

        <hr />

        <ol class="items-list"></ol>
        
        <div class="pagination">
          <button class="prev-btn"disabled><- Prev</button>
          <button class="next-btn">Next -></button>
        </div>
    </div>
    `;

    content_navigation.innerHTML = navigation;

    const items_list = document.querySelector(".items-list");

    const items = data.results.map((element) => createItem(element));

    items.forEach((element) => {
      items_list.appendChild(element);
    });

    pokemons_count = data.count;
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
  });
}
