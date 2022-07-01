const block_elements_array = [
  "address",
  "article",
  "aside",
  "blockquote",
  "canvas",
  "dd",
  "div",
  "dl",
  "dt",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1" - "h6",
  "header",
  "hr",
  "li",
  "main",
  "nav",
  "noscript",
  "ol",
  "p",
  "pre",
  "section",
  "table",
  "tfoot",
  "ul",
  "video",
  "video",
  "a",
  "abbr",
  "acronym",
  "b",
  "bdo",
  "big",
  "br",
  "button",
  "cite",
  "code",
  "dfn",
  "em",
  "i",
  "img",
  "input",
  "kbd",
  "label",
  "map",
  "object",
  "output",
  "q",
  "samp",
  "script",
  "select",
  "small",
  "span",
  "strong",
  "sub",
  "sup",
  "textarea",
  "time",
  "tt",
  "var",
];

let new_elements = [];
let info_block = document.getElementById("info_block");
let button_remove_element = document.getElementById("button_remove");
let ul_list = document.getElementById("list");

function redraw_list() {
  ul_list.innerHTML = "";
  new_elements.forEach((element) => {
    let li_element = document.createElement("li");
    li_element.innerHTML = element;
    ul_list.appendChild(li_element);
  });
}

function button_remove_func() {
  let text_element = document.getElementById("form_text_block").value;
  if (!new_elements.includes(text_element)) {
    alert("no such block element to delete!");
  } else {
    for (let i = new_elements.length; i > -1; i--) {
      if (new_elements[i] === text_element) {
        new_elements.splice(i, 1);
        break;
      }
    }

    redraw_list();
    if (new_elements.length == 0) {
      info_block.hidden = true;
      button_remove_element.disabled = true;
    }
  }
}

function button_add() {
  let text_element = document.getElementById("form_text_block").value;
  if (!block_elements_array.includes(text_element)) {
    alert("no such block element!");
  } else {
    new_elements.push(text_element);
    redraw_list();
    info_block.hidden = false;
    button_remove_element.disabled = false;
  }
}

const form = document.forms[0];

form.addEventListener("submit", (event) => {
  if (new_elements.length > 0) {
    document.getElementById("custom_elements_block").value =
      new_elements.join();
  } else {
    event.preventDefault();
  }
});
