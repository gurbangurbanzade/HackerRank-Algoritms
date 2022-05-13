// let order = [5, 4, 1, 6, 7, 4, 8];
let order = [10, 30];
let k = 10;
function filledOrders(order, k) {
  let arr = order.sort(function (a, b) {
    return a - b;
  });
  console.log(arr);
  let say = 0;
  let cem = 0;
  for (let i = 0; i < arr.length; i++) {
    cem += arr[i];
    if (cem <= k) {
      say++;
    } else {
      break;
    }
  }
  console.log(say);
  return say;
}
filledOrders(order, k);
