function solution(array, height) {
    return array.filter(e => e > height).length;
}

console.log(solution([149, 180, 192, 170],167)); // 3