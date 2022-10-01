//Ответ:
//1) Создание промиса - потому что переменная "p" объявленна в основном стеке
//2) конец скрипта, - потому что console.log("Конец скрипта") вызван в основном стеке
//3) обработка промиса - это микротаск, у него выше приоритет по отношению к setTimeout
//4) Таймаут - это callback, он самый низкоприоритетный

setTimeout(function timeout() {
  console.log("Таймаут");
}, 0);

let p = new Promise(function (resolve, reject) {
  console.log("Создание промиса");
  resolve();
});

p.then(function () {
  console.log("Обработка промиса");
});

console.log("Конец скрипта");
