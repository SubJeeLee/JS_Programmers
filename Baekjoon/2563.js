const [N, ...pairs] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map((v) => v.split(" ").map(Number));

const matrix = Array.from({ length: 100 }, () => Array(100).fill(0));
let sum = 0;
let max = Math.pow(10, 2) * N;

for (const [x, y] of pairs) {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      matrix[x + i][y + j] += 1;
    }
  }
}

for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    if (matrix[i][j] != 0 && matrix[i][j] != 1) sum += matrix[i][j] - 1;
  }
}

console.log(max - sum);
