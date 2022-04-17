let c = "fcrxzwscanmligyxyvym";
let d = "jxwtrhvujlmrpdoqbisbwhmgpmeoke";

function makeAnagram(a, b) {
  console.log(b);
  let z = a.length;
  let y = b.length;
  let silinenSay;
  let say = 0;
  let yeniStr = "";
  let w = b;
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < w.length; j++) {
      if (a[i] == w[j]) {
        say++;
        w = w.replace(`${w[j]}`, "");
        console.log(w);
        console.log(say);
        yeniStr += a[i];
        break;
      }
    }
  }
  console.log(yeniStr);
  console.log(say);
  silinenSay = a.length - say + (b.length - say);
  console.log(silinenSay);
}
makeAnagram(c, d);
//rxws
//w = a.replace("f", "");
