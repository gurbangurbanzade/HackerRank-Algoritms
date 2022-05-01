// All ok
let arr = [18, 90, 90, 13, 90, 75, 90, 8, 90, 43];

function birthdayCakeCandles(candles) {
  let max = Math.max(...candles);
  let say = 0;

  for (let i = 0; i < candles.length; i++) {
    if (max == candles[i]) {
      say++;
    }
  }

  console.log(max);
  console.log(say);
  return say;
}
birthdayCakeCandles(arr);

// Aşağıdakı kod time error verdiyindən hazır methid ilə etmişəm

// function birthdayCakeCandles(candles) {
//   let max = candles[0];
//   let say = 0;
//   for (let i = 0; i < candles.length; i++) {
//     for (let j = 0; j < candles.length; j++) {
//       if (i !== j) {
//         if (candles[i] >= max) {
//           max = candles[i];
//         }
//       }
//     }
//   }

//   for (let i = 0; i < candles.length; i++) {
//     if (max == candles[i]) {
//       say++;
//     }
//   }

//   console.log(max);
//   console.log(say);
//   return say;
// }
// birthdayCakeCandles(arr);
