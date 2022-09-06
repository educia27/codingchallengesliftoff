function fakeBin(x){
    let newDigits = [];
    
    for (let i = 0; i < x.length; i++) {
      if (x[i] < 5 ) {
        newDigits.push("0");
      } else {
        newDigits.push("1");
      }
    }
    return newDigits.join("");
};