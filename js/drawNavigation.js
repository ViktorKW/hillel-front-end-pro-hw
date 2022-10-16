function createNavItem({ name, url }, drawContentCallback) {
  const li = document.createElement("li");
  li.classList.add("item");

  const a = document.createElement("a");
  a.url = url;
  a.innerHTML = name;
  a.href = "#";

  a.addEventListener("click", (e) => {
    drawContentCallback(e.target.url);
  });

  li.appendChild(a);
  return li;
}

function drawNavigation(url, drawNavItemsCallback, drawContentCallback) {
  fetchData(url, (data) => {
    const items = data.results.map((element) =>
      drawNavItemsCallback(element, drawContentCallback)
    );

    items_list.innerHTML = "";
    items.forEach((item) => {
      items_list.appendChild(item);
    });
  });
}
