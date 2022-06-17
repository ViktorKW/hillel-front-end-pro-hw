let img_index = 0;
let amount_of_imgs = 7;
function buttonPrev() {
  img_index--;
  document.querySelector("img").src = `images/${img_index}.jpg`;
  if (img_index === 0) {
    document.querySelectorAll("button")[0].hidden = true;
  }
  document.querySelectorAll("button")[1].hidden = false;
}

function buttonNext() {
  img_index++;
  document.querySelector("img").src = `images/${img_index}.jpg`;
  if (img_index === amount_of_imgs - 1) {
    document.querySelectorAll("button")[1].hidden = true;
  }
  document.querySelectorAll("button")[0].hidden = false;
}
