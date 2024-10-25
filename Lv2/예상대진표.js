function solution(n,a,b)
{
    let cnt = 0;
    
    while(a!==b){
        a = Math.ceil(a/2);
        b = Math.ceil(b/2);
        cnt++;
    }
    return cnt;
}

// N	A	B	answer
// 8	4	7	3