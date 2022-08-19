function calculateYears(principal, interest, tax, desired) {
    let count = 0;
    
      while (principal < desired) {
        principal += principal *  interest * (1 - tax);
        count++
      }
    return count;
}