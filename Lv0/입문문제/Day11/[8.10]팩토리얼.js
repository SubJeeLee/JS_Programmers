function solution(n) {
    let facto =[];
    for(let i = 1; i<=10;i++){
        let sum = 1;
        for(let j = 1;j<=i;j++) sum *=j;
        facto.push(sum);
    }
    for(let i=0;i<=facto.length;i++){
        if(facto[i] === n) return i+1;
        else if(facto[i] > n) return i;
    }
}

console.log(solution(25));

//잘푼 풀이
function solution(n) {
    for(let i = 1, v = 1; true; v *= ++i) if(v > n) return --i;
}
