function LongestWord(sen) { 

    let eachWord = sen.split(" ");
    let longestWord = "";
  
    for (let i = 0; i < eachWord.length; i++) {
      if (eachWord[i].length > longestWord.length) {
        longestWord = eachWord[i];
      }
    }
    
    return longestWord; 
  
  }
     
  // should return javascript
  console.log(LongestWord("I love javascript"));