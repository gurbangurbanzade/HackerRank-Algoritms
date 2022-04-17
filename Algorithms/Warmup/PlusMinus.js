let ar = [-4, 3, -9, 0, 4, 1];
console.log(ar.length);

function plusMinus(arr) {
  let sayM = 0;
  let sayP = 0;
  let sayZ = 0;
  let m, p, z;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sayP++;
    } else if (arr[i] < 0) {
      sayM++;
    } else {
      sayZ++;
    }
  }
  m = sayM / arr.length;
  p = sayP / arr.length;
  z = sayZ / arr.length;
  return console.log(`${p}\n${m}\n${z}`);
}
plusMinus(ar);
