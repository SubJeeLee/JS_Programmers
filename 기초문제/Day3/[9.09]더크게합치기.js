function solution(a, b) {
    return Number(String(a)+b) > Number(String(b)+a) ? Number(String(a)+b) : Number(String(b)+a);
}

//다른 풀이
function solution(a, b) {
    return Math.max(Number(`${a}${b}`), Number(`${b}${a}`))
}