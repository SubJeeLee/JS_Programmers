const [N, M, ...words] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split(/\s+/);

const S = new Set(words.slice(0, N));
const arr = words.slice(N, N + M);
let count = 0;

arr.forEach((word) => {
  if (S.has(word)) count++;
});

console.log(count);
