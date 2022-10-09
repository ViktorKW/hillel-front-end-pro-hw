let page_index = 0;
let items_count = 0;
const page_size = 20;

fetchData(`${default_url}/pokemon`, (data) => {
  items_count = data.count;
});

function initPagination() {
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
}
