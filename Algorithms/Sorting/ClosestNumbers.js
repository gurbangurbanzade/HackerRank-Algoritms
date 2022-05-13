let ar = [5, 4, 3, 2];

function closestNumbers(arr) {
  let arrNew = [];
  arr.sort((a, b) => a - b);
  let minFerq = arr[1] - arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] < minFerq) {
      minFerq = arr[i] - arr[i - 1];
    }
  }
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] == minFerq) {
      arrNew.push(arr[i - 1]);
      arrNew.push(arr[i]);
    }
  }

  console.log(minFerq);
  console.log(arr);
  console.log(arrNew);
  return arrNew;
}
closestNumbers(ar);
