function solution(n)
{
    let cnt = 0;
    while(n !== 0){
        if(n % 2 === 1){
            n -= 1;
            cnt++;
        }
        n /= 2;
    }
    return cnt;
}

// N	result
// 5	2
// 6	2
// 5000	5