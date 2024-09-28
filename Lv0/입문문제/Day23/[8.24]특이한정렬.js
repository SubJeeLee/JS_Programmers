function solution(numlist, n) {
    let answer = numlist.sort((a,b) =>{
        let A = Math.abs(a-n);
        let B = Math.abs(n-b);
        if(A===B) return b -a;
        return A-B;
    });
    return answer;
}

console.log(solution([1, 2, 3, 4, 5, 6],4));
console.log(solution([10000,20,36,47,40,6,10,7000],30));

//잘 푼 풀이
function solution(numlist, n) {
    return numlist.sort((a, b) => Math.abs(a - n) - Math.abs(b - n) || b - a);
}
