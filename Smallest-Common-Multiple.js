function lcm(a,b){
  var mx=Math.max(a,b);
  var mn=Math.min(a,b);

  var ans=mx;
  while(ans%mn!=0) ans+=mx;
  return ans;
}
function smallestCommons(arr) {
  var mx=0;
  var mn=0;
  if(arr[0]>arr[1]) {mx=arr[0]; mn=arr[1];}
  else {mx=arr[1]; mn=arr[0];}
  var sm=mn;
  for(var i=mn+1;i<=mx;++i){
    sm=lcm(sm,i);
  }
  return sm;
}


smallestCommons([1,5]);

