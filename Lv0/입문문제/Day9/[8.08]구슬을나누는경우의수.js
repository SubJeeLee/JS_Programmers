function solution(balls, share) {
    function facto(n){
        let result = 1;
        for(let i = n; i>=1; i--) result *= i;
        return result;
    }
    return Math.round(facto(balls)/(facto(balls-share)*facto(share)));
}

console.log(solution(1,1));

//Math.round => 반올림
//Math.floor => 정수 내림