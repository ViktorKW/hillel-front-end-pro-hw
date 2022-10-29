import { handleLocation, handleRoute } from "./helpers/router";
import "./styles/all.scss";
handleLocation();

document.addEventListener("click", (e) => {
  if (e.target.dataset.link === "") {
    handleRoute(e);
  }
});
