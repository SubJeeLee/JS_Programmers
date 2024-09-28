function solution(chicken) {
    let sum = 0;
    let coupon = chicken;
    while(true){
        coupon = coupon/10;
        sum += coupon;
        if(coupon < 10) break; 
    }
    console.log(chicken, sum);
    return parseInt((chicken + sum)/10);
}

console.log(solution(1999));
console.log(solution(1081));
console.log(solution(100));

// 1999 / 10 = 199.9
// 199.9 / 10 = 19.99
// 19.99 / 10 = 1.999


//다른 풀이
function solution(chicken) {
    var answer = parseInt((chicken-1) / 9);
    return answer;
}
