function solution(board, moves) {
    let answer = [];
    let cnt = 0;
    let L = board.length;
    let arr = new Array(L).fill(null).map(() => []);

    for (let i = 0; i < L; i++) {
        for (let j = 0; j < L; j++) {
            if (board[j][i] !== 0) {
                arr[i].push(board[j][i]);
            }
        }
    }

    for (let move of moves) {
        let column = arr[move - 1];
        if (column.length > 0) {
            let doll = column.shift();
            if (answer.length > 0 && answer[answer.length - 1] === doll) {
                answer.pop();
                cnt += 2;
            } else {
                answer.push(doll);
            }
        }
    }

    return cnt;
}

// board	moves	result
// [[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]]	
// [1,5,3,5,1,2,1,4]	4