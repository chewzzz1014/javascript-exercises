const removeFromArray = function(arr, args) {
  let arr1  = [];
  for (let e in args)
      arr1.concat(arr.filter(ele => ele!=e));
  return arr1;
};

// Do not edit below this line
module.exports = removeFromArray;
