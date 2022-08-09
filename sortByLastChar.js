function last(x){
    let arr = x.split(" ");
  //   console.log(arr.sort());
   return arr.sort((a,b) => a.charCodeAt(a.length - 1) - b.charCodeAt(b.length - 1))  
}