
// Given an array of integers as strings and numbers, 
// return the sum of the array values as if all were numbers.

function sumMix(x){
    let count = 0
    for (let i= 0; i < x.length; i++) {
      count += Number(x[i]);
    }
    return count;
  }