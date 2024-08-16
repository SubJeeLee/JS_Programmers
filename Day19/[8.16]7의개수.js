function solution(array) {
    return array.join('').split('').filter(e => e === '7').length;
}

console.log(solution([10, 29]));  // 0
console.log(solution([7, 77, 17])); // 4


//다른 풀이
function solution(array) {
    return array.join('').split('7').length-1;
}