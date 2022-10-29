const Chart = () => {
  function getChart() {
    const { Chart } = require("chart.js");
    const ctx = document.createElement("canvas");
    ctx.style.background = "red";
    ctx.style.width = "400px";
    ctx.style.height = "400px";

    const labels = ["January", "February", "March", "April", "May", "June"];

    const data = {
      labels: labels,
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgb(255, 99, 132)",
          borderColor: "rgb(255, 99, 132)",
          data: [0, 10, 5, 2, 20, 30, 45],
        },
      ],
    };

    const config = {
      type: "line",
      data: data,
      options: {},
    };
    const myChart = new Chart(ctx, config);
    console.log(myChart);
    console.log(ctx.outerHTML);
    return ctx.outerHTML;
  }

  return `<script>console.log("DODO")</script>`;
};

export default Chart;
