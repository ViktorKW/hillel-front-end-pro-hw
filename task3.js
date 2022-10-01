//Ответ
// 1) in setTimeout2 потому что имеет самый короткий таймер
// 2) in setTimeout1 потому что имеет таймер 1000 и в коде по порядку идёт первым
// 3) in Promise 1 потому что имеет таймер 1000 и в коде по порядку идёт после setTimeout1
// 4) in Promise 3 потому что имеет таймер 1000 и в коде по порядку идёт после Promise 1
// 5) in setTimeout4 потому что имеет таймер 1000 и в коде по порядку идёт после  Promise 3
// 6) in Promise 2 потому что имеет таймер 2000
// 7) in setTimeout3 потому что имеет таймер 2000 и в коде по порядку идёт после  Promise 2
// 8) in Promise потому что имеет таймер 5000

const myPromise = (delay) =>
  new Promise((res, rej) => {
    setTimeout(res, delay);
  });
setTimeout(() => console.log("in setTimeout1"), 1000);
myPromise(1000).then((res) => console.log("in Promise 1"));
setTimeout(() => console.log("in setTimeout2"), 100);
myPromise(2000).then((res) => console.log("in Promise 2"));
setTimeout(() => console.log("in setTimeout3"), 2000);
myPromise(1000).then((res) => console.log("in Promise 3"));
setTimeout(() => console.log("in setTimeout4"), 1000);
myPromise(5000).then((res) => console.log("in Promise "));

// Первая (неправильная) попытка:
// thenы не вызываются потому что нету resolve(). in Promise, in Promise 1, in Promise 2 и in Promise 3 выбывают
// 1) in setTimeout2 - потому что имеет самый короткий таймер
// 2) in setTimeout4 - потому что имеет второй самый короткий таймер
// 3) in setTimeout3 - потому что имеет самый длинный таймер

// Вторая (неправильная) попытка
// 1) in setTimeout2 - потому что имеет самый короткий таймер
// 2) in setTimeout1 - в коде идёт первым, значит таймер завершится первым и пойдёт в очередь callback'oв быстрее
// 3) in setTimeout4 - идёт быстрее "in Promise 1", потому что "in Promise 1" нужно пройти очередь микротасков, а затем очередь callback'ов
// 4) in Promise 1 - идёт после "in setTimeout4", потому что "in setTimeout4" нужно пройти лышь очередь callback'ов
// 5) in Promise 3 - потому что в коде по порядку идёт вторым
// 6) in Promise 2 - потому что имеет таймер  в 2000
// 7) in Promise - потому что имеет таймер 5000
