let a = 2;
let b = 5;
let c = 4;
function catAndMouse(x, y, z) {
  if (Math.abs(z - x) > Math.abs(z - y)) {
    console.log("Cat B");
    return "Cat B";
  } else if (Math.abs(z - x) < Math.abs(z - y)) {
    console.log("Cat A");
    return "Cat A";
  } else {
    console.log("Mouse C");
    return "Mouse C";
  }
}
catAndMouse(a, b, c);
