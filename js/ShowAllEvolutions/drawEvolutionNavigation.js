function createChainItem(chain) {
  const li = document.createElement("li");
  li.classList.add("item");

  const a = document.createElement("a");
  a.chain = JSON.stringify(chain);
  a.innerHTML = chain.species.name;
  a.href = "#";

  a.addEventListener("click", (e) => {
    const chain = JSON.parse(e.target.chain);
    const pokemon_names = loopChain(chain).slice(0, -1).split(" ");
    drawChainInfo(pokemon_names);
  });

  li.appendChild(a);
  return li;
}

function drawEvolutionNavigation(base_url) {
  fetchData(base_url, ({ results }) => {
    items_list.innerHTML = "";
    results.forEach(({ url }) => {
      fetchData(url, ({ chain }) => {
        items_list.appendChild(createChainItem(chain));
      });
    });
  });
}
