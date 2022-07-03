const btn_prev = document.querySelector(".btn-prev-slider");
const btn_next = document.querySelector(".btn-next-slider");
const slider_viewport = document.querySelector(".slider-viewport");
const slider_list_transform = document.querySelector(".slider-list-transform");
const slider_images_list = document.querySelectorAll(
  ".slider-list-transform img"
);
const box_container = document.querySelector(".box-container");

const images_amount = slider_images_list.length;
let image_length = slider_viewport.offsetWidth;
let index = 0;

add_boxes();
function add_boxes() {
  for (let i = 0; i < images_amount; i++) {
    const new_box = document.createElement("div");
    new_box.classList.add("box");
    box_container.appendChild(new_box);
  }
  box_container.firstChild.classList.add("selected-box");
}
const boxes_list = document.querySelectorAll(".box");

btn_prev.addEventListener("click", function () {
  btn_next.disabled = false;
  boxes_list[index].classList.remove("selected-box");
  index--;
  boxes_list[index].classList.add("selected-box");
  sliderTransform(index);

  if (index === 0) {
    this.disabled = true;
    console.log("disabled");
  }
});
btn_next.addEventListener("click", function () {
  btn_prev.disabled = false;
  boxes_list[index].classList.remove("selected-box");
  index++;
  boxes_list[index].classList.add("selected-box");
  sliderTransform(index);

  if (index === images_amount - 1) {
    this.disabled = true;
  }
});

function sliderTransform(index) {
  slider_list_transform.style.transform = `translateX(-${
    image_length * index
  }px)`;
}

function reinit_slider() {
  image_length = slider_viewport.offsetWidth;
  slider_images_list.forEach((element) => {
    element.offsetWidth = slider_viewport.offsetWidth;
    element.offsetHeight = slider_viewport.offsetHeight;
  });
  sliderTransform(index);
}

if (window.onresize == undefined) {
  console.log("done");
  window.onresize = reinit_slider;
}
