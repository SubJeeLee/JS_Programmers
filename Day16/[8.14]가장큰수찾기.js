function solution(array) {
    let maxValue = Math.max(...array);
    return [maxValue,array.indexOf(maxValue)];
}

console.log(solution([1,8,3]));