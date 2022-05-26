function sumTwoSmallestNumbers(numbers) { 
    let sum = 0;
    let min1 = Infinity, min2 = Infinity
    
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] < min1) {
        min2 = min1;
        min1 = numbers[i];
      } else if (numbers[i] < min2) {
        min2 = numbers[i];
      }
      sum = min1 + min2;
    }
    return sum;
  }