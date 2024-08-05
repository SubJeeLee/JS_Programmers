function solution(n) {
    let answer;
    for(let i = n*6; i>=1;i--){
        if(i%n === 0 && i%6 === 0) answer = i;
    }
    return Math.floor(answer/6);
}

let num = 12;
console.log(solution(num));