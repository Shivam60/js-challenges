
function myReplace(str, before, after) {

  if(before.charAt(0)===before.charAt(0).toUpperCase()){
      after=after.charAt(0).toUpperCase()+after.substr(1);
  }

  var regex = new RegExp(before,"gi");
  return str.replace(regex,after);
}

myReplace("This has a spellngi error", "spellngi", "spelling");

