function solution(x) {
    return Number.isInteger(x/String(x).split('').reduce((a,b) => a+ +b,0));
}


//다른 풀이
function Harshad(n){
    return !(n % (n + "").split("").reduce((a, b) => +b + +a ));
  }