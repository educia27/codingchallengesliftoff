String.prototype.toJadenCase = function () {
    let  str = "How can mirrors be real if our eyes aren't real";
    let arr = str.split(" ");
  
    const map1 = arr.map(i => i[0].toUpperCase() + i.slice(1))
    
    return (map1.join(" "));
    
  };