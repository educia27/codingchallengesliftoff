function solution(str, ending){
    if (str.endsWith(ending)) {
      return true;
    } else {
      return false;
    }
  }

  console.log(solution("abcde","de"));
  // returns true