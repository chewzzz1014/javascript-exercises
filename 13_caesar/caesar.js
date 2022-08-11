const caesar = function(str, n) {
    let newStr = str.split("").map(
      (ele, idx) => shiftChar(str, idx,n)
    ).join("");
    return newStr;
};

function shiftChar(str, idx, n){
  // capital letter: between 65 and 90 (inclusive)
  // small letter: between 97 and 122 (inclusive)

  let c = str.charCodeAt(idx);
  if ((c<=90 && c>=65)||(c<=122&&c>=97)){
      let shiftedC = c+n;

      // no more a letter after shifted
      if(c<=90 && c>=65){
        if(shiftedC>90)
          shiftedC = shiftedC-90-1+65;
        else if (shiftedC<65)
          shiftedC =  91-(65-shiftedC);
      }
      else {
        if(shiftedC>122)
          shiftedC = shiftedC-122-1+97;
        else if (shiftedC<97)
          shiftedC =  123-(97-shiftedC);
      }
      return String.fromCharCode(shiftedC);
  }
  else
    return str.charAt(idx);
}
// Do not edit below this line
module.exports = caesar;
