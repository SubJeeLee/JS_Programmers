function solution(n) {
    let answer = 0;
    let tmp = n % 2 === 0 ? 1 : 0; //짝수는 1 홀수는 0
    if(tmp) for(let i =1;i<=n;i++){
        if(i%2===0) answer += i*i;
    }
    else for(let i =1; i<=n;i++){
        if(i%2 !== 0) answer +=i;
    }
    return answer;
}

console.log(solution(7));