import { api } from "./helpers/api";
import "./styles/all.scss";

api("products", (data) => {
  console.log(data);
});
