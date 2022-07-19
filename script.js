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
const boxes_list = document.querySelectorAll(".box");
function add_boxes() {
  for (let i = 0; i < images_amount; i++) {
    const new_box = document.createElement("div");
    new_box.classList.add("box");
    new_box.index = i;
    new_box.addEventListener("click", function () {
      moveSlider(this.index);
    });
    box_container.appendChild(new_box);
  }
  box_container.firstChild.classList.add("selected-box");
}

let interval = null;
function moveSlider(new_index) {
  boxes_list[index].classList.remove("selected-box");
  index = new_index;
  boxes_list[index].classList.add("selected-box");
  sliderTransform();

  clearInterval(interval);
  interval = setInterval(function () {
    if (index == images_amount - 1) {
      moveSlider(0);
    } else {
      moveSlider(index + 1);
    }
  }, 5000);
}

btn_prev.addEventListener("click", function () {
  if (index == 0) {
    moveSlider(images_amount - 1);
  } else {
    moveSlider(index - 1);
  }
});
btn_next.addEventListener("click", function () {
  if (index == images_amount - 1) {
    moveSlider(0);
  } else {
    moveSlider(index + 1);
  }
});

function sliderTransform() {
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
  sliderTransform();
}

if (window.onresize == undefined) {
  console.log("done");
  window.onresize = reinit_slider;
}
