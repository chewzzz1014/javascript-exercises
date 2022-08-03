const reverseString = function(str) {
   let n = '';
   for (let i=str.length-1; i>=0; i--)
      n += str[i];
  return n;
};

// Do not edit below this line
module.exports = reverseString;
