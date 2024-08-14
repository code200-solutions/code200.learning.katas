function sum6a(a) {
  let sum = 0;
  a.forEach((e) => {
    sum = sum + e;
  });
  return sum;
}

function sum6b(a) {
  const tot = a.reduce((acc, curr) => (acc = acc + curr), 0);
  return tot;
}

function sum6c(a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum = sum + (a[i] % 2) === 0 ? a[i] * 2 : a[1] > 10 ? a[1] / 10 : a[1] + 3;
  }
  return sum;
}

function sum6cFP(a) {
  return a.reduce((acc, curr) => {
    return acc + (curr % 2) === 0 ? curr * 2 : curr > 10 ? curr / 10 : curr + 3;
  }, 0);
}

function sum6cFP2(a) {
  return a
    .filter((e) => e % 2 === 0) // truthy ie not 0, '', null, undefined, NaN
    .map((e) => e * 2)
    .concat(a.filter((e) => e % 2 !== 0).map((e) => (e > 10 ? e / 10 : e + 3)))
    .reduce((acc, curr) => acc + curr, 0);
}

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
