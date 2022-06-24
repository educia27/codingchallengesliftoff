function arrayPlusArray(arr1, arr2) {
    let finalArr = arr1.concat(arr2);
    let sum = 0;
    for (let i = 0; i < finalArr.length; i++) {
      sum += finalArr[i];
    }
    return sum;
  }