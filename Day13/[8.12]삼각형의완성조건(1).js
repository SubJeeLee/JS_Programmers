function solution(sides) {
    let maxValue = sides.sort((a,b) => a-b).pop();
    if(sides.reduce((a,b) => a + b) > maxValue) return 1;
    else return 2;
}

console.log(solution([199, 72, 222]));

// 잘푼 풀이
function solution(sides) {
    sides = sides.sort((a,b) => a-b)
    return sides[0]+sides[1] > sides[2] ? 1 : 2;
}
//굳이 pop을 시켜서 해줄 필요 없었다.