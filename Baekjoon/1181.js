const input = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

const [N, ...words] = input;

const arr = words.sort((a, b) => {
  if (a.length !== b.length) return a.length - b.length;
  if (a < b) return -1;
  if (a > b) return 1;
});

console.log([...new Set(arr)].join("\n"));
