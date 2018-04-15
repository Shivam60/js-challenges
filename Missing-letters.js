
function fearNotLetter(str) {
  var p=str.charCodeAt(0);
  p+=1;
  for(var i=1;i<str.length;++i){
    if(String.fromCharCode(p)===str.charAt(i)) ;
    else return String.fromCharCode(p);
    ++p;
  }
  return ;
}

fearNotLetter("abce");

