function reverseList(arr) {
    if (arr.length == 0) {
      return arr;
    }
    
    arr = arr.sort((a,b) => b - a);
    
    return arr;
}