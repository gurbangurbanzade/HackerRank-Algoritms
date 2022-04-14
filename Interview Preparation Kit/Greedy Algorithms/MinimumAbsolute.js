let ar = [3, -7, 0];
function minimumAbsoluteDifference(arr) {
  let sum;
  let min = Math.abs(arr[0]);

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (i !== j) {
        sum = arr[i] - arr[j];
        sum = Math.abs(sum);
        //console.log(sum);
        if (sum < min) {
          min = sum;
        }
      }
    }
  }
  console.log(min);
}
minimumAbsoluteDifference(ar);

//
// sayta bu hisse copy olunub atilmalidi
//

//  let sum;
//  let min = Math.abs(arr[0] - arr[1]);

//  for (let i = 0; i < arr.length; i++) {
//    for (let j = 0; j < arr.length; j++) {
//      if (i !== j) {
//        sum = arr[i] - arr[j];
//        sum = Math.abs(sum);
//        //console.log(sum);
//        if (sum < min) {
//          min = sum;
//        }
//      }
//    }
//  }
//  return min;
