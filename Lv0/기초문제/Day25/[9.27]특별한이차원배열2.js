function solution(arr) {
    let answer =[];
    for(let i =0; i<arr.length;i++){
        for(let j=0;j<arr[i].length;j++) arr[i][j] === arr[j][i] ? answer.push(1) : answer.push(0);
    }
    return answer.includes(0) ? 0: 1;
}