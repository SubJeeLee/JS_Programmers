function solution(n) {
    const dp = Array(n + 1).fill(0);
    dp[1] = 1;
    dp[2] = 2;
    for (let i = 3; i <= n; i++) {
        dp[i] = (dp[i - 2] + dp[i - 1]) % 1234567;
    }
    return dp[n];
}

// n	result
// 4	5
// 3	3