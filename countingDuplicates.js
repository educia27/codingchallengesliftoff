function duplicateCount(text){
    text = text.toLowerCase().split("");
    let obj = {};
    
    for (let i = 0; i < text.length; i++) {
      let indexVal = text[i];
      
      if (obj[indexVal]) {
        obj[indexVal] += 1
      } else {
        obj[indexVal] = 1
      }
    }
    
    let count = 0;
    
    for (let i = 0 ; i < Object.values(obj).length ; i++) {
      if (Object.values(obj)[i] > 1) {
        count++
      }
    } 
    return count;
};
