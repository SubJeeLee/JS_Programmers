function solution(arr, divisor) {
    let answer = arr.filter(e => Number.isInteger(e/divisor)).sort((a,b) => a-b);
    return answer.length > 0 ? answer : [-1];
}