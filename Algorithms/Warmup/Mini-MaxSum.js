// ALL - OK
let ar = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(
    `${sum - Math.max.apply(Math, arr)} ${sum - Math.min.apply(Math, arr)}`
  );
  return `${sum - Math.max.apply(Math, arr)} ${
    sum - Math.min.apply(Math, arr)
  }`;
}
miniMaxSum(ar);
