const getTheTitles = function(arr) {
  let titles = [];
  if (arr.length===0)
    return "";
  arr.forEach((ele)=> {titles.push(ele.title)});
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
