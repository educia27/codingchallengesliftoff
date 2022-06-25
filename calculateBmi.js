function bmi(weight, height) {
  
    let calculation = (weight / (height*height))
    
    if (calculation <= 18.5) {
      return "Underweight"
    } else if (calculation <= 25.0) {
      return "Normal"
    } else if (calculation <= 30.0 ) {
      return "Overweight"
    } else if (calculation > 30) {
      return "Obese"
    }
  }