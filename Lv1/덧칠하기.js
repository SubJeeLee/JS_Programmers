function solution(n, m, sections) {
    let count = 0; // 덧칠 횟수
    let currentEnd = 0; // 현재 덧칠된 끝 위치

    for (const section of sections) {
        // 현재 섹션이 현재 덧칠된 끝 위치보다 뒤에 있는 경우
        if (section >= currentEnd) {
            count++; // 덧칠 횟수 증가
            currentEnd = section + m; // 현재 덧칠된 끝 위치 업데이트
        }
    }

    return count;
}


// n	m	section	result
// 8	4	[2, 3, 6]	2
// 5	4	[1, 3]	1
// 4	1	[1, 2, 3, 4]	4