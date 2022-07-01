//1
const num1 = +prompt("Type first num");
const num2 = +prompt("Type second num");
alert(
  num1 === num2
    ? `${num1} equal to ${num2}`
    : num1 > num2
    ? `${num1} bigger than ${num2}`
    : `${num2} bigger than ${num1}`
);

//2
const fDist = +prompt("Type distance in feets");
const mDist = +prompt("Type distance in meters");

const meters_to_feet = parseInt(mDist / 0.305);

alert(
  fDist === meters_to_feet
    ? `${fDist} feet equal to ${mDist} meters`
    : fDist > meters_to_feet
    ? `${fDist} feet longer than ${mDist} meters`
    : `${fDist} feet shorter than ${mDist} meters`
);

//3
const num3 = +prompt("Type first num");
const num4 = +prompt("Type second num");

alert(
  num3 % num4 == 0
    ? `${num3} divisible by ${num4}`
    : `${num3} is not divisible by ${num4}`
);
alert(
  num4 % num3 == 0
    ? `${num4} divisible by ${num3}`
    : `${num4} is not divisible by ${num3}`
);

//4
const num5 = +prompt("Type a num");
const last_number = num5 % 10;
alert(
  last_number % 2 == 0 ? `${last_number} is even` : `${last_number} is odd`
);

//5
const num6 = +prompt(`Type a num`);
const first_half = parseInt(num6 / 10);
const second_half = num6 % 10;

alert(
  first_half > second_half
    ? `${first_half} > ${second_half}`
    : `${second_half} > ${first_half}`
);

//6
const num7 = +prompt(`Type a num`);
const first_num = parseInt(num7 / 100);
const second_num = parseInt(num7 / 10) % 10;
const third_num = num7 % 10;
const sum = first_num + second_num + third_num;
alert(`${first_num} + ${second_num} + ${third_num} = ${sum}`);
alert(`
  ${sum / 2 == 0 ? `${sum} is even` : `${sum} is odd`}`);
alert(sum % 5 == 0 ? `${sum} divisible by 5` : `${sum} is not divisible by 5}`);
const multiplied_sum = first_num * second_num * third_num;
alert(`${first_num} * ${second_num} * ${third_num} = ${multiplied_sum}`);
alert(
  multiplied_sum > 100 ? `${multiplied_sum} > 100` : `${multiplied_sum} < 100`
);

//7
const num8 = +prompt("Type a num");
alert(`${num8} >= 0 && ${num8} <= 500\n${num8 >= 0 && num8 <= 500}`);

//8
const year = +prompt(`Type year`);
alert(
  year % 4 !== 0
    ? `${year} common year`
    : year % 100 == 0 && year % 400 !== 0
    ? `${year} common year`
    : `${year} leap year`
);
