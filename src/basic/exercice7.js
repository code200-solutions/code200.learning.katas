function sum(a) {
  try {
    let sum = 0;
    return a.forEach((e) => {
      sum = sum + e;
    });
  } catch (error) {
    return -1;
  }
}

sum(null);
