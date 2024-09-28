function solution(numbers) {
    return numbers.sort((a,b) => b-a).slice(0,2).reduce((a,b)=>a*b,1);
}

console.log(solution([1,2,3,4,5]));