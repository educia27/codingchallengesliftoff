function smallEnough(a, limit){
  
    const overUnder = (value) => value <= limit;
    return a.every(overUnder);
    
}