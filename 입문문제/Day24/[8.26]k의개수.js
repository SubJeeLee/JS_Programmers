function solution(i, j, k) {
    let sum = 0;
    for(let num = i; num<=j;num++){
        sum += num.toString().split(k).length - 1;
    }
    return sum;
}

console.log(solution(1,13,1));

//다른 풀이
function solution(i, j, k) {
    let a ='';
    for(i;i<=j;i++){
        a += i;
    }
    return a.split(k).length-1;
}
