// Write a function that takes such collection and counts the points of our team in the championship. 
// Rules for counting points for each match:

// if x > y: 3 points
// if x < y: 0 point
// if x = y: 1 point

function points(games) {
    let count = 0;
    for (let i = 0; i < games.length; i++) {
      if (games[i].charAt(0) > games[i].charAt(2)) {
        count+= 3
      } else if (games[i].charAt(0) == games[i].charAt(2)) {
        count += 1
      } else if (games[i].charAt(0) < games[i].charAt(2)) {
        count+= 0
      }
    }
    return count;
  }