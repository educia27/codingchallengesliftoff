function duplicateEncode(word){
    word = word.toLowerCase();
    
      let newWord = [];
    
      for (let i = 0; i < word.length; i++) {
        if (word.lastIndexOf(word[i]) == word.indexOf(word[i])) {
          newWord.push('(');
        } else {
          newWord.push(')');
        }
      }
    return newWord.join("");
    
};