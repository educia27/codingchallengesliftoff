function isTriangle(a,b,c)
{
   if ( a <= 0 || b <= 0 || c <= 0) {
     return false;
   }
  
   if (b + c > a) {
     return true;
   } else {
     return false;
   }
}