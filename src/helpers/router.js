import { routes } from "./routes";

export const handleRoute = (e) => {
  e = e || window.event;
  e.preventDefault();
  window.history.pushState({}, "", e.target.href);
  handleLocation();
};

export const handleLocation = () => {
  const { pathname } = window.location;
  const route = routes[pathname] || routes["404"];
  const main = document.getElementById("root");
  main.innerHTML = route();
};

window.onpopstate = handleLocation;
window.route = handleRoute;
