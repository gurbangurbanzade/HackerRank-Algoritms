let a = "world";
let b = "zosw";
function twoStrings(s1, s2) {
  let coxluq = "";
  console.log(s1);
  for (let i = 0; i < s1.length; i++) {
    for (let j = 0; j < s2.length; j++) {
      if (s1[i] == s2[j]) {
        coxluq = coxluq + s1[i];
      }
    }
  }
  console.log(coxluq);
}
twoStrings(a, b);
