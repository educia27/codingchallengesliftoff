function printerError(s) {
    let regexp =  /[a-m]/gi;
    let regexp2 = /[n-z]/gi;
     let count = 0;
     let count2 = 0;
     
      for (let i = 0; i < s.length; i++) {
        if (s[i].match(regexp)) {
          count++;
        } else if (s[i].match(regexp2)) {
          count2++;
        }
      }
      
    return count2 + "/" + s.length;
};