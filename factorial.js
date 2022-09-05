function factorial(n)
{
  if (n < 0 || n > 12) {
    throw new RangeError("this argument must not be less than 0 or greater than 12")
  }
  
  if (n == 0 || n == 1) {
    return 1
  }
  
  for ( let i = n - 1 ; i >= 1; i--){
    n = n * i ;
  }
  
  return n;
    
}