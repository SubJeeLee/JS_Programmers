function solution(number, n, m) {
    return number % n === 0 && number % m === 0 ? 1: 0;
}


//다른 풀이
function solution(number, n, m) {
    return +!(number % n || number % m);
  }
  //+ 는 단항 연산자 즉 true 면 1을 return, false -> 0