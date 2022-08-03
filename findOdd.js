function findOdd(A) {
    const count = {};
    
    for (const element of A) {
      if (count[element]) {
        count[element] += 1;
      } else {
        count[element] = 1;
      }
      
  
    }
    for (let i = 0; i < Object.values(count).length; i++) {
      if (Object.values(count)[i] % 2 == 1 ) {
        return Number(Object.keys(count)[i]);
      }
    } 
  
}