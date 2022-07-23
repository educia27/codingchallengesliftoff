function gimme (triplet) {
    let index = 0;
    let max = Math.max(...triplet);
    let min = Math.min(...triplet);
    
   for (let i = 0; i < triplet.length; i++) {
     if (triplet[i] !== max && triplet[i] !== min) {
       index = i;
     }
   }
    return index;
}