let k = 2;
let ar = [1, 5, 3, 4, 2];

function pairs(k, arr) {
  let say = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] - arr[j] == k) {
        say++;
      }
    }
  }
  console.log(say);
}

pairs(k, ar);
