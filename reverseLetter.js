function reverseLetter(str) {
    const regex = /[^A-Za-z]/g;
     str = str.replace(regex, "");
     return str.split("").reverse().join("")
   
}