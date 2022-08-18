function toAcronym(inp){
  
    inp = inp.split(" ");
    
    let acronyms = [];
    
    for (let i = 0;  i < inp.length; i++) {
      acronyms.push(inp[i][0]);
    }
    return acronyms.join("").toUpperCase()
}