function sum6a(a) {
  let sum = 0;
  a.forEach((e) => {
    sum = sum + e;
  });
  return sum;
}

function sum6b(a) {}

function sum6c(a) {}

const totalA = sum6a([1, 2, 3, 4, 5]);
const totalB = sum6b([1, 2, 3, 4, 5]);
const totalC = sum6c([1, 2, 3, 4, 5]);

if (totalA === totalB && totalB === totalC) {
  console.log('totalA, totalB and totalC are equals');
} else {
  console.log(
    `There is a bug somewhere [totalA=${totalA}, totalB=${totalB}, totalC=${totalC}]`
  );
}
