function divisors(integer) {
    let isPrime = true;
    let array = [];
    for (let i = 2; i < integer; i++) {
      if (integer % i == 0) {
        isPrime = false;
        array.push(i);
      }
    }
    
    if (isPrime) {
      return `${integer} is prime`;
    }
    
    return array;
};