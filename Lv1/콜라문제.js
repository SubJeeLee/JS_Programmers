function solution(a, b, n) {
    let answer = 0;
    while(n>=a && n>=2){
        answer += parseInt(n/a)*b;
        n = parseInt(n/a)*b + (n%a);
    }
    return answer;
}

// a	b	n	result
// 2	1	20	19
// 3	1	20	9