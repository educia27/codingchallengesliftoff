function validatePIN (pin) {
    if (pin.length == 0) {
      return false;
    }
   let regexp = /^(\d{4}|\d{6})?$/;
    
   if (pin.match(regexp)) {
     return true;
   } else {
     return false;
   }
    
}