// const fs = require("fs");
// const input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const input = require("fs").readFileSync("example.txt").toString().split("\n");

let result = "";
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 5; j++) {
    if (input[j] && input[j][i] !== undefined) {
      result += input[j][i];
    }
  }
}

console.log(result);
