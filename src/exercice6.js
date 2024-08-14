function sum6(a) {
  let sum = 0;
  a.forEach((e) => {
    sum = sum + e;
  });
  return sum;
}

const total = sum6([1, 2, 3, 4, 5]);
console.log(`total = ${total}`);
