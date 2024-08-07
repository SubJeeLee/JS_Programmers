function solution(n){
    let sum = 0;
    for(let i = 2; i<= n; i+=2) sum += i;
    return sum;
}


// 잘 푼 사람 풀이
// function solution(n) {
//     var half = Math.floor(n/2);
//     return half*(half+1);
// }
