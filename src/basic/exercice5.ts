function sumTwo(a: number, b: number): number {
  const total = a + b;
  return total;
}

const total = sumTwo(1, 2);
console.log(`a + b = ${total}`);
console.log(`a + b = ${sumTwo(2, 3)}`);
console.log(`a + b = ${sumTwo(2, 3) * 2}`);
