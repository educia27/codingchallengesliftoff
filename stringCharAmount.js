function XO(str) {
    let countX = 0;
    let countO = 0;
  
  for (let i = 0; i < str.length; i++) {
    if (str[i].includes("x") || str[i].includes("X")) {
      countX++;
    } else if (str[i].includes("o") || str[i].includes("O")) {
      countO++
    } 
    
  }
  
  if (countX == countO) {
    return true;
  } else {
    return false;
  }
    
}