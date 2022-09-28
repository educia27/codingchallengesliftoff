function alphabetPosition(text) {
    text = text.toLowerCase();
    let arr = [];
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    
    for (let i = 0; i < text.length; i++) {
      if (alphabet.includes(text[i])) {
        arr.push(alphabet.indexOf(text[i]));
      }
    }
  
    let plusOne = arr.map(i => i + 1);
    
    return plusOne.join(" ");
};