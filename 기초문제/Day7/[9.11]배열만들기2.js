function solution(l, r) {
    
    function isFiveOrZero(num) {
        const digits = num.toString();
        for (let i = 0; i < digits.length; i++) {
            if (digits[i] !== '5' && digits[i] !== '0') {
                return false;
            }
        }
        return true;
    }

    let answer =[];
    for(let i =l;i<=r;i++)
        if(isFiveOrZero(i)) answer.push(i);
    if(answer.length < 1) answer.push(-1);
    return answer;
}

//다른 풀이
function solution(l, r, arr = []) {
    for(let i = l; i <= r; i++) {
        if (i.toString().replaceAll(/[05]/g, '') === '') arr.push(i);
    }
    return arr.length ? arr : [-1];
}