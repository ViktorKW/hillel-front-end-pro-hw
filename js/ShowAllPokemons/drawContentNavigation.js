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
