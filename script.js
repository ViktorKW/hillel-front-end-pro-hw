// //1
let text_box_color = "red";
function task1_button_click() {
  let color_buff = document.getElementById("task1_text").style.color;
  document.getElementById("task1_text").style.color = text_box_color;
  text_box_color = color_buff;
}

// //2
function task2_button_click() {
  const link = prompt("Type link!");
  document.getElementById("task2_link").textContent = link;
  document.getElementById("task2_link").href = link;
}

// //3
const make_table = (sizeX, sizeY) => {
  if (sizeX > 0 && sizeY > 0) {
    const tbl = document.createElement("table");
    let cell_integer = 0;
    for (let i = 0; i < sizeX; i++) {
      let row = document.createElement("tr");
      for (let j = 0; j < sizeY; j++) {
        let cell = document.createElement("td");
        cell.textContent = cell_integer;
        cell_integer++;
        row.appendChild(cell);
      }
      tbl.appendChild(row);
    }
    return tbl;
  }
  return `error message`;
};

document.getElementById("task3_div").appendChild(make_table(10, 10));

// //4
function task4_button_click() {
  let seed = Math.floor(Math.random() * 9) + 1;
  console.log(seed);
  document.getElementById("task4_img").src = `images/${seed}.jpeg`;
}
