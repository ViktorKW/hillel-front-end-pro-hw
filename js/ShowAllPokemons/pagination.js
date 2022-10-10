let page_index = 0;
let items_count = 0;
const page_size = 20;

function createPrevBtn() {
  const prev_btn = document.createElement("button");
  prev_btn.classList.add(".prev-btn");
  prev_btn.innerHTML = "<- Prev";
  prev_btn.disabled = true;

  return prev_btn;
}

function createNextBtn() {
  const next_btn = document.createElement("button");
  next_btn.classList.add(".next-btn");
  next_btn.innerHTML = "Next ->";

  return next_btn;
}

function initPagination() {
  page_index = 0;
  fetchData(`${default_url}/pokemon`, (data) => {
    items_count = data.count;
  });

  const prev_btn = createPrevBtn();
  const next_btn = createNextBtn();

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

  pagination.innerHTML = "";
  pagination.appendChild(prev_btn);
  pagination.appendChild(next_btn);
}
