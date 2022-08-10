const fibonacci = function(n) {
    if (typeof n !=="number")
        n = +n;
    let s = [1, 1];
    if (n<=0)
        return "OOPS";
    else if (n<=2)
      return s[n-1];
    else{
      for (let i=2; i<=n-1; i++)
        s.push(s[i-2]+s[i-1]);
      return s[n-1];
    }
};

// Do not edit below this line
module.exports = fibonacci;
