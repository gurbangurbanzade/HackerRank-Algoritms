let p = [1, 2, 4, 3, 8, 5];

function maximumToys(prices, k) {
  let sum = 0;
  let say = 0;
  prices = prices.sort((a, b) => a - b);
  console.log(prices);
  for (let i = 0; i < prices.length; i++) {
    sum = sum + prices[i];
    if (sum > k) {
      break;
    } else {
      say++;
    }
  }
  console.log(say);
}
maximumToys(p, 7);

//
//sayta bu hisseni copy etmek lazimdir
//
//
//
// let sum = 0;
// let say = 0;
// prices = prices.sort((a, b) => a - b);
// console.log(prices);
// for (let i = 0; i < prices.length; i++) {
//   sum = sum + prices[i];
//   if (sum > k) {
//     break;
//   } else {
//     say++;
//   }
// }
// console.log(say);
