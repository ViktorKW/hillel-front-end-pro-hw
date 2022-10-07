const fetchData = (url, callback) =>
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      callback(data);
    });
