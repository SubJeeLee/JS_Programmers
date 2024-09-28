function solution(picture, k) {
    let answer = [];
    
    for (let i = 0; i < picture.length; i++) {
        // 현재 행을 k번 반복한 문자열 생성
        const expandedRow = picture[i].split('').map(e => e.repeat(k)).join('');
        // 생성된 문자열을 k번 추가
        for (let j = 0; j < k; j++) {
            answer.push(expandedRow);
        }
    }
    
    return answer;
}

console.log(solution([".xx...xx.", "x..x.x..x", "x...x...x", ".x.....x.", "..x...x..", "...x.x...", "....x...."],2));

//다른 풀이
function solution(picture, k) {
    return picture.flatMap(row => 
        Array.from({ length: k }, () => 
            row.split('').map(char => char.repeat(k)).join('')
        )
    );
}