function solution(n, t) {
    let sum = n;
    for(let i =0;i<t;i++) sum *=2;
    return sum;
}

console.log(solution(2,10))



//잘 푼 풀이
//shift 연산자

function solution(n, t) {
    return n << t;
  }