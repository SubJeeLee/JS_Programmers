function solution(arr, n) {
    return arr.length%2 === 0 ? arr.map((e,i) => i%2 === 1 ? e+n : e) : 
    arr.map((e,i) => i%2 === 0 ? e+n : e)
}

//다른 풀이
const solution = (arr, n) => arr.map((num, idx) => (
    arr.length % 2 !== idx % 2
    ? num + n
    : num
))