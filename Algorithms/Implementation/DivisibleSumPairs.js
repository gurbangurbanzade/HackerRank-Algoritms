// Submit Code OK

arr = [1, 3, 2, 6, 1, 2];

function divisibleSumPairs(k, ar) {
  let say = 0;
  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = i + 1; j <= ar.length; j++) {
      if (i !== j) {
        if ((ar[i] + ar[j]) % k == 0) {
          say++;
        }
      }
    }
  }
  console.log(say);
}
divisibleSumPairs(3, arr);

// sayta altdaki hisse yazilir

// function divisibleSumPairs(n, k, ar) {
//   // Write your code here
//   let say = 0;
//   for (let i = 0; i < ar.length - 1; i++) {
//     for (let j = i + 1; j <= ar.length; j++) {
//       if (i !== j) {
//         if ((ar[i] + ar[j]) % k == 0) {
//           say++;
//         }
//       }
//     }
//   }
//   return say;
// }
