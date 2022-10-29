import { baseURL } from "./constants";
const api = (url, callback) => {
  fetch(`${baseURL}${url}`)
    .then((res) => res.json())
    .then((data) => callback(data));
};

export { api };
