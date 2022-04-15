let ar = [1, 2, 3, 4, 5];
function rotLeft(a, d) {
  let arr = [];
  for (let i = 0; i < a.length; i++) {
    if (d < a.length) {
      arr[i] = a[d];
      d++;
    } else {
      d = 0;
      arr[i] = a[d];
      d++;
    }
  }
  console.log(arr);
}
rotLeft(ar, 3);

// sayta bu hisse copy edilecek

// function rotLeft(a, d) {
//     // Write your code here
// let arr = [];
//   for (let i = 0; i < a.length; i++) {
//     if (d < a.length) {
//       arr[i] = a[d];
//       d++;
//     } else {
//       d = 0;
//       arr[i] = a[d];
//       d++;
//     }
//   }
//   return arr;
// }
