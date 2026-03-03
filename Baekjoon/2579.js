const [N, ...input] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n")
  .map(Number);

const arr = [0, ...input];
const dp = new Array(N + 1).fill(0);

if (N === 1) return console.log(arr[1]);
if (N === 2) return console.log(arr[1] + arr[2]);

dp[1] = arr[1];
dp[2] = arr[1] + arr[2];
dp[3] = Math.max(arr[1] + arr[3], arr[2] + arr[3]);

for (let i = 4; i <= N; i++) {
  dp[i] = Math.max(dp[i - 3] + arr[i - 1], dp[i - 2]) + arr[i];
}

console.log(dp[N]);
