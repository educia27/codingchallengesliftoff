function getAverage(marks){
    let mean = 0
    for (let i = 0; i < marks.length; i++) {
      mean += marks[i];
    }
    return Math.floor(mean / marks.length);
  }

  