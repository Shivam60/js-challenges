function fn(val){
  switch(val){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
      return true;
    default:
      return false;
  }
  
}
function translatePigLatin(str) {
 var ans="way";
  while(!fn(str.charAt(0))){
     ans="ay";
     str= str.substr(1)+str.charAt(0);
    
  }
  return str+ans;
}

translatePigLatin("glove");
