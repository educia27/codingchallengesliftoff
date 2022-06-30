function openOrSenior(data){
    let classification = [];
  
    
    for (let i = 0; i < data.length; i++) {
        if (data[i][0] >= 55 && data[i][1] > 7) {
            data[i] = "Senior";
        } else {
            data[i] = "Open";
        }
         classification.push(data[i]);
  
    }
    return classification;
    
  }