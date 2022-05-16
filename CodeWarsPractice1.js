// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.


function century(year) {
    if (year % 100 === 0) {
      return Math.floor(year /100);
    } else {
      return Math.floor(year/ 100) + 1;
    }
    
}

// year 1705 equals 18
// year 1900 equals 19
//year 2001 equalts 21
console.log(century(2001));