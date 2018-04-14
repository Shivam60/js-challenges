
function dropElements(arr, func) {
  var i=0;
  for(i=0;i<arr.length;++i){
    if(!func(arr[i])) ;
    else break;
  }
  // Drop them elements.
  return arr.slice(i);
}

dropElements([1, 2, 3], function(n) {return n < 3; });

