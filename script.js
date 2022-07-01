// //1
let array = new Array(Number(prompt("Type size of an array")));
for (let i = 0; i < array.length; i++) {
  array[i] = +prompt(`Current array data: ${array}\nType number for the array`);
}
//let array_before = array;
array.splice(2, 2);
alert(`${array}`);

// //2
// //Знайти суму та кількість додатніх елементів.
let array2 = [
  16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54,
  76, -4, 12, -35, 4, 47,
];
console.log(array2);
let total = 0;
let pos_val_amount = 0;
array2.forEach((item, index) => {
  if (item > 0) {
    total += item;
    pos_val_amount += 1;
  }
});
console.log(`Total: ${total}\npos_val_amount: ${pos_val_amount}`);

// //Знайти мінімальний елемент масиву та його порядковий номер.
let min_value = 0;
let min_value_index = 0;
array2.forEach((item, index) => {
  if (min_value > item) {
    min_value = item;
    min_value_index = index;
  }
});

console.log(`min_value: ${min_value}\nmin_value_index: ${min_value_index}`);

// //Знайти максимальний елемент масиву та його порядковий номер.
let max_value = 0;
let max_value_index = 0;
array2.forEach((item, index) => {
  if (max_value < item) {
    max_value = item;
    max_value_index = index;
  }
});

console.log(`max_value: ${max_value}\nmax_value_index: ${max_value_index}`);

// //Визначити кількість від'ємних елементів.
let negative_values_amount = 0;
array2.forEach((item) => {
  if (item < 0) {
    negative_values_amount++;
  }
});
console.log(`negative_values_amount: ${negative_values_amount}`);

// //Знайти кількість непарних додатніх елементів.
let positive_odd_values_amount = 0;
array2.forEach((item) => {
  if (item > 0 && item % 2 !== 0) {
    positive_odd_values_amount++;
  }
});
console.log(`positive_odd_values_amount: ${positive_odd_values_amount}`);

// //Знайти суму парних додатніх елементів.
let total_positive_even = 0;
array2.forEach((item) => {
  if (item > 0 && item % 2 == 0) {
    total_positive_even += item;
  }
});
console.log(`total_positive_even: ${total_positive_even}`);

// //Знайти суму парних додатніх елементів.
let total_positive_multiplied = 1;
array2.forEach((item) => {
  if (item > 0) {
    total_positive_multiplied = total_positive_multiplied * item;
  }
});
console.log(`total_positive_multiplied: ${total_positive_multiplied}`);

// //Знайти найбільший серед елементів масиву, решту обнулити.
let array3 = [];
array3 = array2.map((item) => {
  if (item == Math.max(...array2)) {
    return item;
  } else {
    return 0;
  }
});

console.log(array3);
