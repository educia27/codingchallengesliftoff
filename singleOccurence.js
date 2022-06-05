function longest(s1, s2) {
    let allString = s1.concat(s2);  
    
    const singleOccurence = [... new Set(allString)].sort().join("");
    
    return singleOccurence;
    
  }

  console.log(longest("askclnsdjgnd" , "hwwwwwecvbgerrrr"));