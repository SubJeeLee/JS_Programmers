function solution(n) {
    let answer =[n,];
    while(n>1){
        if(n%2 === 0) n /= 2;
        else n = n*3+1;
        answer.push(n);
    }
    return answer;
}

console.log(solution(10));

//다른 풀이 (재귀)
function solution(n, arr = []) {
    arr.push(n)
    if (n === 1) return arr
    if (n % 2 === 0) return solution(n / 2, arr)
    return solution(3 * n + 1, arr)
}
