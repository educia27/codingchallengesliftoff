function minValue(values){
    values = values.sort((a,b) => a - b);
   let nonRepeatedNumbers = [... new Set(values)];
   
   return parseInt(nonRepeatedNumbers.join(""));
}