function solution(board) {
    const boom = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];
    
    board.forEach((row, i) => 
        row.forEach((cell, j) => {
            if (cell === 1) {
                board[i][j] = 2;
                boom.forEach(([dx, dy]) => {
                    let x = i + dx, y = j + dy;
                    if (board[x]?.[y] === 0) board[x][y] = 2;
                });
            }
        })
    );

    return board.flat().reduce((acc, cell) => acc + (cell === 0), 0);
}

// function solution(board){
//     let count = 0;
//     const boom = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];
//     for(let i=0;i<board.length;i++){
//         for(let j= 0;j<board[i].length;j++){
//             if(board[i][j] === 1){
//                 board[i][j] =2;
//                 boom.map(a => {
//                     let [x,y] = a;
//                     let xValue = x + i;
//                     let yValue = y + j;
//                     if(xValue >= 0 && yValue >= 0 && xValue < board.length 
//                         && yValue < board[i].length && board[xValue][yValue] !== 1) board[xValue][yValue] = 2;
//                 });
//             }
//         }
//     }
//     for(let i=0;i<board.length;i++){
//         for(let j= 0;j<board[i].length;j++){
//             if(board[i][j] === 0) count +=1;
//         }
//     }
//     console.log(board);
//     return count;
// }

console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 0, 0], [0, 0, 0, 0, 0]]));
console.log(solution([[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 1, 1, 0], [0, 0, 0, 0, 0]]));
console.log(solution([[1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1]]))


//잘 푼 풀이
function solution(board) {

    let outside = [[-1,0], [-1,-1], [-1,1], [0,-1],[0,1],[1,0], [1,-1], [1,1]];
    let safezone = 0;

    board.forEach((row, y, self) => row.forEach((it, x) => {
        if (it === 1) return false;
        return outside.some(([oy, ox]) => !!self[oy + y]?.[ox + x])
               ? false : safezone++;
    }));

    return safezone;
}
