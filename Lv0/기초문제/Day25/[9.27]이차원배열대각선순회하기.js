function solution(board, k) {
    let sum=0;
   for(let i =0;i<board.length;i++){
       for(let j=0;j<board[i].length;j++){
           if(i+j<=k) sum+= board[i][j];
       }
   }
    return sum;
}


//다른 풀이
function solution(board, k) {
    return board.reduce(
      (total, row, i) => total + row.reduce((prev, num, j) => (i + j <= k ? prev + num : prev), 0),
      0,
    );
  }