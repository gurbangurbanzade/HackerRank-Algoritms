// All OK

let ks1 = 21;
let ka1 = 6;
let ks2 = 47;
let ka2 = 3;

function kangaroo(x1, v1, x2, v2) {
  // Write your code here
  let sum1 = x1;
  let sum2 = x2;
  if (x2 > x1 && v2 >= v1) {
    console.log("NO");
    return "NO";
  } else {
    for (let i = 0; i < Infinity; i++) {
      sum1 += v1;
      sum2 += v2;
      if (sum1 == sum2) {
        console.log(i);
        console.log("YES");
        return "YES";
      } else if (sum1 > sum2) {
        console.log("NO");
        return "NO";
      }
    }
  }
}
kangaroo(ks1, ka1, ks2, ka2);
