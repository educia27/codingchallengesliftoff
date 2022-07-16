function DNAStrand(dna){
    let newDna = "";
   for (let i = 0;  i < dna.length; i++) {
     if (dna[i].includes("A")) {
      newDna += "T";
     } else if (dna[i].includes("T")) {
       newDna += "A";
     } else if (dna[i].includes("G")) {
       newDna += "C"
     } else if (dna[i].includes("C")) {
       newDna += "G";
     }
   } 
    return newDna;
  }