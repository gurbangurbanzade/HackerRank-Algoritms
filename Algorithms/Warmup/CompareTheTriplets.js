let c = [5, 6, 7];

let d = [8, 6, 10];
function compareTriplets(a, b) {
  let A = 0;
  let B = 0;
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      A++;
    } else if (a[i] < b[i]) {
      B++;
    }
  }
  arr.push(A);
  arr.push(B);
  console.log(arr);
  return arr;
}
compareTriplets(c, d);
