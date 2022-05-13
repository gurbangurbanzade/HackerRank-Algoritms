// All OK

// let a = [
//   "179443854",
//   "961621369",
//   "164139922",
//   "968633951",
//   "812882578",
//   "257829163",
//   "812438597",
//   "176656233",
// ];
let a = ["1112", "1912", "1892", "1234"];

function cavityMap(grid) {
  // Write your code here
  let arr = [];
  for (let i = 0; i < grid.length; i++) {
    arr[i] = "";
    for (let j = 0; j < grid.length; j++) {
      if (
        i !== 0 &&
        j !== 0 &&
        i !== grid.length - 1 &&
        j !== grid.length - 1 &&
        grid[i][j] > grid[i - 1][j] &&
        grid[i][j] > grid[i + 1][j] &&
        grid[i][j] > grid[i][j - 1] &&
        grid[i][j] > grid[i][j + 1]
      ) {
        // console.log(grid[i][j]);
        // grid[i][j] = this;
        // console.log(grid[i]);
        // grid[i] = grid[i].replace(`${grid[i][j]}`, "X");
        // console.log(grid[i]);
        arr[i] += "X";
      } else {
        arr[i] += `${grid[i][j]}`;
      }
    }
  }
  console.log(grid);
  console.log(arr);
  return arr;
}
cavityMap(a);
