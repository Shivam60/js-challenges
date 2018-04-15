
function pairElement(str) {
  var obj={
    'A':["A","T"],
    'T':["T","A"],
    'C':["C","G"],
    'G':["G","C"]    
  };
 var ans=[];
  for(var i=0;i<str.length;++i){
    ans.push(obj[str[i]]);
  }
  return ans;
}

pairElement("GCG");
	
