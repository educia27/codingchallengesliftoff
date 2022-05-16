// Consider an array/list of sheep where some sheep may 
// be missing from their place. We need a function 
// that counts the number of sheep present in the 
// array (true means present).


function countSheeps(arrayOfSheep) {
    let trueCount = 0;
    for (let i = 0; i < arrayOfSheep.length; i++) {
      if (arrayOfSheep[i] == true) {
        trueCount += arrayOfSheep[i];
      }
    }
    return trueCount;
  }

  //will return 3 
  console.log(countSheeps([true,true,false,false,true]));