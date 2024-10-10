function solution(number, limit, power) {
    let result = [1,];
    function divisor(num) {
        let sum = 0;
        for(let i =1;i<=Math.sqrt(num); i++){
            if(num%i === 0) num/i === i ? sum++ : sum+=2;
        }
        return sum;
    }
    
    for(let i =2;i<=number; i++){
        let tmp = divisor(i);
        if(tmp > limit) result.push(power);
        else result.push(tmp);
    }
    return result.reduce((a,b) => a+b);
}


// number	limit	power	result
// 5	3	2	10
// 10	3	2	21