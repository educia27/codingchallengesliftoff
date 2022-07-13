// Sum Numbers
function sum (numbers) {
    if (numbers.length == 0) {
      return 0;
    } else if (numbers.length == 1) {
      return Number(numbers);
    }
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};