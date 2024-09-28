function solution(n) {
    function getDivisors(num) {
        let count = 0;
        for (let i = 1; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                count +=1;
                if (i !== num / i) {
                    count +=1;
                }
            }
        }
        return count;
    }
    let sum = 0;
    for(let i = 3;i<=n;i++){
        if(getDivisors(i) > 2) sum+=1;
    }
    return sum;
}