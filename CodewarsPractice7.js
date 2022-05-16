// return a count of vowels found within a string

function getCount(str) {
  let vowelsCount = 0;
  const vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])){
      vowelsCount++
    }
    
   }
    return vowelsCount;
}

console.log(getCount("Fairly Odd Parents"))