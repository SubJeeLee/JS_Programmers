function solution(numbers) {
    let sum = [];
    for(let i =1;i<=9;i++){
        if(!numbers.includes(i)) sum.push(i); 
    }
    return sum.reduce((a,b)=> a+b);
}

//다른 풀이
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}