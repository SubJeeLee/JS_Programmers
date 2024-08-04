function solution(n) {
    return n % 7 === 0 ? n/7 : Math.floor(n/7) + 1;
}

let num = 15;
console.log(solution(num));


//---------- 잘 푼 사람 풀이 -----------
// function solution(n) {
//     return Math.ceil(n / 7)
// }