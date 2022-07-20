var countSheep = function (num){
    let str = "";
    
    if (num == 0) {
      return "";
    }
  
    
    for (let i = 1; i <= num;  i++) {
      str += `${i} sheep...`
    }
    return str;
}