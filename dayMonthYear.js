function dayOfTheWeek(date) {
    date = date.split("/");
    date = [date[0], date[1], date[2]] = [date[1], date[0], date[2]];
  
    let formalDate = new Date(date);
    let  dayOfTheWeek = [];
    
    if (formalDate.getDay() == 0) {
      dayOfTheWeek.push("Sunday")
    } else if (formalDate.getDay() == 1) {
      dayOfTheWeek.push("Monday")
    } else if (formalDate.getDay() == 2) {
      dayOfTheWeek.push("Tuesday")
    } else if (formalDate.getDay() == 3) {
      dayOfTheWeek.push("Wednesday")
    } else if (formalDate.getDay() == 4) {
      dayOfTheWeek.push("Thursday")
    } else if (formalDate.getDay() == 5) {
      dayOfTheWeek.push("Friday")
    } else if (formalDate.getDay() == 6){
      dayOfTheWeek.push("Saturday")
    }
    return dayOfTheWeek.join("");
};