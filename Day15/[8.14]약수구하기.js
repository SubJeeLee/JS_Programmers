function solution(n) {
    let arr = [];
    for(let i = 1; i<= Math.sqrt(n);i++){
        if(n % i === 0){
            arr.push(i);
            if(i!==n/i) arr.push(n/i); //중복 제거
        }
    }
    return arr.sort((a,b) => a - b);
}

console.log(solution(16));


//다른 풀이
function solution(n) {
    return Array(n).fill(0).map((v, index) => v+index+1).filter((v) => n%v===0);
}
