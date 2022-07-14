function divCon(x){
    let parsed = 0;
    let notParsed = 0;
    for (let i = 0; i < x.length; i++) {
      if (typeof x[i] == "string") {
        parsed += Number(x[i]);
      } else if (typeof x[i] == "number") {
        notParsed += x[i];
      }
    }
    return notParsed - parsed;
}