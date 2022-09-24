function modifyMultiply (str,loc,num) {
    str = str.split(" ");
    
  
    let finalStr = "";
    let product= [];
    
    for (let i = 0; i < str.length; i++) {
      if (str[i] == str[loc]) {
         finalStr += str[i];  
      }  
    }
    
    for (let i = 1; i <= num; i++) {
        product.push(finalStr);
      }
    
    
    return product.join("-");
     
};