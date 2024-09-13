function solution(intStrs, k, s, l) {
    let answer = [];
    for(let i= 0;i<intStrs.length;i++){
        let tmp = Number(intStrs[i].slice(s,l+s));
        if(k<tmp) answer.push(tmp); 
    } 
    return answer;
}

console.log(solution(["0123456789","9876543210","9999999999999"],50000,5,5));

//다른 풀이
function solution(intStrs, k, s, l) {
    return intStrs.map((v) => +v.slice(s, s + l)).filter((v) => v > k);
}