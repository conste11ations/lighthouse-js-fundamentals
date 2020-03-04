function range(start, end, step) {
  let result = [];
  if (start === undefined || end === undefined || step === undefined || end - start < 0 || step <= 0) {
    return result;
  } else {
    for (let i = 0; i <= ((end - start + 1) / step); i++) {
      result.push(start + (step * i));
    }
    return result;
  }
}

console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));