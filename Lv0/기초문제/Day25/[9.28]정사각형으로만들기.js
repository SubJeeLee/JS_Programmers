function solution(arr) {
    const row = arr.length;
    const col = arr[0].length;

    if(row > col){
        for(let i = col; i < row; i++){
            for(let j = 0; j < row; j++) arr[j].push(0);
        }
    } else if(row < col){
        for(let i = row; i < col; i++) arr.push(new Array(col).fill(0));
    }
    return arr;
}