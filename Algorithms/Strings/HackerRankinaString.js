let a = "rhackerank";
function hackerrankInString(s) {
  let sozEsas = "hackerrank";
  let sozYeni = "";
  let x;
  console.log(s.indexOf("b"));
  let z = 0;
  for (let i = 0; i < sozEsas.length; i++) {
    for (let j = z; j < s.length; j++) {
      if (sozEsas[i] == s[j]) {
        sozYeni += `${s[j]}`;
        x = sozYeni.length;
        z = j + 1;
        break;
      }
    }
    console.log(sozYeni);
  }

  if (sozEsas == sozYeni) {
    console.log(sozYeni);
    console.log("YES");
    return "YES";
  } else {
    console.log(sozYeni);
    console.log("NO");
    return "NO";
  }
}
hackerrankInString(a);
