const fs = require("fs");
const input = fs.readFileSync("example.txt").toString().trim().split("\n");
const [N, M] = input[0].split(" ").map(Number);

const dict = Array.from({ length: N + 1 }, (_, i) => i);
for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  let tmp = dict[a];
  dict[a] = dict[b];
  dict[b] = tmp;
}
dict.shift();

console.log(dict.join(" "));
