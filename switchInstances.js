function switcheroo(x){
    let finalWord = "";
   
   for (let i = 0 ; i < x.length; i++) {
     if (x[i] == "b") {
       finalWord += "a";
     } else if (x[i] == "a") {
       finalWord += "b";
     } else if (x[i] == "c") {
       finalWord += "c";
     }
   }
   return finalWord;
}