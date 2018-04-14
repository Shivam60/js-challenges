function chk(p){
  if(p<=3) return true;
  for(var i=2;i<=Math.ceil(Math.sqrt(p));++i) if(p%i==0) return false;
   return true;
}
function sumPrimes(num) {
  var sum=0;
  for(var i=2;i<=num;++i){
    if(chk(i)) sum+=i;
  }
  return sum;
}

sumPrimes(10);

