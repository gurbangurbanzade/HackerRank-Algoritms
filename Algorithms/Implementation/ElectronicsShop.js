//  Run Code - OK
//  Submit Code - Not OK
//
let a = [3, 1];
let c = [5, 2, 8];
let m = 10;

function getMoneySpent(keyboards, drives, b) {
  /*
   * Write your code here.
   */
  let z = -1;
  let max = 1;
  let price = 1;

  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      if (keyboards[i] + drives[j] <= b) {
        if (keyboards[i] + drives[j] >= max) {
          price = keyboards[i] + drives[j];
        } else {
          price = max;
        }
      } else {
        break;
      }
    }
  }
  if (price == 1) {
    return z;
  }
  return price;
}

getMoneySpent(a, c, m);
