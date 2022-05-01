let a = "We promptly judged antique ivory buckles for the prize";

function pangrams(s) {
  // Write your code here
  let say = 0;
  let alphabet = "abcdefghijklmnopqrstuvwxyz";
  for (let i = 0; i < alphabet.length; i++) {
    for (let j = 0; j < s.length; j++) {
      if (alphabet[i] == s[j] || alphabet[i].toUpperCase() == s[j]) {
        say++;
        break;
      }
    }
  }
  console.log(say);
  if (say < 26) {
    console.log("not pangram");
    return "not pangram";
  } else {
    console.log("pangram");
    return "pangram";
  }
}
pangrams(a);
