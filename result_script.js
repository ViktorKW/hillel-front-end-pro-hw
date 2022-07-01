const resultList = document.getElementById("result");
let captured_string_result = "";
new URLSearchParams(window.location.search).forEach((value) => {
  captured_string_result = value;
});

const elements_array = captured_string_result.split(",");

elements_array.forEach((element, index) => {
  const container = document.createElement("div");
  container.style.margin = "5px";
  container.style.padding = "10px";
  const new_label = document.createElement("label");
  new_label.innerHTML = `${element} element #${index}: `;
  new_label.style.fontSize = "20px";
  const new_element = document.createElement(element);
  new_element.style.backgroundColor = "red";
  new_element.style.fontSize = "20px";
  new_element.style.color = "white";
  new_element.style.padding = "10px";
  new_element.innerHTML = "custom element text";
  container.appendChild(new_label);
  container.appendChild(new_element);
  document.getElementById("result_div").appendChild(container);
});
