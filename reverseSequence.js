const reverseSeq = n => {
    let arr = []
    for (let i = n; i > 0; i--) {
      arr.push(i)
    }
    return arr;
  };

  // an n = 5 will return an array of [ 5 4 3 2 1] 