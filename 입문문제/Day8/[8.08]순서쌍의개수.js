// function solution(n) {
//     let answerArr = [];
//     for(let i =1;i<=n;i++){
//         if(n % i === 0) answerArr.push([i,n/i]);
//     }
//     return answerArr.length;
// }

console.log(solution(20));

// 잘푼 사람 풀이
function solution(n) {
      return Array(n).fill(1).map((v,idx) => v + idx).filter(v => n % v === 0).length
}