a = "AABBBAABBA";
console.log(a);

function alternatingCharacters(s) {
  let say = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == s[i + 1]) {
      say++;
    }
  }
  console.log(say);
}

alternatingCharacters(a);

// sayta bu hisseni copy edib atmaq lazimdir

//   let say = 0;
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] == s[i + 1]) {
//       say++;
//     }
//   }
//   return say
