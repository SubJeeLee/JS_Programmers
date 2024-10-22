function solution(n) {
    const memo = [0, 1]; // 초기값 설정 (fibo(0) = 0, fibo(1) = 1)
    
    for (let i = 2; i <= n; i++) {
        memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567; // 모듈로 연산을 합에 적용
    }
    
    return memo[n];
}

// n	return
// 3	2
// 5	5