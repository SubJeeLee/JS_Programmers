function solution(people, limit) {
    // 사람들을 체중 기준으로 내림차순 정렬
    let sortedA = [...people].sort((a, b) => a - b);
    let cnt = 0;
    let left = 0;
    let right = sortedA.length - 1;
    while (left <= right) {
        if (sortedA[left] + sortedA[right] <= limit) {
            left++;
        }
        right--;
        cnt++;
    }
    
    return cnt;
}

// people	limit	return
// [70, 50, 80, 50]	100	3
// [70, 80, 50]	100	3