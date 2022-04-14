// ar = [10, 20, 20, 10, 10, 30, 50, 10, 20] Arreyində olan ədədlərdən
// neçəsi bir-biri ilə cütlük təşkil edir? Nəzərə alın ki, ədədlər təkrarlanmamalıdır.
// Məsələn. 10=10 (1), 10=10 (2), 20=20(3). Cavab 3. 3 dənə 20 ədədi olduğundan
// 2-si bir-biri ilə cütlənir 3-cü tək qalır və hesaba alınmır.
let array = [10, 20, 20, 10, 10, 30, 50, 10, 20];

// function sockMerchant(n, ar) {
//   let obj =
//   console.log(obj);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (i !== j) {
//         if (ar[i] == ar[j]) {
//           obj[ar[i]]++;
//           Object.values(obj[ar[i]]);

//           console.log(obj);
//           break;
//         }
//       } else {
//         break;
//       }
//     }
//   }
// }

// sockMerchant(9, array);

function sockMerchant(n, ar) {
  ar = ar.sort((a, b) => a - b);
  let say = 0;
  let net;
  console.log(ar);
  for (let i = 0; i < ar.length - 1; i++) {
    for (let j = i + 1; j < ar.length; j++) {
      if (ar[i] == ar[j]) {
        say++;
        console.log(say);
        break;
      }
    }
  }
}

sockMerchant(9, array);
