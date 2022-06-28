var min = function(list){
    let ref = list[0];
    for (let i = 0; i < list.length; i++) {
      if (list[i] < ref) {
        ref = list[i]
      }
    }
  return ref;
}

var max = function(list){
    let ref = list[0];
     for (let j = 0; j < list.length; j++) {
      if (list[j] > ref) {
        ref = list[j]
      }
    }
  return ref;
}