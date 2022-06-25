let order_form = document.querySelector(".order-form");
let to_do_input = order_form.elements["to-do-input"];
let error_text = document.getElementById("error-text");
let to_do_list = document.getElementById("to-do-list");

order_form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validate()) {
    add_li_element(to_do_input.value);
  }
});

function add_li_element(str) {
  to_do_list.hidden = false;

  let container = document.createElement("li");

  let text_box = createCustomP(str);
  let check_box = createCustomCheckBox();
  let button = createCustomButton();

  container.appendChild(text_box);
  container.appendChild(check_box);
  container.appendChild(button);
  to_do_list.appendChild(container);
}

function createCustomP(str) {
  let text_box = document.createElement("p");
  text_box.innerHTML = str;
  text_box.style.display = "inline-block";
  return text_box;
}

function createCustomButton() {
  let button = document.createElement("button");
  button.innerHTML = "delete";
  button.addEventListener("click", function () {
    let li_element = this.parentNode;
    let ul_element = li_element.parentNode;
    ul_element.removeChild(li_element);
  });
  return button;
}

function createCustomCheckBox() {
  let check_box = document.createElement("input");
  check_box.type = "checkbox";
  check_box.style.display = "inline-block";
  check_box.addEventListener("change", function () {
    let parent = this.parentNode;
    let target = parent.querySelector("p");

    if (this.checked === true) {
      target.style.setProperty("text-decoration", "line-through");
    } else {
      target.style.setProperty("text-decoration", "none");
    }
  });
  return check_box;
}

function validate() {
  if (to_do_input.value.length === 0 || to_do_input.value.trim().length === 0) {
    show_error();
    return false;
  } else {
    return true;
  }
}

function show_error() {
  to_do_input.value = "";
  error_text.style.display = "block";
  to_do_input.classList.add("error");
}

to_do_input.addEventListener("change", function () {
  if (this.value.length === 0 || this.value.trim().length === 0) {
    show_error();
  } else {
    hide_error();
  }
});

function hide_error() {
  error_text.style.display = "none";
  to_do_input.classList.remove("error");
}
