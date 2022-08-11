const palindromes = function (str) {
   //letter : 65-90 (capital), 97-122 (small)
    str = str.split("").filter(
     (ele, idx) => isIncluded(str.charCodeAt(idx))
   );

   let backward = str.slice(0).reverse();

   return str.join("").toLowerCase()===backward.join("").toLowerCase();

};

function isIncluded(c){
  return ((c<=90 && c>=65)||(c<=122&&c>=97));
}

// Do not edit below this line
module.exports = palindromes;
