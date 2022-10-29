import { handleLocation, handleRoute } from "./helpers/router";
import "./styles/all.scss";
handleLocation();

document.addEventListener("click", (e) => {
  if (e.target.dataset.link === "") {
    handleRoute(e);
  }
});

import data from "./assets/db.json";
function random_rgba() {
  var o = Math.round,
    r = Math.random,
    s = 255;
  return (
    "rgba(" +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    o(r() * s) +
    "," +
    r().toFixed(1) +
    ")"
  );
}

console.log(
  data.map((student) => {
    return `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(
      Math.random() * 255
    )}, ${Math.floor(Math.random() * 255)}, 1)`;
  })
);
const ctx = document.getElementById("myChart");
const myChart = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: data.map((student) => {
      return student.name;
    }),
    datasets: [
      {
        label: "# Students rating",
        data: data.map((student) => {
          return student.rating;
        }),
        backgroundColor: data.map(() => {
          return random_rgba();
        }),
        borderColor: data.map(() => {
          return random_rgba();
        }),
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});
