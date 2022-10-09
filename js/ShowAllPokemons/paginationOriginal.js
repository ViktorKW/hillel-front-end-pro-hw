// let page_index = 0;
// let pokemons_count = 0;
// const page_size = 10;

// fetchData(`${default_url}/pokemon`, (data) => {
//   pokemons_count = data.count;
// });

// const getPage = (page_index) =>
//   fetchData(
//     `${default_url}/pokemon/?offset=${
//       page_index * page_size
//     }&limit=${page_size}`,
//     (data) => {
//       items_list.innerHTML = "";
//       data.results.forEach((element) => createItem(element));
//     }
//   );

// getPage(page_index);

// const prev_btn = document.querySelector(".prev-btn");
// const next_btn = document.querySelector(".next-btn");

// next_btn.addEventListener("click", () => {
//   page_index += 1;
//   getPage(page_index);

//   if (page_index * page_size >= pokemons_count) {
//     next_btn.disabled = true;
//     prev_btn.disabled = false;
//   } else {
//     prev_btn.disabled = false;
//   }
// });

// prev_btn.addEventListener("click", () => {
//   page_index -= 1;
//   getPage(page_index);

//   if (page_index * page_size === 0) {
//     next_btn.disabled = false;
//     prev_btn.disabled = true;
//   } else {
//     next_btn.disabled = false;
//   }
// });

//new pagination
let page_index = 0;
let items_count = getItemCount(`${default_url}/pokemon`);
const page_size = 20;

function getItemCount(url) {
  let _items_count = 0;
  fetchData(url, (data) => {
    _items_count = data.count;
  });
  return _items_count;
}

function createPrevBtn() {
  const prev_btn = document.createElement("button");
  prev_btn.classList.add(".prev-btn");
  prev_btn.innerHTML = "<- Prev";
  prev_btn.disabled = true;

  prev_btn.addEventListener("click", () => {
    page_index -= 1;
    drawContentNavigation(
      `${default_url}/pokemon/?offset=${
        page_index * page_size
      }&limit=${page_size}`
    );

    if (page_index * page_size === 0) {
      next_btn.disabled = false;
      prev_btn.disabled = true;
    } else {
      next_btn.disabled = false;
    }
  });

  return prev_btn;
}

function createNextBtn() {
  const next_btn = document.createElement("button");
  next_btn.classList.add(".next-btn");
  next_btn.innerHTML = "Next ->";

  next_btn.addEventListener("click", () => {
    page_index += 1;
    drawContentNavigation(
      `${default_url}/pokemon/?offset=${
        page_index * page_size
      }&limit=${page_size}`
    );

    if (page_index * page_size >= items_count) {
      next_btn.disabled = true;
      prev_btn.disabled = false;
    } else {
      prev_btn.disabled = false;
    }
  });

  return next_btn;
}

function initPagination() {
  const prev_btn = createPrevBtn();
  const next_btn = createNextBtn();

  pagination.appendChild(prev_btn);
  pagination.appendChild(next_btn);
}
