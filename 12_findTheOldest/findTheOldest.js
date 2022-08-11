const findTheOldest = function(arr) {
    let maxAge = getAge(arr[0]);
    let maxIdx = 0;

    for (let i=1; i<arr.length; i++){
      if (getAge(arr[i])>maxAge)
      {
        maxAge = getAge(arr[i]);
        maxIdx = i
      }
    }
    return arr[maxIdx].name;
};

function getAge(obj){
  if (!obj?.yearOfDeath)
    return (new Date().getFullYear()) -  obj.yearOfBirth;
  else
    return obj.yearOfDeath - obj.yearOfBirth;
}

// Do not edit below this line
module.exports = findTheOldest;
