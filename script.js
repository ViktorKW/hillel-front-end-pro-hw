// //1
const calc_nums = (number1) => {
  return (number2) => {
    return number1 + number2;
  };
};

console.log(calc_nums(5)(2));

// //2
const remove_elements = (mystr, letters) => {
  letters.forEach((letter) => {
    mystr = mystr.replaceAll(letter, "");
  });
  return mystr;
};

console.log(remove_elements("Dodo Legend", ["o", "d", "e"]));

// //3
function getNum() {
  let result = 0;
  return (number) => {
    result += number;
    return result;
  };
}
let sum = getNum();
console.log(sum(3), sum(5), sum(20));

// //4
function pocketFunc() {
  let i = 0;
  let j = 1;
  let big_num = 0;
  return (n) => {
    if (n > 0) {
      big_num = i + j;
      i = j;
      j = big_num;
      return `${big_num}, ${fibonacciList(n - 1)}`;
    } else {
      return ` ${big_num}`;
    }
  };
}
let fibonacciList = pocketFunc();
console.log(fibonacciList(50));
