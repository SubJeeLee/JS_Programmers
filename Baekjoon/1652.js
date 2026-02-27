const [N, ...arr] = require("fs")
  .readFileSync("example.txt")
  .toString()
  .trim()
  .split("\n");

console.log(N, arr);

let rowCount = 0;
let colCount = 0;

// 가로 검사
for (let i = 0; i < N; i++) {
  let cnt = 0;
  for (let j = 0; j < N; j++) {
    if (arr[i][j] === ".") {
      cnt++;
    } else {
      // 'X'를 만난 경우
      if (cnt >= 2) rowCount++;
      cnt = 0;
    }
  }
  // 마지막 검사
  if (cnt >= 2) rowCount++;
}

// 세로 검사
for (let i = 0; i < N; i++) {
  let cnt = 0;
  for (let j = 0; j < N; j++) {
    if (arr[j][i] === ".") {
      cnt++;
    } else {
      if (cnt >= 2) colCount++;
      cnt = 0;
    }
  }
  if (cnt >= 2) colCount++;
}

console.log(rowCount, colCount);
