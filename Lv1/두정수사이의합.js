function solution(a, b) {
    const big = Math.max(a,b);
    const small = Math.min(a,b);
    let arr = Array.from({length:big-small +1},(_,i)=> small+i);
    return arr.reduce((a,b) => +a + +b);
}

console.log(solution(3,5));

//다른풀이
function solution(a, b){
    return (a+b) * (Math.abs(a-b)+1) / 2;
}