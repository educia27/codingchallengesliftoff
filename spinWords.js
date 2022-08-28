function spinWords(string){
    let arr = string.split(" ");
    
    let newArr = []
    
    for (let i = 0; i < arr.length; i++) {
      if (arr[i].length >= 5) {
        newArr.push(arr[i].split("").reverse().join(""));
      } else {
        newArr.push(arr[i]);
      }
    }
    return newArr.join(" ");
}