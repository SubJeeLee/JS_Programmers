function solution(n) {
    return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}

console.log(solution(976));


//다른 풀이
function solution(n) {
    return Math.sqrt(n) % 1 === 0 ? 1 : 2;
}