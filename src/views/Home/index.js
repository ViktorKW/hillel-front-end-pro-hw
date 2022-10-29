import Table from "../../components/Table";

const Home = () => {
  return `<home>
            ${Table()}
            <canvas id="myChart" width="400" height="400"></canvas>
          </home>`;
};

export default Home;
