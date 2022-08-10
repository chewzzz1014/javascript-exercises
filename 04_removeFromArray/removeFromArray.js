const removeFromArray = function(arr) {

  if (typeof args === "number")
    return arr.filter( (ele) => (ele!==args) );
  else{
    const args = Array.from(arguments);

    return arr.filter((ele)=> (!args.includes(ele)) );
  }

};

// Do not edit below this line
module.exports = removeFromArray;
