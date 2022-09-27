function sumDigits(number) {
  
    let arrDigits = Array.from(String(number), Number)
    
     let sum = 0;
     for (let i = 0; i < arrDigits.length; i++) {
       if (Number.isInteger(arrDigits[i])) {
         sum += arrDigits[i];
       }
     }
     return sum;
     
};
   