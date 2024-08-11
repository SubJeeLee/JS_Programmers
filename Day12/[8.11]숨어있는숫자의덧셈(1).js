function solution(my_string) {
    return my_string.match(/\d/g).map(Number).reduce((acc,curr) => acc + curr);
}

console.log(solution("aAb1B2cC34oOp"));



// 다른 사람 풀이
function solution(my_string) {
    const answer = my_string.replace(/[^0-9]/g, '')
                            .split('')
                            .reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
}