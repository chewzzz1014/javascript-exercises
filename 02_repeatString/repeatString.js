const repeatString = function(string, num) {


  if (num>=0){
    let n = '';
    for (let i=0; i<num; i++)
      n += string;
    return n;
  }
  else {
    return "ERROR";
  }

};

// Do not edit below this line
module.exports = repeatString;
