function solution(numbers, n) {
    let sum =0;
    for(let i =0;i<numbers.length;i++){
        sum += numbers[i];
        if(sum > n) return sum;
    }
}


//다른 풀이

function solution(numbers, n) {
    return numbers.reduce((a,c)=>(a<=n)?a+c:a)
}