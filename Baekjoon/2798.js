const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);
const cards = input[1].split(" ").map(Number);

function solve() {
  let maxSub = 0;

  for (let i = 0; i < N - 2; i++) {
    for (let j = i + 1; j < N - 1; j++) {
      for (let k = j + 1; k < N; k++) {
        let sum = cards[i] + cards[j] + cards[k];

        if (sum === M) return sum;

        if (sum < M && sum > maxSub) {
          maxSub = sum;
        }
      }
    }
  }
  return maxSub;
}

console.log(solve());

// const fs = require("fs");
// const [[N, M], cards] = fs.readFileSync("example.txt").toString().trim().split("\n").map(v => v.split(" ").map(Number));

// let ans = 0;
// for (let i = 0; i < N; i++) {
//   for (let j = i + 1; j < N; j++) {
//     for (let k = j + 1; k < N; k++) {
//       const sum = cards[i] + cards[j] + cards[k];
//       if (sum <= M) ans = Math.max(ans, sum);
//     }
//   }
// }
// console.log(ans);
