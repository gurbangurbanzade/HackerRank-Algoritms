let a = "a";
//a = a + a;
console.log(a);
function repeatedString(s, n) {
  let say = 0;
  let b;
  if (s.length > n) {
    for (let i = 0; i < n; i++) {
      if (s[i] == "a") {
        say++;
      }
    }
    console.log(say);
  } else {
    b = s + s;
    repeatedString(b, n);
  }
}
repeatedString(a, 100000000);

//
//sayta bu hisseni copy etmek lazimdir
//
//
// let say = 0;
// let b;
// if (s.length > n) {
//   for (let i = 0; i < n; i++) {
//     if (s[i] == "a") {
//       say++;
//     }
//   }
//   console.log(say);
// } else {
//   b = s + s;
//   repeatedString(b, n);
// }
