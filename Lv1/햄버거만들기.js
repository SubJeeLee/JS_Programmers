function solution(ingredient) {
    let stack = [];
    let cnt = 0;

    for (let item of ingredient) {
        stack.push(item);

        // 스택의 길이가 4 이상일 때만 검사
        if (stack.length >= 4) {
            const lastFour = stack.slice(-4).join('');
            console.log(lastFour);
            if (lastFour === '1231') {
                // "1231"을 발견했으니 4개 요소를 제거
                stack.length -= 4; // 마지막 4개 요소 제거
                cnt++;
            }
        }
    }
    
    return cnt;
}

// ingredient	result
// [2, 1, 1, 2, 3, 1, 2, 3, 1]	2
// [1, 3, 2, 1, 2, 1, 3, 1, 2]	0