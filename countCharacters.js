// The main idea is to count all the occurring characters in a string. 
// If you have a string like aba, then the result should be {'a': 2, 'b': 1}.
// What if the string is empty? Then the result should be empty object literal, {}.


function count (string) {  
    let strArray  = string.split("");
    let obj = {};
  
    for (let i = 0; i < strArray.length; i++) {
      let indexValue = strArray[i];
      
      if (obj[indexValue]) {
        obj[indexValue] +=1
      } else {
        obj[indexValue] = 1
      }
    }
  
     return obj;
}

