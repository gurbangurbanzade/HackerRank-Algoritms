// ALL - OK
let ar = [1, 2, 3, 4, 5, 4, 3, 2, 1];
function lonelyinteger(a) {
  let obj = {};
  for (let i = 0; i < a.length; i++) {
    if (obj[`${a[i]}`]) {
      obj[`${a[i]}`]++;
    } else {
      obj[`${a[i]}`] = 1;
    }
  }

  let arr = Object.values(obj);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == 1) {
      console.log(Object.keys(obj)[i]);
      return Object.keys(obj)[i];
    }
  }
}
lonelyinteger(ar);
