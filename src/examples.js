export function sum(a, b) {
  return a + b;
}

export function sumSpread(...args) {
  let calc = 0;

  for (let arg of args) {
    calc += arg;
  }

  return calc;
}

export function minus(a, b) {
  return a - b;
}

export function multiply(a, b) {
  return a * b;
}

export function divide(a, b) {
  return a / b;
}

export function pow(x, n) {
  let res = x;

  for (let i = 1; i < n; i++) {
    res *= x;
  }

  return res;
}

export function isBigger(a, b) {
  return a > b;
}

export function isSmaller(a, b) {
  return a < b;
}

// Нужно проверить что в обьекте который возвращает getUserInfo в свойстве getUserInfo содержится Vick
export function getUserInfo() {
  return {
    fullName: 'Vick Jone',
    age: 30,
    id: '123',
  };
}
