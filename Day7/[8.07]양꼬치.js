function solution(n, k) {
    let Service = Math.floor(n/10);
    return n * 12000 + k * 2000 - Service * 2000;
}


// --------- 잘 푼 사람 풀이 ---------
// function solution(n, k) {
//     k-=~~(n/10);
//     if (k < 0) k = 0;
//     return n*12000+k*2000;
// }
//틸트 연산자  --> Math.floor() 와 동등하게 쓰이는 연산자