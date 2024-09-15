function solution(n, k) {
    let answer = [];
    for(let i =1;i<=n;i++) {
        if(i%k===0) answer.push(i);
    }
    return answer;
}

console.log(solution(10,3));

//다른풀이
function solution(n, k) {
    return Array(n).fill(1).map((v,i)=>v+i).filter((v)=>v%k===0)
}

//다른풀이
const solution=(n,k)=>Array(~~(n/k)).fill(k).map((v,i)=>v*(i+1))