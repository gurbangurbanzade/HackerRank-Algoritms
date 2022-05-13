let ar = [0, 1, 2, 4, 6, 5, 3];

function closestNumbers(arr) {
  let median;
  arr.sort((a, b) => a - b);

  median = Math.floor(arr.length / 2);
  console.log(arr);
  console.log(arr[median]);

  return arr[median];
}
closestNumbers(ar);
