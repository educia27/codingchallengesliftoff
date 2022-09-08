function oddCount(n){
    let oddArr = [];
    
    for (let i = 1 ; i < n; i+= 2) {
      
      if (i % 2 == 1) {
        oddArr.push(i);
      }
    }
    return oddArr.length;
}