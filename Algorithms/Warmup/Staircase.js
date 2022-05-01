//all ok
function staircase(n) {
  let arr = [];
  for (let j = n; j >= 0; j--) {
    for (let i = 0; i < n; i++) {
      if (j == i) {
        arr.push("#");
        if (arr.length !== n) {
          for (let i = arr.length; i < n; i++) {
            arr.push("#");
          }
        }
        console.log(arr.join(""));
        break;
      }
      arr.push(" ");
    }
    arr.length = 0;
  }
}
staircase(8);
