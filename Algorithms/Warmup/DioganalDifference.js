let ar = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
];

function diagonalDifference(arr) {
  // Write your code here
  let say = 0;
  let sumDuz = 0;
  let sumTers = 0;
  let newAr = [];

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i == j) {
        sumDuz += arr[i][j];
      }
    }
  }

  for (let i = 0; i < arr.length; i++) {
    say++;
    for (let j = arr.length - say; j >= 0; j--) {
      sumTers += arr[i][j];

      break;
    }
  }
  console.log(sumDuz);
  console.log(sumTers);
  console.log(Math.abs(sumDuz - sumTers));
}
diagonalDifference(ar);
