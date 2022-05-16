function noSpace(x){
  let str = x.replace(/\s+/g, '');
  return str;
}

console.log(noSpace("thi will    alll be   combined with    no spaces   "))