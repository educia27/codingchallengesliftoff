// write the function isAnagram
var isAnagram = function(test, original) {
  
    test = test.toLowerCase().split("").sort()
    original = original.toLowerCase().split("").sort()
   
    
      if (test.every((val) => original.includes(val)) && test.length == original.length  ) {
        return true;
      } else {
        return false;
      }
};
  