// a = 가장 긴 변  
//1. b + c > a   2. a > b, a > c 

function solution(sides) {
    let sum = 0;
    let arrSum = sides.reduce((a,b) => a+b,0);
    let arr = sides.sort((a,b) => b-a);
    for(let i = 1; i< arrSum;i++) if(i >= arr[0]) sum +=1;
    for(let i = 1; i< arr[0];i++) if(i+arr[1] > arr[0]) sum +=1;

    return sum;
}

console.log(solution([1,2]));
console.log(solution([3,6]));
console.log(solution([11,7]));



//잘 푼 풀이..
function solution(sides) {
    return Math.min(...sides)*2-1
}
