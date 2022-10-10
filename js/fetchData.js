const default_url = "https://pokeapi.co/api/v2";

const fetchData = (url, callback) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      callback(data);
    });

// const asyncFetchData = async (url) =>
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => data);

// const asyncFetchData = async (url) => {
//   try {
//     const resp = await fetch(url);
//     if (!resp.ok) {
//       throw new Error("errrrrrror");
//     }
//     const data = await resp.json();
//     return data;
//   } catch (error) {
//     console.log(error);
//   }
// };
// console.log("dodo: ", asyncFetchData(default_url));

// const dodo = async () => {
//   let pokemon;
//   pokemon = await getPokemon();
//   console.log("finsl", pokemon);
//   return pokemon;
// };
