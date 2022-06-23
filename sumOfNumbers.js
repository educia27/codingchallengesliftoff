function getSum( a,b )
{
   if (a == b) {
     return a;
   }
  let sum = 0;
  
  for (let i = a; i >= b; i--) {
    sum+= i; ;
  }
  
  for (let z = a ; z <= b; z++) {
    sum+= z;
  }
  return sum;
  
}