function solution(k, m, score) {
    // 점수를 내림차순으로 정렬
    let sortedArr = score.sort((a, b) => b - a);
    let sum = 0;
    
    // m개씩 묶어서 최소값을 계산
    for (let i = 0; i < Math.floor(sortedArr.length / m); i++) {
        // m번째 요소 (인덱스는 i * m + (m - 1))
        sum += sortedArr[i * m + (m - 1)] * m;
    }
    
    return sum;
}

// k	m	score	result
// 3	4	[1, 2, 3, 1, 2, 3, 1]	8
// 4	3	[4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2]	33

//다른 풀이
function solution(k, m, score) {
    let answer = 0;
    const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}