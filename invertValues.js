function invert(array) {
    if (array.length === 0) {
      return array;
    }
    let newArr= [];
    
    for (let i = 0; i < array.length; i++) {
      if (array[i] >= 0) {
        newArr.push(-array[i]);
      } else if (array[i] < 0) {
        newArr.push(array[i] * - 1);
      }
    }
    return newArr;
  }