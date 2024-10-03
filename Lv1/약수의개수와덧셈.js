function solution(left, right) {
    function divisor(num) {
        let sum = 0;
        if(Number.isInteger(Math.sqrt(num))) sum++;
        for(let i =1;i<Math.sqrt(num);i++){
            if(num % i === 0) sum+=2;
        }
        return sum;
    } 
    let result = 0;
    for(let i =left; i<=right;i++) 
        divisor(i)%2===0 ? result+=i : result-=i;
    return result;
}