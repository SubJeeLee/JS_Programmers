function solution(num, k) {
    let answer = String(num).split('').indexOf(String(k))+1;   
    if(answer >= 1) return answer;
    else return -1;
}

console.log(solution(22183,2));


//잘 푼 풀이
// || 연산자를 잘 사용하자
function solution(num, k) {
    return num.toString().split("")
    .map((el) => Number(el)).indexOf(k) + 1 || -1
}